package pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
@Builder
public class SearchResponseDTO {

    private final Long hits;
    private final Long took;
    private final List<SourceResponseDTO> source;
}
