import * as H from './styled'

import Bgh from '../../assets/images/backgroundHome.jpg';

export const Home = () =>{
   return(
      <H.Main style={{backgroundImage: `url(${Bgh})`}}>
        <H.Container>
        <h1>Bem vindo a Home</h1>
        </H.Container>
      </H.Main>
   );
};