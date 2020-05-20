package pl.edu.pwr.swi.wikisourcessearchwebservice.service;

import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.elasticsearch.action.search.SearchRequest;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.MultiMatchQueryBuilder;
import org.elasticsearch.index.query.Operator;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.SearchHits;
import org.elasticsearch.search.builder.SearchSourceBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwr.swi.wikisourcessearchwebservice.config.ElasticsearchConstants;
import pl.edu.pwr.swi.wikisourcessearchwebservice.domain.Source;
import pl.edu.pwr.swi.wikisourcessearchwebservice.exception.ServiceUnavailableException;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.request.SearchRequestDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response.SearchResponseDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response.SourceResponseDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.util.ElasticsearchUtils;

import java.io.IOException;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@Service
public class ElasticsearchService {

    @Autowired
    private RestHighLevelClient esClient;

    public boolean ping() {
        try {
            return esClient.ping(RequestOptions.DEFAULT);
        } catch (IOException e) {
            throw new ServiceUnavailableException("Elasticsearch");
        }
    }

    public SearchResponseDTO searchSources(SearchRequestDTO searchRequestDTO) {
        try {
            SearchRequest searchRequest = new SearchRequest(ElasticsearchConstants.WIKISOURCES_INDEX);
            searchRequest.source(prepareSearchSourceBuilder(searchRequestDTO));
            SearchResponse searchResponse = esClient.search(searchRequest, RequestOptions.DEFAULT);
            return prepareSearchResponse(searchResponse);
        } catch (IOException e) {
            throw new ServiceUnavailableException("Elasticsearch");
        }
    }

    public SearchSourceBuilder prepareSearchSourceBuilder(SearchRequestDTO searchRequestDTO) {
        SearchSourceBuilder searchSourceBuilder = new SearchSourceBuilder();
        BoolQueryBuilder boolQueryBuilder = QueryBuilders.boolQuery();
        boolQueryBuilder = searchRequestDTO.getAny() == null ? boolQueryBuilder :
                boolQueryBuilder.must(
                        QueryBuilders.multiMatchQuery(
                                searchRequestDTO.getAny(),
                                Source.SEARCHABLE_TEXT_FIELDS.toArray(ArrayUtils.EMPTY_STRING_ARRAY)
                        )
                );
        boolQueryBuilder = searchRequestDTO.getAll() == null ? boolQueryBuilder :
                boolQueryBuilder.must(
                        QueryBuilders.multiMatchQuery(
                                searchRequestDTO.getAll(),
                                Source.SEARCHABLE_TEXT_FIELDS.toArray(ArrayUtils.EMPTY_STRING_ARRAY)
                        )
                                .operator(Operator.AND)
                );
        boolQueryBuilder = searchRequestDTO.getExact() == null ? boolQueryBuilder :
                boolQueryBuilder.must(
                        QueryBuilders.multiMatchQuery(
                                searchRequestDTO.getExact(),
                                Source.SEARCHABLE_TEXT_FIELDS.toArray(ArrayUtils.EMPTY_STRING_ARRAY)
                        )
                                .type(MultiMatchQueryBuilder.Type.PHRASE)
                );
        boolQueryBuilder = !ObjectUtils.anyNotNull(searchRequestDTO.getLastUpdateFrom(), searchRequestDTO.getLastUpdateTo()) ? boolQueryBuilder :
                boolQueryBuilder.must(
                        QueryBuilders.rangeQuery(Source.TIMESTAMP)
                                .gte(searchRequestDTO.getLastUpdateFrom())
                                .lte(ObjectUtils.defaultIfNull(searchRequestDTO.getLastUpdateTo(), Instant.now()))
                );
        boolQueryBuilder = searchRequestDTO.getNone() == null ? boolQueryBuilder :
                boolQueryBuilder.mustNot(
                        QueryBuilders.multiMatchQuery(
                                searchRequestDTO.getNone(),
                                Source.SEARCHABLE_TEXT_FIELDS.toArray(ArrayUtils.EMPTY_STRING_ARRAY)
                        )
                                .type(MultiMatchQueryBuilder.Type.PHRASE)
                );
        boolQueryBuilder = boolQueryBuilder.hasClauses() ? boolQueryBuilder : boolQueryBuilder.mustNot(QueryBuilders.matchAllQuery());
        searchSourceBuilder.query(boolQueryBuilder);
        searchSourceBuilder.from(ElasticsearchUtils.getValidFromValue(searchRequestDTO.getFrom()));
        searchSourceBuilder.size(ElasticsearchUtils.getValidSizeValue(searchRequestDTO.getSize()));
        return searchSourceBuilder;
    }

    private SearchResponseDTO prepareSearchResponse(SearchResponse searchResponse) {
        SearchHits searchHits = searchResponse.getHits();
        List<SourceResponseDTO> sources = new ArrayList<>();

        for (SearchHit sh : searchHits.getHits()) {
            Map<String, Object> source = sh.getSourceAsMap();
            sources.add(
                    SourceResponseDTO.builder()
                            .id(sh.getId())
                            .auxiliaryText((List<String>) source.getOrDefault(Source.AUXILIARY_TEXT, Collections.emptyList()))
                            .category((List<String>) source.getOrDefault(Source.CATEGORY, Collections.emptyList()))
                            .lastUpdate(Instant.parse((String) source.getOrDefault(Source.TIMESTAMP, null)))
                            .text((String) source.getOrDefault(Source.TEXT, StringUtils.EMPTY))
                            .title((String) source.getOrDefault(Source.TITLE, StringUtils.EMPTY))
                            .build()
            );
        }

        return SearchResponseDTO.builder()
                .hits(searchHits.getTotalHits().value)
                .took(searchResponse.getTook().millis())
                .source(sources)
                .build();
    }
}
