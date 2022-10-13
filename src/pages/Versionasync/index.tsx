import {useEffect, useState} from 'react';
import * as C from './styled';
import {Movie} from '../../types/Movie';



export const Versionasync = () =>{
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    link();
   }, []);
   

    const link = async () =>{
      try{
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setLoading(false);
      setMovies(json);
      } catch(err){
        setLoading(false); 
       setMovies([]);
      }
    }
    
     
      
  
  
    return(
        <div>
        
      <C.Container min>
         { movies.length > 0 &&
         <div>
         <h2>Total de Filmes em cartaz: {movies.length}</h2>
         <p>Versão async</p>
         </div>
         }
         
        
         {loading && 
           <C.Container min>
             <h1>Carregando....</h1>
           </C.Container>
         }
         <div className="moviesBox">
           {movies.map((item, index) =>(
             <div key={index} className="movieGrid">
              <img src={item.avatar} alt="/" />
              <h3>{item.titulo}</h3>

             </div>
           ))}
         </div>
         
           {!loading && movies.length=== 0 &&
             <h2>Tente novamente mais tarde.</h2>
           }
      </C.Container>
      </div>
    );
             
           }