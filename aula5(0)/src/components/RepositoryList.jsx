import { Counter } from "./Counter"
import { RepositoryItem } from "./RepositoryItem"

const repository = {
    name: 'Atividade',
    description: "Descrição",
    link: 'https://github.com/jvanderlei'
} 

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de Repositorios </h1>
            <ul>
            <RepositoryItem repository={repository} />
            <Counter />
                
            </ul>
        </section>
    )
}