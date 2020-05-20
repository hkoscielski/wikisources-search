package pl.edu.pwr.swi.wikisourcessearchwebservice.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.request.SearchRequestDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.payload.response.SearchResponseDTO;
import pl.edu.pwr.swi.wikisourcessearchwebservice.service.ElasticsearchService;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
@Slf4j
public class SearchController {

    @Autowired
    private ElasticsearchService elasticsearchService;

    @GetMapping("/sources")
    public ResponseEntity<SearchResponseDTO> searchSources(@Valid SearchRequestDTO searchRequestDTO) {
        log.info(searchRequestDTO.toString());
        SearchResponseDTO searchResponse = elasticsearchService.searchSources(searchRequestDTO);
        return ResponseEntity.ok(searchResponse);
    }
}
