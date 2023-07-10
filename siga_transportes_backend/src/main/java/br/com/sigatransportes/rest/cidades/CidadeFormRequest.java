package br.com.sigatransportes.rest.cidades;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import br.com.sigatransportes.model.Cidade;

public class CidadeFormRequest {
	
	private Long id;
	private String nome;
	private String estado;
	private String pais;
	
	@JsonFormat(pattern = "dd/MM/yyyy")
	private LocalDate cadastro;
	
	
	public CidadeFormRequest() {
		super();
		
	}
	
	
	public CidadeFormRequest(Long id, String nome, String estado, String pais, LocalDate cadastro) {
		super();
		this.id = id;
		this.nome = nome;
		this.estado = estado;
		this.pais = pais;
		this.cadastro = cadastro;
	}



	public Cidade toModel() {
		return new Cidade(id, nome, estado, pais);
		
	}	
	
	
	public static CidadeFormRequest fromModel(Cidade cidade) {	
		return new CidadeFormRequest(
				cidade.getId(), 
				cidade.getNome(), 
				cidade.getEstado(), 
				cidade.getPais(),
				cidade.getDataCadastro()
		);
		
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
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	
	public LocalDate getCadastro() {
		return cadastro;
	}


	public void setCadastro(LocalDate cadastro) {
		this.cadastro = cadastro;
	}


	@Override
	public String toString() {
		return "CidadesFormRequest [id=" + id + ", nome=" + nome + ", estado=" + estado + ", pais=" + pais + "]";
	}
	
	

}
