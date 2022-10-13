import { Routes, Route, Link} from 'react-router-dom';

import { Home } from './pages/Home';
import {Versionfetch}from './pages/Versionfetch';
import { Versionasync } from './pages/Versionasync';
import * as A from './components/Templates';

import Bg from './assets/images/background1.jpg';
import Oculos from './assets/images/oculos-3d.png';
import Pipoca from './assets/images/pipoca.png';
import Copo from './assets/images/drinque-suave.png';
import Whatapp from './assets/images/whatsapp.png';
import Linkedin from './assets/images/linkedin.png';
import Email from './assets/images/marketing-de-email.png';
import Github from './assets/images/github.png';
 // https://api.b7web.com.br/cinema/
export const App = () =>{
  return (
    <div>
        <A.Header style={{backgroundImage: `url(${Bg})`}} >
      
      <div className="container">
          <h1>Filmes em cartaz</h1>
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
              <li></li>
            </ul>
          </nav>
        </div>
      
      </A.Header>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/fetch" element={< Versionfetch />} />
        <Route path="/async" element={<Versionasync />} />
      </Routes>
      <A.Footer>
        <div className="footerSocial">
            <a href="https://web.whatsapp.com/send?phone=55992210870" target="_blank" rel="noreferrer"><img src={Whatapp} alt="" />WhasApp</a>
            <a href="https://www.linkedin.com/in/anderson-alves-lopes-04670722b/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="" />Linkedin</a>
            <a href="https://github.com/Anderson-Alves-Lopes" target="_blank" rel="noreferrer"><img src={Github} alt="" />GitHub</a>
            <a href="mailto:neno-alveslopes@hotmail.com" target="_blank" rel="noreferrer"><img src={Email} alt="" />E-mail</a>
        </div>
        <div className="footerText">
           <p>Todos direitos reservados</p>
           <p>Projeto feito me Reactjs</p>
           <p>Anderson Alves Lopes</p> 
        </div>
      </A.Footer>
    </div>
  );
}

export default App;
