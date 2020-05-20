package pl.edu.pwr.swi.wikisourcessearchwebservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.request.SearchRequestDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response.SearchResponseDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response.SourceResponseDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.service.ElasticsearchService;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class SearchController {

    @Autowired
    private ElasticsearchService elasticsearchService;

    @GetMapping("/sources")
    public ResponseEntity<SearchResponseDTO> searchSources(@Valid SearchRequestDTO searchRequestDTO) {
        SearchResponseDTO searchResponse = elasticsearchService.searchSources(searchRequestDTO);
        return ResponseEntity.ok(searchResponse);
    }

    @GetMapping("/sources/{id}")
    public ResponseEntity<SourceResponseDTO> getSource(@PathVariable String id) {
        SourceResponseDTO sourceResponse = elasticsearchService.getSourceById(id);
        return ResponseEntity.ok(sourceResponse);
    }
}
