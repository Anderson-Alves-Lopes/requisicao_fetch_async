import {useState, useEffect } from 'react';


import { PostForm } from '../../components/PostForm';
import { api } from '../../types/api';
import {Post} from '../../types/Post';
import * as P from './styled';


export const Postreq = () =>{
    const [post, setPost] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
   
    useEffect(() =>{
        loadingPosts();
    },[]);

    const loadingPosts = async ()=>{
        
        setLoading(true);
       let json = await api.getAllPosts(); 
       setLoading(false);
       setPost(json);
       
    }
    
    return (

        <P.Container>
           {loading &&
            <h1>Carregando...</h1>
           }
           {!loading && post.length > 0  &&
           <>
             <div className="text">
             <h2>Total de Post: {post.length}</h2>
             <p>Requisição post</p>
             </div>
             <PostForm />
           
             <div className="postBox">
                {post.map((item, index)=>(
                  <div key={index} className="posts">  
                  <h3>{item.title}</h3>
                  <small>#{item.id} / Usuário: {item.useId}</small>
                  <p>{item.body}</p>
                  </div>
                ))}
             </div>
           
             </>
           }
              
           {!loading && post.length === 0  &&
              <h1>Tente novamente mais tarde.</h1>
           }
        </P.Container>
    );
}