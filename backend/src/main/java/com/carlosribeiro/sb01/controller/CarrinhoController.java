package com.carlosribeiro.sb01.controller;

import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.service.CarrinhoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("http://localhost:5173")
@RestController
@RequestMapping("carrinhos")   // http://localhost:8080/carrinhos
public class CarrinhoController {

    @Autowired
    private CarrinhoService carrinhoService;

    @GetMapping("/{id}")
    public Carrinho recuperarCarrinho(@PathVariable Long id) {
        return carrinhoService.recuperarCarrinho(id);
    }
    
    @PutMapping("/atualizar-quantidade")
    public void atualizarQuantidadeProdutoS(@RequestBody AtualizacaoQuantidadeRequest request) {
        carrinhoService.atualizarQuantidadeProduto(request.getCarrinhoId(), request.getItemDeCarrinhoId(), request.getQuantidade());
    }

    public static class AtualizacaoQuantidadeRequest {
        private Long carrinhoId;
        private Long itemDeCarrinhoId;
        private int quantidade;

        public Long getCarrinhoId() {
            return carrinhoId;
        }

        public void setCarrinhoId(Long carrinhoId) {
            this.carrinhoId = carrinhoId;
        }

        public Long getItemDeCarrinhoId() {
            return itemDeCarrinhoId;
        }

        public void setItemDeCarrinhoId(Long itemDeCarrinhoId) {
            this.itemDeCarrinhoId = itemDeCarrinhoId;
        }

        public int getQuantidade() {
            return quantidade;
        }

        public void setQuantidade(int quantidade) {
            this.quantidade = quantidade;
        }
    }
}