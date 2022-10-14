import { useState, ChangeEvent } from 'react';
import * as P from './styled';


export const PostForm = () =>{
    const [addTitle, setAddTitle] = useState('');
    const [addPost, setAddPost] = useState('');
    const handleAddTitle = (event: ChangeEvent<HTMLInputElement>)=>{
        setAddTitle(event.target.value);
   }
   const handleAddPost = (event: ChangeEvent<HTMLTextAreaElement>)=>{
        setAddPost(event.target.value);
   }
   const handleAdd = async ()=>{
      if(addTitle && addPost){
         
        let response = await fetch('https://jsonplaceholder.typicode.com/posts',{
           method: 'Post',
           body: JSON.stringify({
              title: addTitle,
              body:addPost,
              userId: 1,
           }),
           headers:{
              'Content-Type': 'application/json'
           }
        });
        let json = await response.json();

        if(json.id){
           alert('Post adicionado com sucesso!');
           setAddTitle('');
           setAddPost('');
        }else{
            alert('Ocorreu algum erro!');
        }
      }else{
         alert('Preencha os dados!');
      }
   }
    return(
          
        
        <P.Fieldset>
         <legend>Adicionar Novo Post</legend>
                <input 
                type="text" 
                placeholder="Digite um título" 
                name="titulo" 
                value={addTitle} 
                onChange={handleAddTitle}
                 />
                
                <textarea 
                placeholder="Escreva aqui seu post" 
                value={addPost} 
                onChange={handleAddPost}
                 />

                <button onClick={handleAdd}>Adicionar post</button>
        </P.Fieldset>

    );
}
