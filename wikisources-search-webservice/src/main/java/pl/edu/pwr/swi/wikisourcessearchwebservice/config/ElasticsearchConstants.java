package pl.edu.pwr.swi.wikisourcessearchwebservice.config;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class ElasticsearchConstants {

    public static final int DEFAULT_FROM = 0;
    public static final int DEFAULT_SIZE = 15;

    public static final String WIKISOURCES_INDEX = "wikisources";
}
