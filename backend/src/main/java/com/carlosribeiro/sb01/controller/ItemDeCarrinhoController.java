package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.service.ItemDeCarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("/item-de-carrinho")
public class ItemDeCarrinhoController {

    @Autowired
    private ItemDeCarrinhoService itemDeCarrinhoService;

    @GetMapping("/{id}")
    public ResponseEntity<ItemDeCarrinho> getItemDeCarrinhoById(@PathVariable Long id) {
        ItemDeCarrinho itemDeCarrinho = itemDeCarrinhoService.getItemDeCarrinhoById(id);
        return ResponseEntity.ok(itemDeCarrinho);
    }

    @GetMapping("/carrinho/{carrinhoId}")
    public ResponseEntity<List<ItemDeCarrinho>> getItemDeCarrinhoByCarrinhoId(@PathVariable Long carrinhoId) {
        List<ItemDeCarrinho> itensDeCarrinho = itemDeCarrinhoService.getItemDeCarrinhoByCarrinhoId(carrinhoId);
        return ResponseEntity.ok(itensDeCarrinho);
    }

    @PostMapping
    public ResponseEntity<ItemDeCarrinho> createItemDeCarrinho(@RequestBody ItemDeCarrinho itemDeCarrinho) {
        ItemDeCarrinho newItemDeCarrinho = itemDeCarrinhoService.createItemDeCarrinho(itemDeCarrinho);
        URI location = URI.create("/item-de-carrinho/" + newItemDeCarrinho.getId());
        return ResponseEntity.created(location).body(newItemDeCarrinho);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ItemDeCarrinho> updateItemDeCarrinho(@PathVariable Long id, @RequestBody ItemDeCarrinho itemDeCarrinho) {
        ItemDeCarrinho updatedItemDeCarrinho = itemDeCarrinhoService.updateItemDeCarrinho(id, itemDeCarrinho);
        return ResponseEntity.ok(updatedItemDeCarrinho);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItemDeCarrinho(@PathVariable Long id) {
        itemDeCarrinhoService.deleteItemDeCarrinho(id);
        return ResponseEntity.noContent().build();
    }
}
