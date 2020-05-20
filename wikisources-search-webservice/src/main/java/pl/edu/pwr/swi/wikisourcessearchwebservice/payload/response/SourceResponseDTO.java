package pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.time.Instant;
import java.util.List;

@AllArgsConstructor
@Getter
@Builder
public class SourceResponseDTO {

    private final String id;
    private final List<String> auxiliaryText;
    private final List<String> category;
    private final String text;
    private final Instant lastUpdate;
    private final String title;
}
