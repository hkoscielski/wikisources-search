package pl.edu.pwr.swi.wikisourcessearchwebservice.config;

import lombok.Getter;
import lombok.Setter;
import org.apache.http.HttpHost;
import org.elasticsearch.client.RestClient;
import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("elasticsearch")
@Getter
@Setter
public class ElasticsearchConfig {

    private String hostname;
    private Integer port;

    @Bean(destroyMethod = "close")
    public RestHighLevelClient esClient() {
        return new RestHighLevelClient(
                RestClient.builder(new HttpHost(hostname, port))
        );
    }
}
