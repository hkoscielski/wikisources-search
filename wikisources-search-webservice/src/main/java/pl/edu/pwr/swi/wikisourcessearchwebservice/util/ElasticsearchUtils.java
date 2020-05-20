package pl.edu.pwr.swi.wikisourcessearchwebservice.util;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;
import org.apache.commons.lang3.ObjectUtils;
import pl.edu.pwr.swi.wikisourcessearchwebservice.config.ElasticsearchConstants;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class ElasticsearchUtils {


    public static int getValidFromValue(Integer from) {
        return ObjectUtils.defaultIfNull(from, 0) > 0 ? from : ElasticsearchConstants.DEFAULT_FROM;
    }

    public static int getValidSizeValue(Integer size) {
        return ObjectUtils.defaultIfNull(size, 0) > 0 ? size : ElasticsearchConstants.DEFAULT_SIZE;
    }
}
