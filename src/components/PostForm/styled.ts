import styled from "styled-components";


export const Fieldset = styled.fieldset`
        margin-bottom:30px;
        display:flex;
        flex-direction:column;
        gap:30px;
        padding:20px 30px;
        border:0;
        border-radius:10px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 9px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        
        legend{
            color:#555;
            text-shadow:1px 3px 5px #999;
            font-size:20px;
        }
        input, textarea{
            border:0;
            border-bottom:1px solid #999;
            padding:5px;
            outline:none;
            resize:none;
            color:#777;
            font-size:17px;
            min-height:100px;
            max-height:300px;
        }
        input::placeholder,
        textarea::placeholder{
            color:#ccc;
            font-size:15px;
        }
        button{
            width:50%;
            height:50px;
            font-size:20px;
            margin:15px auto;
            border-radius:30px;
            border:0;
            cursor:pointer;
            background-color:#5f678c;
            color:#fff;
            box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
            transition:all ease .4s;

            &:hover{
                color:#aaa;
                background-color:#8f99c4;
            }
        }
    
`;