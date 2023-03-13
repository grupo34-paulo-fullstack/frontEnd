import styled from "styled-components";
import { ButtonStyle } from "../../components/Button/style";

export const Container = styled.div`
    width: 100%;
    height: 530px;

    background-color: var(--colors-brand-2);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-align: center;
        padding: 0 10px;
        font-size: 32px;
        color: var(--colors-white);
        max-width: 748px;
        min-width: 372px;
    }

    p {
        color: var(--colors-white);
        margin-top: 20px;
        margin-bottom: 46px;
        padding: 0 10px;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;

        gap: 21px;
    }

    ${ButtonStyle} {
    width: 320px;
    height: 48px;
    

    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    margin: 0 auto;
    }


    @media (min-width: 768px){
        h1 {
         font-size: 44px;
        }

        div{
            flex-direction: row;
            margin-top: 28px;
            margin-bottom: 21px;

            ${ButtonStyle} {
                width: 182px;
                
            }
        }
    }
`

export const Auction = styled.div`
    max-width: 1600px;
    width: 100%;

    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 150px;
    padding: 0 10px;

    ul  {
        display: flex;
        flex-direction: row;
        gap: 8px;


        overflow-x: scroll;

        margin-top: 40px;        
 
        & {
            scrollbar-width: auto;
            scrollbar-color: var(--colors-brand-1) #ffffff;
        }

        
        &::-webkit-scrollbar {
            width: 16px;
            height: 20px;
        }

        &::-webkit-scrollbar-track {
            background: #ffffff;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--colors-brand-1);
            border-radius: 10px;
            border: 6px solid #ffffff;
        }
    }

    @media (min-width: 768px) {
        ul {
            gap: 16px;

            li {
                min-width: 725px;
            }
        }
    }
`

export const CardCars = styled.div`
    max-width: 1600px;
    width: 100%;

    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 150px;
    padding: 0 10px;

    ul  {
        display: flex;
        flex-direction: row;
        gap: 8px;

        scroll-margin-bottom: 10px;
        overflow-x: scroll;

        margin-top: 40px;           
 
        & {
            scrollbar-width: auto;
            scrollbar-color: var(--colors-brand-1) var(--colors-white);
            

        }
        
        &::-webkit-scrollbar {
            width: 16px;            
            height: 8px;
        }

        &::-webkit-scrollbar-track {
            
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--colors-brand-1);
            border-radius: 10px;       
        }

        li{
            margin-bottom: 5px;
        }
    }

    @media (min-width: 768px) {
        ul {
            gap: 16px;
        }
    }
`