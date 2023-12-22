package com.carlosribeiro.sb01;

import com.carlosribeiro.sb01.model.Categoria;
import com.carlosribeiro.sb01.model.Carrinho;
import com.carlosribeiro.sb01.model.Produto;
import com.carlosribeiro.sb01.repository.CategoriaRepository;
import com.carlosribeiro.sb01.repository.ProdutoRepository;
import com.carlosribeiro.sb01.repository.CarrinhoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.math.BigDecimal;
import java.time.LocalDate;

@SpringBootApplication
public class Sb01Application implements CommandLineRunner {

	@Autowired
	private ProdutoRepository produtoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private CarrinhoRepository carrinhoRepository;

	public static void main(String[] args) {
		SpringApplication.run(Sb01Application.class, args);
	}
	@Override
	public void run(String... args) throws Exception {
		Categoria hardware = new Categoria("Hardware", "hardware");
		categoriaRepository.save(hardware);
		Categoria cadeiras = new Categoria("Cadeiras", "cadeiras");
		categoriaRepository.save(cadeiras);
		Categoria tablets = new Categoria("Tablets", "tablets");
		categoriaRepository.save(tablets);

		Carrinho carrinho_unico = new Carrinho();
		carrinhoRepository.save(carrinho_unico);

		Produto produto = new Produto(
				"placamae.png",
				hardware,
				"Abacate",
				"1 unidade aprox. 750g",
				true,
				LocalDate.of(2023, 4, 26),
				100,
				BigDecimal.valueOf(2.45));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Abóbora",
				"1 unidade aprox. 1,9kg",
				true,
				LocalDate.of(2023, 3, 24),
				400,
				BigDecimal.valueOf(4.7));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Acelga",
				"1 maço de aprox. 400g",
				true,
				LocalDate.of(2023, 3, 12),
				120,
				BigDecimal.valueOf(4.99));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Agrião",
				"1 maço de aprox. 200g",
				true,
				LocalDate.of(2023, 5, 17),
				340,
				BigDecimal.valueOf(2.5));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Alface",
				"1 maço de aprox. 200g",
				true,
				LocalDate.of(2023, 5, 14),
				220,
				BigDecimal.valueOf(4.99));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Banana",
				"1 unidade aprox. 165g",
				true,
				LocalDate.of(2023, 2, 22),
				350,
				BigDecimal.valueOf(1.05));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Beringela",
				"1 unidade aprox. 370g",
				true,
				LocalDate.of(2023, 2, 23),
				720,
				BigDecimal.valueOf(1.85));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Brócolis",
				"1 unidade aprox. 300g",
				true,
				LocalDate.of(2023, 3, 28),
				600,
				BigDecimal.valueOf(5.39));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Cebola",
				"1 unidade aprox. 200g",
				true,
				LocalDate.of(2023, 4, 30),
				95,
				BigDecimal.valueOf(0.56));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Cenoura",
				"1 unidade aprox. 180g",
				true,
				LocalDate.of(2023, 5, 29),
				350,
				BigDecimal.valueOf(1.01));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Cereja",
				"1 unidade aprox. 250g",
				true,
				LocalDate.of(2023, 5, 11),
				240,
				BigDecimal.valueOf(11.23));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Chuchu",
				"1 unidade aprox. 300g",
				true,
				LocalDate.of(2023, 5, 11),
				120,
				BigDecimal.valueOf(0.48));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Couve",
				"1 unidade aprox. 350g",
				true,
				LocalDate.of(2023, 5, 13),
				380,
				BigDecimal.valueOf(6.69));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Espinafre",
				"1 maço de aprox. 200g",
				true,
				LocalDate.of(2023, 5, 11),
				76,
				BigDecimal.valueOf(2.49));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Jiló",
				"1 unidade aprox. 100g",
				true,
				LocalDate.of(2023, 5, 11),
				380,
				BigDecimal.valueOf(0.66));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Kiwi",
				"1 caixa de aprox. 250g",
				true,
				LocalDate.of(2023, 5, 11),
				280,
				BigDecimal.valueOf(1.68));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Laranja",
				"1 unidade aprox. 220g",
				true,
				LocalDate.of(2023, 5, 11),
				300,
				BigDecimal.valueOf(1.01));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Lichia",
				"1 caixa de aprox. 400g",
				true,
				LocalDate.of(2023, 5, 11),
				320,
				BigDecimal.valueOf(16.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Limão",
				"1 unidade aprox. 110g",
				true,
				LocalDate.of(2023, 5, 11),
				80,
				BigDecimal.valueOf(0.29));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Mamão",
				"1 unidade aprox. 530g",
				true,
				LocalDate.of(2023, 5, 11),
				70,
				BigDecimal.valueOf(1.80));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Maracujá",
				"1 unidade aprox. 130g",
				true,
				LocalDate.of(2023, 5, 11),
				60,
				BigDecimal.valueOf(1.50));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Melancia",
				"1 fatia de aprox. 3,25kg",
				true,
				LocalDate.of(2023, 5, 11),
				12,
				BigDecimal.valueOf(8.09));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Nabo",
				"1 unidade aprox. 600g",
				true,
				LocalDate.of(2023, 5, 11),
				35,
				BigDecimal.valueOf(3.59));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Pessego",
				"1 unidade aprox. 140g",
				true,
				LocalDate.of(2023, 5, 11),
				89,
				BigDecimal.valueOf(1.68));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Pimentão",
				"1 unidade aprox. 110g",
				true,
				LocalDate.of(2023, 5, 11),
				59,
				BigDecimal.valueOf(3.25));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Quiabo",
				"1 unidade aprox. 250g",
				true,
				LocalDate.of(2023, 5, 11),
				300,
				BigDecimal.valueOf(3.00));
		produtoRepository.save(produto);

		produto = new Produto(
				"tablet.png",
				tablets,
				"Rúcula",
				"1 caixa de aprox. 250g",
				true,
				LocalDate.of(2023, 5, 11),
				90,
				BigDecimal.valueOf(8.48));
		produtoRepository.save(produto);

		produto = new Produto(
				"cadeira.png",
				cadeiras,
				"Tomate",
				"1 unidade aprox. 120g",
				true,
				LocalDate.of(2023, 5, 11),
				450,
				BigDecimal.valueOf(1.20));
		produtoRepository.save(produto);

		produto = new Produto(
				"placamae.png",
				hardware,
				"Uva",
				"1 caixa de 600g",
				true,
				LocalDate.of(2023, 5, 11),
				60,
				BigDecimal.valueOf(9.59));
		produtoRepository.save(produto);
		
	}
}
