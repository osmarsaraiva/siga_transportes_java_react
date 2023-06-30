package br.com.sigatransportes.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

@Entity
@Table(name= "cidade")
public class Cidade {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome", length = 100)
	private String nome;
	
	@Column(name = "estado", length = 100)
	private String estado;
	
	@Column(name = "outro", length = 100)
	private String outro;
	
	@Column(name = "data_cadastro")
	private LocalDate dataCadastro;


	public Cidade() {
		super();
		
	}
	

	public Cidade(String nome, String estado, String outro) {
		super();
		this.nome = nome;
		this.estado = estado;
		this.outro = outro;
	}
	
	
	public Cidade(Long id, String nome, String estado, String outro) {
		super();
		this.id = id;
		this.nome = nome;
		this.estado = estado;
		this.outro = outro;
	}


	
	@PrePersist
	public void prePersist() {
		setDataCadastro(LocalDate.now());
		
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNome() {
		return nome;
	}


	public void setNome(String nome) {
		this.nome = nome;
	}


	public String getEstado() {
		return estado;
	}


	public void setEstado(String estado) {
		this.estado = estado;
	}


	public String getOutro() {
		return outro;
	}


	public void setOutro(String outro) {
		this.outro = outro;
	}

	
	

	public LocalDate getDataCadastro() {
		return dataCadastro;
	}



	public void setDataCadastro(LocalDate dataCadastro) {
		this.dataCadastro = dataCadastro;
	}



	@Override
	public String toString() {
		return "Cidade [id=" + id + ", cidade=" + nome + ", estado=" + estado + ", outro=" + outro + "]";
	}
	
	
	
	
	

	

}
