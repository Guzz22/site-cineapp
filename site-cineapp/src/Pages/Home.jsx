import data from '../../artigos.json'

function Home() {
    return ( 
       
        <>

        <div className='grid grid-cols-3 gap-3'>
        {data.map(
            (filme, index) => (
                <div className='card' key={index}>
                    <h1>{filme.title}</h1>
                    <img className="mb-2" src={filme.image} alt={filme.title}/>
                    <div className="tags">
                        
                        {filme.tags.map(tag => (
                            <span className="bg-green-800  text-black p-1 m-1" key={tag}>{tag}</span>
                        ))}
                        
                    </div>
    <div className="texto">
        {filme.text.map((texto, tag)=>(
            <p key={tag}>{texto}</p>
        ))}


    </div>
                </div>
            )

        )}
        </div>
       

        </>
      
    );
}

export default Home;