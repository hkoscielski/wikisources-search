package pl.edu.pwr.swi.wikisourcessearchwebservice.config;

import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(ElasticsearchProperties.class)
public class ElasticsearchConfig {

    @Autowired
    private ElasticsearchProperties elasticsearchProperties;

    @Bean(destroyMethod = "close")
    public RestHighLevelClient esClient() {
        return new RestHighLevelClient(
                RestClient.builder(new HttpHost(elasticsearchProperties.getHostname(), elasticsearchProperties.getPort()))
        );
    }
}
