import styled from 'styled-components';


type ConteinerProps ={
    min?:boolean;
}
export const Container = styled.div<ConteinerProps>`
    max-width:1000px;
    display:flex;
    height: ${(props) => props.min ? '100vh' : 'auto'};
    flex-direction:column;
    margin:auto;
    padding:0 2%;
    /* justify-content:center;
    align-items: center; */

    h2 ,p{
        text-align:center;
        margin:30px auto;
        font-size:30px;
        color:#555;
    }
    .moviesBox{
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        @media (max-width:600px){
            grid-template-columns:repeat(3,1fr);
        }
        @media (max-width:400px){
            grid-template-columns:repeat(2,1fr);
        }

        .movieGrid{
            margin:10px;
            text-align:center;

            img{
                width:100%;
            }
        }
    }
`;