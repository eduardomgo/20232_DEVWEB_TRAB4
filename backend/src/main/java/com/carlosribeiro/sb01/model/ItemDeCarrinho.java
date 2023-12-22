package com.carlosribeiro.sb01.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ItemDeCarrinho {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "PRODUTO_ID", foreignKey = @ForeignKey(name="ITEM_CARRINHO_PRODUTO_ID_FK"))
    private Produto produto;

    @Min(value=1, message = "A 'Quantidade' deve ser maior ou igual a 1.")
    private int quantidade;

    @NotNull(message = "O 'Carrinho' deve ser informado.")
    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "CARRINHO_ID", foreignKey = @ForeignKey(name="ITEM_CARRINHO_CARRINHO_ID_FK"))
    private Carrinho carrinho;

    @Transient
    private Long carrinhoId;

    @JsonProperty("carrinhoId")
    public Long getCarrinhoId() {
        return carrinho != null ? carrinho.getId() : null;
    }

    public ItemDeCarrinho(Produto produto, int quantidade, Carrinho carrinho) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.carrinho = carrinho;
    }
}
