package pl.edu.pwr.swi.wikisourcessearchwebservice.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.Instant;

@AllArgsConstructor
@Getter
@ToString
public class SearchRequestDTO {

    private final String all;
    private final String exact;
    private final String any;
    private final String none;

    private final Integer from;
    private final Integer size;

    private final Instant lastUpdateFrom;
    private final Instant lastUpdateTo;
}
