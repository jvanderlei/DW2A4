import { RepositoryItem } from "./RepositoryItem"
import '../styles/repository.scss'
import { useState, useEffect } from "react"
import React from "react"

interface Repository{
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
      fetch("https://api.github.com/users/jvanderlei/repos")
      .then(response => response.json())
      .then(data => {setRepositories(data); console.log(data)})
    }, [])
    

    return(
        <section className="repository-list">
            <h1>Lista de Repositorios </h1>
            <ul>
                {repositories.map( repository => {
                    return <RepositoryItem repository={repository} key={repository.id}/>
                })}
                
            </ul>
        </section>
    )
}