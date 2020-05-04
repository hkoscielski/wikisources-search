package pl.edu.pwr.swi.wikisourcessearchwebservice.service;

import org.elasticsearch.client.RequestOptions;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.edu.pwr.swi.wikisourcessearchwebservice.exception.ServiceUnavailableException;

import java.io.IOException;

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
}
