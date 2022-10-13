import {useEffect, useState} from 'react';
import * as C from './styled';
import {Movie} from '../../types/Movie';



export const Versionfetch = () =>{
   const [movies, setMovies] = useState<Movie[]>([]);
   const [loading, setLoading] = useState(false);
   useEffect(()=>{
    link();
   }, []);
   
    const link = () =>{
       setLoading(true); 
       fetch('https://api.b7web.com.br/cinema/')
      .then((response)=>{
        return response.json();
      })
      .then((json)=>{
        setLoading(false);
        setMovies(json);
      })
      .catch((err)=>{
        setLoading(false);
        
      });
    }
    
      
  
  
    return(
        <div>
      
      <C.Container min>
        {movies.length > 0 &&
         <div>
         <h2>Total de Filmes em cartaz : {movies.length}</h2>
         <p>Versão fetch</p>
         </div>
        }
          {loading &&
           <C.Container min>
            <h1>Carregando...</h1>
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
         
         {!loading && movies.length === 0 &&
             <h2>Tente novamente mais tarde.</h2>
         }  
      </C.Container>
      
      </div>
    );
             
           }