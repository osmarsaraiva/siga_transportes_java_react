import { useState } from 'react' //rock
import { Layout, Input, Message } from 'components'
import { useCidadeService } from 'app/services'
import { Cidade } from '/app/models/cidades'
import { Alert } from '@/components/common/message'
import * as yup from 'yup'
import Link from 'next/link'


const msgCampoObrigatorio = "Campo Obrigatório";

const validationSchema = yup.object().shape({
    nome: yup.string().trim().required(msgCampoObrigatorio),
    estado: yup.string().trim().required(msgCampoObrigatorio),
    pais: yup.string().trim().required(msgCampoObrigatorio), 
})

interface FormErros {
  nome?: string;
  estado?: string;
  pais?: string;
}


export const CadastroCidades: React.FC = () => {
    
    const service = useCidadeService()
    const [ nome, setNome ] = useState<string>('')
    const [ estado, setEstado ] = useState<string>('')
    const [ pais, setPais ] = useState<string>('')
    const [ id, setId] = useState<string>('')
    const [ cadastro, setCadastro ] = useState<string>('')
    const [ messages, setMessages ] = useState<Array<Alert>>([])
    const [ errors, setErrors ] = useState<FormErros>({})


    const submit = () => {
      const cidade: Cidade = { 
        id,
        nome,
        estado,
        pais,
      }

      validationSchema.validate(cidade).then(obj => {
        setErrors({})

        if(id){
  
        service
          .atualizar(cidade)
          .then(response => {
              setMessages([{
                tipo: "success", texto: "Localidade atualizada com sucesso!"
              }])
          })
  
        }else{
          
  
        service
  
          .salvar(cidade)
          .then(cidadeResposta => {
              setId(cidadeResposta.id)
              setCadastro(cidadeResposta.cadastro)
              setMessages([{
                tipo: "success", texto: "Localidade Salva com sucesso!"
              }])
          })
      
      }
      }).catch(err => {
        const field = err.path;
        const message = err.message;

        setErrors({
          [field]: message
        })

        //setMessages([
         // { tipo: "danger", field, texto: message }
        //])
        
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
        maxLength={40}
        placeholder="Digite o nome da cidade"
        error={errors.nome}  
        />
        
        <Input label = "Estado: " 
        columnClasses="is-one-quarter"
        onChange={setEstado}
        value={estado}
        id="inputEstado" 
        placeholder="Digite o nome do Estado em SIGLAS"  
        error={errors.estado}     
        />

      </div>

      <div className="columns">
      <Input label = "País: " 
        columnClasses="field column is-full"
        onChange={setPais}
        value={pais}
        id="inputPais" 
        placeholder="Digite o nome do país" 
        error={errors.pais}   
      
        />

    

    </div>


      <div className="field is-grouped">
        <div className="control is-link">
          <button onClick={submit} className="button">
              { id? "Atualizar" : "Salvar"}
          </button>
        </div>

        <div className="control">
            <Link href="/consultas/cidades">
              <button className="button">Voltar</button>
            </Link>
        </div>
      </div>
    </Layout>
  )
}


