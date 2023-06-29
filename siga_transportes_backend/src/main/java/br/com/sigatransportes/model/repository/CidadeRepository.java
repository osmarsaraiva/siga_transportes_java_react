package br.com.sigatransportes.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.sigatransportes.model.Cidade;

public interface CidadeRepository extends JpaRepository<Cidade, Long> {

}
