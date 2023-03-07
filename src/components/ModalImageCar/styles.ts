import styled from "styled-components";

export const Model = styled.div`
    z-index: 2;
    position: fixed;
    
    display: flex;
    align-items: center;

    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.6);
`;


export const Container = styled.div`
    background: var(--colors-white);
    max-width: 32.5rem;
    width: 90%;
    height: 22.625rem;    

    position: relative;

    margin: 0 auto;  
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
 
    border-radius: 10px;
    padding: 2rem;

    svg{
        position: absolute;
        top: 25px;
        right: 25px;
        color: var(--colors-grey-4);
        cursor: pointer;

    }

    h6{
        margin-bottom: 20px;
        text-align: start;
    }

    figure{
        
        width: 466px;
        height: 239px;

        display: flex;
        align-items: center;
        justify-content: center;

        img{
            transform: scale(2);
        }

        
    }
`;

