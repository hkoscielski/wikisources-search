package pl.edu.pwr.swi.wikisourcessearchwebservice.domain;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public final class Source {

    public static final String AUXILIARY_TEXT = "auxiliary_text";
    public static final String CATEGORY = "category";
    public static final String TEXT = "text";
    public static final String TIMESTAMP = "timestamp";
    public static final String TITLE = "title";
    public static final List<String> SEARCHABLE_TEXT_FIELDS = List.of(AUXILIARY_TEXT, CATEGORY, TEXT, TITLE);
}
