import { Link } from "react-router-dom";

import * as A from './styled';

import Bg from '../../assets/images/background1.jpg';
import Oculos from '../../assets/images/oculos-3d.png';
import Pipoca from '../../assets/images/pipoca.png';
import Copo from '../../assets/images/drinque-suave.png';

import Menu from '../../assets/images/botao-de-menu-de-tres-linhas-horizontais.png';

 export const Header = () =>{
    const handleMenu = () =>{
          let menu = document.querySelector('ul') as HTMLUListElement;
          if(menu.style.width === '50vw'){
             menu.style.opacity = '0';
             setTimeout(()=>{
              menu.style.width = '0';
             },700)
          } else{
            menu.style.width = '50vw';
            setTimeout(()=>{
              menu.style.opacity = '1';
            },700)
          }
    }
    return(

        <A.Header style={{backgroundImage: `url(${Bg})`}} >
      
        <div className="container">
            <h1>Requesiçoes e hooks avançados</h1>
            <div className="headerImages">
              <img src={Oculos} alt="" />
              <img src={Copo} alt="" />
              <img src={Pipoca} alt="" />
            </div>
  
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fetch">Fetch</Link></li>
                <li><Link to="/async">Async</Link></li>
                <li><Link to="/postreq">Posts</Link></li>
                <li><Link to="/reducer">Reducer</Link></li>
                <li><Link to="/reducer2">Reducer2</Link></li>
              </ul>
            </nav>
            <div onClick={handleMenu} className="buttonMenu">
              <img src={Menu} alt="/" />
            </div>
          </div>
        
        </A.Header>
    );
}