package br.com.sigatransportes.rest.cidades;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sigatransportes.model.Cidade;
import br.com.sigatransportes.model.repository.CidadeRepository;

@RestController //ligar api
@RequestMapping("/api/cidades") //plural - mapeamento
@CrossOrigin("*")
public class CidadeController {
	
	
	@Autowired
	private CidadeRepository repository;
	
	@PostMapping
	public CidadeFormRequest salvar( @RequestBody CidadeFormRequest cidade ) {
		Cidade entidadeCidade = cidade.toModel();
		repository.save(entidadeCidade);
		return CidadeFormRequest.fromModel(entidadeCidade);
		
		
	}
	
	//api/cidades/1
	@PutMapping("{id}")
	public ResponseEntity<Void> atualizar(@PathVariable Long id, @RequestBody CidadeFormRequest cidade ) {
		Optional<Cidade> cidadeExistente = repository.findById(id);
		
		if(cidadeExistente.isEmpty()) {
			return ResponseEntity.notFound().build();
			
		}
		
		Cidade entidade = cidade.toModel();
		entidade.setId(id);
		repository.save(entidade);
		
		return ResponseEntity.ok().build();
	}

}
