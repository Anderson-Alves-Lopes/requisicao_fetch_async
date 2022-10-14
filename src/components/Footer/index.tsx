import * as F from './styled';

import Whatapp from '../../assets/images/whatsapp.png';
import Linkedin from '../../assets/images/linkedin.png';
import Email from '../../assets/images/marketing-de-email.png';
import Github from '../../assets/images/github.png';

export const Footer = () =>{
    return(
        <F.Container>
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
      </F.Container>
    );
}