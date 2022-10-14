import { useReducer } from "react";

import {reducerState,reducerAction} from '../types/reducer';
const initialState = { count: 0};
const reducer = (valor:reducerState, action:reducerAction) =>{
    switch(action.type){
        case 'Adicionar':
        //    valor.count += 1;
        return {...valor, count: valor.count +1};
        // break;
        case 'Subtrair':
            // if(valor.count > 0){
            //     valor.count -= 1;
            // }
            if(valor.count > 0){
            return {...valor, count: valor.count -1}
            }
          break;    
        case 'Reset': 
        //  valor.count = 0;
        return initialState;
        // break;      
    }     
     return valor;
}  

export const Score = () =>{
       return useReducer (reducer, initialState);
    // const [arm, func] = useReducer(reducer, initialState);
}