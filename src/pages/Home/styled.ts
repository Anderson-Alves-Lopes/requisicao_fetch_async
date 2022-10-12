import styled from "styled-components";

export const Main = styled.main`
  width:100%;
  min-height:86vh;
  background-size:contain;
`;
export const Container = styled.div`
   width:100%;
   max-width:1000px;
   min-height:inherit;
   margin:auto;
   padding:0 2%;
   display:flex;
   align-items:center;
   justify-content:center;
   
   h1{
     background-color:#fff;
     padding:10px;
     font-size:40px;
     
     @media (max-width:350px){
        font-size:33px;
       }
   }
`;