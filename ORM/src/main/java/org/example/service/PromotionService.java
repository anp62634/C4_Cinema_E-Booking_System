package org.example.service;

import org.example.model.Promotion;

import java.util.List;

public interface PromotionService {
    public Promotion savePromotion(Promotion promotion);
    public List<Promotion> getAllPromotions();
}
