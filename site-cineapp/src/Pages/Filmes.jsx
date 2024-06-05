import {useState} from "react";

function Filmes() {

    const [filmes, setFilme] = useState([])

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
    .then(response => response.json())
    .then(response => setFilme(response.results))
    .catch(error => console.log(error))
    
    return (
        <> 
        <h1> Filmes </h1>
        <div className="listaFilmes"></div>
        {
            filmes.map(
                filme => (
                    <div className="card-filme" key={filme.id}>
                    <h1>{filme.title}</h1>
                    
                    <p>{filme.overview}</p>

                    </div>
                )
            )
        }
       </>
    )
}

export default Filmes;