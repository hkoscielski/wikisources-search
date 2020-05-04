package pl.edu.pwr.swi.wikisourcessearchwebservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.edu.pwr.swi.wikisourcessearchwebservice.service.VerificationService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class VerificationController {

    @Autowired
    private VerificationService verificationService;

    @GetMapping("verify-backend")
    public ResponseEntity<String> getBackendVerificationStatus() {
        return ResponseEntity.ok("OK");
    }

    @GetMapping("verify-es")
    public ResponseEntity<Boolean> getEsVerificationStatus() {
        return ResponseEntity.ok(verificationService.verifyElasticsearch());
    }
}
