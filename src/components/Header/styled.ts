import styled from "styled-components";


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

                @media (max-width:900px){
                    width:40px;
                    margin: 10px 0;
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
            font-size:17px;
            font-style:italic;
            font-weight:500;
            text-shadow:1px 6px 5px #000;
           
            
        }
      @media (max-width:450px){
        display:flex;
        align-items:center;
        gap:30px;
        padding-top:40px;
        position:absolute;
        left:0;
        margin-top:10px;
        height:100vh;
        width:0;
        overflow-x: hidden;
        overflow-y: auto;
        background-color:rgba(4, 2, 77, 0.9);
        flex-direction:column;
        transition:all ease .5s;
        opacity:0;
      }
       
      }
      .buttonMenu{
            width:35px;
            position:absolute;
            right:10px;
            top:90px;
            display:none;
            cursor:pointer;
            
            
            img{
                width:100%;
                
        }
       @media (max-width:450px){
        display:block;
       }
    }
    @media (max-width:820px){
            flex-direction:column;
        }
    }
`;
