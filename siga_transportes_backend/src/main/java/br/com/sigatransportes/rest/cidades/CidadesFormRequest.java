package br.com.sigatransportes.rest.cidades;


public class CidadesFormRequest {
	
	private String nome;
	private String estado;
	private String outro;
	
	
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
	@Override
	public String toString() {
		return "CidadesFormRequest [cidade=" + nome + ", estado=" + estado + ", outro=" + outro + "]";
	}
	
	
	

}
