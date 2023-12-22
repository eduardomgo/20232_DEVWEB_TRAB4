package com.carlosribeiro.sb01.service;

import com.carlosribeiro.sb01.exception.EntidadeNaoEncontradaException;
import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.ItemDeCarrinhoRepository;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemDeCarrinhoService {

    @Autowired
    private ItemDeCarrinhoRepository itemDeCarrinhoRepository;

    @Autowired
    private ProdutoRepository produtoRepository;

    public ItemDeCarrinho getItemDeCarrinhoById(Long id) {
        return itemDeCarrinhoRepository.findById(id)
                .orElseThrow(() -> new EntidadeNaoEncontradaException(
                        "Item de Carrinho número " + id + " não encontrado."));
    }

    public List<ItemDeCarrinho> getItemDeCarrinhoByCarrinhoId(Long carrinhoId) {
        return itemDeCarrinhoRepository.findByCarrinhoId(carrinhoId);
    }

    public ItemDeCarrinho createItemDeCarrinho(ItemDeCarrinho itemDeCarrinho) {
        return itemDeCarrinhoRepository.save(itemDeCarrinho);
    }

    public ItemDeCarrinho updateItemDeCarrinho(Long id, ItemDeCarrinho itemDeCarrinho) {
        getItemDeCarrinhoById(id); // Lança exceção se não existir

        itemDeCarrinho.setId(id);
        return itemDeCarrinhoRepository.save(itemDeCarrinho);
    }

    public void deleteItemDeCarrinho(Long id) {
        ItemDeCarrinho itemDeCarrinho = getItemDeCarrinhoById(id);
        itemDeCarrinhoRepository.delete(itemDeCarrinho);
    }

    // Adicione outros métodos conforme necessário

}
