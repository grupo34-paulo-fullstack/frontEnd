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
    height: 15.625rem;

    margin: 0 auto;
 
    border-radius: 10px;
    padding: 2rem;

    h6{
        margin-bottom: 20px;
    }

    #email{
        margin-top: 5px;
    }

    .btns {
        display: flex;
        gap: 6%;
    }
`;

