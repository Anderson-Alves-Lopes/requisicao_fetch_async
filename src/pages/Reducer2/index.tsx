

import * as R from './styled';
import { Score } from '../../hooks/Score';
  
export const Reducer2 = () =>{
    const [arm, func] = Score();
    
    return(
        <R.Main>
        <R.Container>
            <h2>Reducer versão melhorada </h2>
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