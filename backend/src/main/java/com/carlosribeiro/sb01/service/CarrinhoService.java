package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import com.carlosribeiro.sb01.repository.ItemDeCarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarrinhoService {

    @Autowired
    private CarrinhoRepository carrinhoRepository;

    @Autowired
    private ItemDeCarrinhoRepository itemDeCarrinhoRepository;

    public Carrinho recuperarCarrinho(Long id) {
        return carrinhoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Carrinho número " + id + " não encontrado."));
    }

    public void atualizarQuantidadeProduto(Long carrinhoId, Long itemDeCarrinhoId, int quantidade) {
        Carrinho carrinho = recuperarCarrinho(carrinhoId);

        ItemDeCarrinho itemDeCarrinho = itemDeCarrinhoRepository.findById(itemDeCarrinhoId)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Item de Carrinho número " + itemDeCarrinhoId + " não encontrado."));

        if (quantidade == 0) {
            // Se a quantidade for 0, remover o item do carrinho
            carrinho.removerItem(itemDeCarrinho);
        } else {
            // Atualizar a quantidade do produto no item de carrinho
            itemDeCarrinho.setQuantidade(quantidade);
        }

        carrinhoRepository.save(carrinho);
    }
}