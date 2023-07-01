import { useState } from 'react' //rock
import { Layout, Input, Message } from 'components'
import { useCidadeService } from 'app/services'
import { Cidade } from '/app/models/cidades'
import { Alert } from '@/components/common/message'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
    nome: yup.string().required(),
    estado: yup.string().required(),
    outro: yup.string().required(),
})


export const CadastroCidades: React.FC = () => {
    
    const service = useCidadeService()
    const [ nome, setNome ] = useState<string>('')
    const [ estado, setEstado ] = useState<string>('')
    const [ outro, setOutro ] = useState<string>('')
    const [ id, setId] = useState<string>('')
    const [ cadastro, setCadastro ] = useState<string>('')
    const [ messages, setMessages ] = useState<Array<Alert>>([])


    const submit = () => {
      const cidade: Cidade = { 
        id,
        nome,
        estado,
        outro,
      }

      validationSchema.validate(cidade).then(obj => {
 
        if(id){
  
        service
          .atualizar(cidade)
          .then(response => {
              setMessages([{
                tipo: "success", texto: "Local/Origem/Destino atualizado com sucesso!"
              }])
          })
  
        }else{
          
  
        service
  
          .salvar(cidade)
          .then(cidadeResposta => {
              setId(cidadeResposta.id)
              setCadastro(cidadeResposta.cadastro)
              setMessages([{
                tipo: "success", texto: "Local/Origem/Destino Salvo com sucesso!"
              }])
          })
      
      }
      }).catch(err => {
        const field = err.path;
        const message = err.message;

        setMessages([
          { tipo: "danger", field, texto: message }
        ])
        
      })

  }
    

  return (
    <Layout titulo="Cadastros de Cidades" mensagens={messages}>
     
      {id &&
          <div className="columns">
              <Input label = "Código: " 
              columnClasses="is-half"
              value={id}
              id="inputId"  
              disabled={true}  
              />

              <Input label = "Data Cadastro: " 
              columnClasses="is-half"
              value={cadastro}
              id="inputCadastro"    
              disabled  
              />
        </div>
    }

      <div className="columns">

        <Input label = "Cidade: " 
        columnClasses="is-four-thirds"
        onChange={setNome}
        value={nome}
        id="inputNome" 
        placeholder="Digite o nome da cidade"      
        />
        
        <Input label = "Estado: " 
        columnClasses="is-one-quarter"
        onChange={setEstado}
        value={estado}
        id="inputEstado" 
        placeholder="Digite o nome do Estado em SIGLAS"     
        />

      </div>

      <div className="columns">
      <Input label = "Outro: " 
        columnClasses="field column is-full"
        onChange={setOutro}
        value={outro}
        id="inputOutro" 
        placeholder="Digite o nome de outro Estado/Referência"  
      
        />

    

    </div>


      <div className="field is-grouped">
        <div className="control is-link">
          <button onClick={submit} className="button">
              { id? "Atualizar" : "Salvar"}
          </button>
        </div>

        <div className="control">
          <button className="button">Voltar</button>
        </div>
      </div>
    </Layout>
  )
}


