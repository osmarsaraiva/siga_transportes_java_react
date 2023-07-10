import { Cidade } from 'app/models/cidades'


interface TabelaCidadesProps {
    cidades: Array<Cidade>;
}

export const TabelaCidades: React.FC<TabelaCidadesProps> = ({
    cidades
})  => {
    return (    
        <table className="table is-striped is-hoverable">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Pais</th>
                    <th></th>
                </tr> 
            </thead>
            <tbody>
                {
                  cidades.map( cidade => <CidadeRow key={cidade.id} cidade={cidade} />)
                }      
            </tbody>
        </table>
    )
}

interface CidadeRowProps {
    cidade: Cidade;
}

const CidadeRow: React.FC<CidadeRowProps> = ({ 
    cidade 
}) => {
    return(
        <tr>
            <td>{ cidade.id }</td>
            <td>{ cidade.nome }</td>
            <td>{ cidade.estado }</td>
            <td>{ cidade.pais}</td>
            <td>
                <button className="button is-success is-rounded is-small">Editar</button>
                <button className="button is-danger is-rounded is-small">Deletar</button>
            </td>
        </tr>

    )

}