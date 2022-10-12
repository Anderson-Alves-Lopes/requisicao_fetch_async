import styled from 'styled-components';


export const Header = styled.header`
    width:100%;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    padding:10px 0;

   

    .container{
        max-width:1000px;
        display:flex;
        align-items:center;
        justify-content:space-between;
        margin:auto;
        padding:0 2%;

        h1{
        color:#fff;
        font-size:40px;
    }
    .headerImages{
            display:flex;
            flex:1;
            justify-content:center;
            align-items:center;
            gap:25px;

            img{
                width:60px;
                opacity:0.9;
            }
        }
    }
    ul{
        list-style:none;
        display:flex;
        gap:20px;

        li a{
            text-decoration:none;
            color:#fff;
            font-size:20px;
            font-style:italic;
            font-weight:500;
            text-shadow:1px 6px 5px #000;
            
        }
    }
`;

export const Footer = styled.footer`
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
        }
      
     }
     .footerText{
            display:flex;
            justify-content:space-evenly;
            color:#fff;
            font-size:12px;
            padding:15px 0;
            border-top:1px solid #fff;
        }
`;