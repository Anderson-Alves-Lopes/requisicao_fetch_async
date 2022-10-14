 import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com';
const REQ  = 'https://api.b7web.com.br/cinema/';
export const api = {
    getReq: async () =>{
        let response = await fetch(`${REQ}`);
        let json = await response.json();
        return json;
    },
    getAllPosts: async () =>{
     // requisição com axios
         let response = await axios.get(`${BASE}/posts`);
           return response.data;
    //    let response = await fetch(`${BASE}/posts`);
    //    let json = await response.json();
    //    return json;
    },
    addNewPost: (title:string, body:string, useId:number) =>{
         // requisição axios
         
        //  let response = await axios.post(`${BASE}/posts`,{
        //     title,body, useId
        //  });
        //  return response.data;
    }
}
