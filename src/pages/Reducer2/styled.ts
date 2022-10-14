
import styled from 'styled-components';

import BgR from '../../assets/images/mathematics.jpg';


export const Main = styled.div`
   width:100%;
   background-image:url(${BgR});
   background-size:cover;
   background-position:center;
  
`;

export const Container = styled.div`
    max-width:1000px;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:30px 2%;
    h2{
      text-align: center;
      font-size:30px;
      margin:20px 0;
    }
  .boxCount{
    width:200px;
    height:200px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 20px auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    font-size:25px;
    color:#fff;
    background-color:rgba(0, 0, 0, 0.5);

  }
  
  .buttonBox{
    margin:auto;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    gap:30px;
   
    
  }
`;
type ButtonProps ={
    bg?:string;
    cor?:boolean;
}
export const Button = styled.button<ButtonProps>`
  
        width:100px;
        padding:7px 0;
        font-size:17px;
        font-style:italic;
        border-radius:10px;
        border:none;
        cursor:pointer;
        color:${(props)=>props.cor ? '#fff' : '#000' };
        background-color: ${(props)=> props.bg};
        transition:all ease .4s;
        &:hover{
            opacity:.7;
        }
`;