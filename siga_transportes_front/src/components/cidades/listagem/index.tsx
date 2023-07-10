import { Layout, Loader } from 'components'
import Link from 'next/link'
import { TabelaCidades } from './tabela'
import { Cidade } from 'app/models/cidades'
import useSWR from 'swr'
import { httpClient } from 'app/http'
import { AxiosResponse } from 'axios'


export const ListagemCidades: React.FC = () => {

    
    const { data: result, error } = useSWR<AxiosResponse<Cidade[]>>
                ('/api/cidades', url => httpClient.get(url))

    if(!result){
        return(
            <Loader show={true} />
        )
    }

    return (
        <Layout titulo="Cidades">
            
            <Link href="/cadastros/cidades">
                <button className="button is-warning">Novo</button>
            
            </Link>
            <br /><br />
            <TabelaCidades cidades={result?.data || []} />
            /aqui carrega a tabela


        </Layout>

    )
}