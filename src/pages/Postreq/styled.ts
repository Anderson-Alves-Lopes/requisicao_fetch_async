import styled from 'styled-components';


export const Container = styled.div`
    max-width:1000px;
    min-height: 100vh;
    display:flex;
    flex-direction:column;
    margin:auto;
    padding:20px 2%;
    /* justify-content:center;
    align-items: center; */
   
   .text{
    text-align:center;
    margin:20px auto;
    h2{
        color:#333;
        font-size:35px; 
    }
    p{
        color:#777;
        font-size:17px;
        margin:10px 0;
    }
    
   }
   
   .posts{
    padding:15px 0;

    h3{
        font-size:20px;
        font-family: 'Open Sans', sans-serif;
        font-weight:500px;
        font-style:italic;
        color:#333;
        text-transform:uppercase;
    }
    small{color:#999;}
   }
   p{
    color:#666;
    margin:10px 0;
   }
`;