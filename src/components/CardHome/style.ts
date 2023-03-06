import styled  from "styled-components"

export interface Props {
    backgroundColor: string;
}

export const Container = styled.li`
    font-family: 'Lexend';

    display: flex;    
    align-items: flex-start;

    justify-content: space-between;
    flex-direction: column;

    width: 312px;
    height: 350px;

    a {
        text-decoration: none;
        color: #212529;
    }

    h5 {
        font-size: 1rem;
    }

    p {
        text-align: left;
    }

    .container-name{
        display: flex;
        align-items: center;
        padding-left: 10px;
    }

    .container-image{
        text-align: center;
        width: 312px;
        height: 9.5rem;
        background-color:  var(--colors-grey-7);
        /* border: 2px solid var(--colors-grey-7); */
    }

    .container-infos{
        width: 100%;

        display: flex;
        justify-content: space-between;

        p{
            font-size: 1rem;
            font-weight: 600;
            color: var(--colors-grey-1);
            margin-right: 6px;
        }
    }
`

export const NameIcon = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%; 
    margin-right: 5px;

    width: 27px;
    height: 27px;

    font-size: 1rem;

    background-color: ${(props) => props.backgroundColor};
`

export const SpanInfo = styled.div`

    display: flex;
    gap: 10px;

    span{
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 5px 10px;
        color: var(--colors-brand-1);

        background: var(--colors-brand-4);
        border-radius: 4px;
    }  
`

export const ButtonsForAnnouncer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin-top: 16px;

    button:last-child {
        margin-left: 16px;
    } 
` 