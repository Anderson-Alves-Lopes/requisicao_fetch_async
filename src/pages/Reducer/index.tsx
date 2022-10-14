import { useReducer } from 'react';

import * as R from './styled';

import {reducerState,reducerAction} from '../../types/reducer';
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
export const Reducer = () =>{

    const [arm, func] = useReducer(reducer, initialState);
    return(
        <R.Main>
        <R.Container>
             <div className="boxCount">
                <p>Contagem : {arm.count}</p>
             </div>
             <div className="buttonBox">
                <R.Button  bg="#09e022" onClick={()=>func({type: 'Adicionar'})}>Adicionar</R.Button>
                <R.Button bg="#f2fa07" onClick={()=>func({type: 'Subtrair'})}>Subtrair</R.Button>
                <R.Button cor bg="#800806" onClick={()=>func({type: 'Reset'})}>Resetar</R.Button>
             </div>
        </R.Container>
        </R.Main>
    );
}