package org.example.controller;

import org.example.model.Promotion;
import org.example.service.PromotionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/promotion")
@CrossOrigin
public class PromotionController {
    @Autowired
    private PromotionService promotionService;

    @PostMapping("/add")
    public String add(@RequestBody Promotion promotion){
        promotionService.savePromotion(promotion);
        return "New promotion is added";
    }

    @GetMapping("/getAll")
    public List<Promotion> getAllPromotions() {
        return promotionService.getAllPromotions();
    }

}
