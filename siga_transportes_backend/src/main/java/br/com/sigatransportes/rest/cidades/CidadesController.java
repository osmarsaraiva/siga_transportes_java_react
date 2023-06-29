package br.com.sigatransportes.rest.cidades;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.sigatransportes.model.Cidade;
import br.com.sigatransportes.model.repository.CidadeRepository;

@RestController //ligar api
@RequestMapping("/api/cidades") //plural - mapeamento
@CrossOrigin("*")
public class CidadesController {
	
	
	@Autowired
	private CidadeRepository repository;
	
	@PostMapping
	public CidadesFormRequest salvar( @RequestBody CidadesFormRequest cidade ) {
		
		Cidade entidadeCidade = new Cidade(
				cidade.getNome(),
				cidade.getEstado(),
				cidade.getOutro()
			);
		
	repository.save(entidadeCidade);
	
	System.out.println(entidadeCidade);
	
		return cidade;
		
	}

}
