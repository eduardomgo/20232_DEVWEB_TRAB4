package com.carlosribeiro.sb01.repository;

import com.carlosribeiro.sb01.model.ItemDeCarrinho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ItemDeCarrinhoRepository extends JpaRepository<ItemDeCarrinho, Long> {
    @Query("SELECT i FROM ItemDeCarrinho i WHERE i.carrinho.id = :carrinhoId")
    List<ItemDeCarrinho> findByCarrinhoId(Long carrinhoId);
}