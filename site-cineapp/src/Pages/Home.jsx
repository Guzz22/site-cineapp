import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function Home() {
    const [filmes, setFilmes] = useState([])

    const settings = {
        Infinite:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3    
    };
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e')
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch(error => console.log(error))
    },[])
    
    return (
        <>
        <h1 className="flex justify-center text-3xl text-white font-Inter mt-10 mb-10">Filmes</h1>
        <div className="flex justify-center">
        <div className="flex flex-col w-[1750px] m-8 ">
            <Slider {...settings}>
                {filmes.map(filme => (
                    <div className="ml-[145px]"   key={filme.id}>
                        <img className= "rounded-lg border" src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} alt={filme.title} />
                        <h1 className="text-white flex justify-start mt-1 mb-2">{filme.title}</h1>
                        <Link to={`/${filme.id}`} className="bg-white text-black rounded-lg flex items-center mr-[284px] justify-center font-bold p-1">
                        Detalhes do Filme
                        </Link>
                        </div>
                    ))}
            </Slider>
        </div>
        </div>
        </>
    )
}
 
export default Home;