package com.carlosribeiro.sb01.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Carrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "carrinho", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ItemDeCarrinho> itens = new ArrayList<>();

    public void adicionarItem(Produto produto, int quantidade) {
        ItemDeCarrinho item = new ItemDeCarrinho(produto, quantidade, this);
        itens.add(item);
    }

    public void removerItem(ItemDeCarrinho item) {
        itens.remove(item);
        item.setCarrinho(null);
    }
}
