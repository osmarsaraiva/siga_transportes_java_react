import { httpClient } from 'app/http'
import { Cidade } from '../models/cidades'
import { AxiosResponse } from 'axios'

const resourceURL: string = "/api/cidades"

export const useCidadeService = () => {

    const salvar = async (cidade: Cidade) : Promise<Cidade> => {
        const response: AxiosResponse<Cidade> = await httpClient.post<Cidade>(resourceURL, cidade )
        return response.data;
    }

    const atualizar = async(cidade: Cidade) : Promise<void> => {
        const url: string = `${resourceURL}/${cidade.id}`
        await httpClient.put<Cidade>(url, cidade)
    }

    return {
        salvar,
        atualizar
    }
}