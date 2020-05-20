package pl.edu.pwr.swi.wikisourcessearchwebservice.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

@ConfigurationProperties("elasticsearch")
@ConstructorBinding
@AllArgsConstructor
@Getter
public class ElasticsearchProperties {

    private final String hostname;
    private final Integer port;
}
