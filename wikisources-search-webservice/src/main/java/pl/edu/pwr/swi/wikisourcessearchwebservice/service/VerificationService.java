package pl.edu.pwr.swi.wikisourcessearchwebservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VerificationService {

    @Autowired
    private ElasticsearchService elasticsearchService;

    public boolean verifyElasticsearch() {
        return elasticsearchService.ping();
    }
}
