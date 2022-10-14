
import styled from 'styled-components';



export const Container = styled.footer`
     background-color: #777;
     padding:0 2%;
    

     .footerSocial{
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        padding:15px 0;
        a{
            display:flex;
            flex-direction:column;
            align-items:center;
            margin: 0 15px;
            text-decoration:none;
            color:#fff;
            font-size:14px;

            img{
                width:30px;
            }
            @media (max-width:400px){
                margin:15px 10px;
            }
        }

        @media (max-width:400px){
           display:grid;
           grid-template-columns:repeat(2,1fr);
        }
      
     }
     .footerText{
            display:flex;
            justify-content:space-evenly;
            align-items:center;
            color:#fff;
            font-size:12px;
            padding:15px 0;
            border-top:1px solid #fff;

            @media (max-width:550px){
                flex-direction:column-reverse;
                gap:15px;
            }
        }
`;