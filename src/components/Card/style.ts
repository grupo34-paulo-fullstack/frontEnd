import styled  from "styled-components"

export interface Props {
    backgroundColor: string;
}



export const Container = styled.div`
    font-family: 'Lexend';
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 312px;
    height: 350px;

    h5 {
        margin: 0 auto;
        font-size: 1rem;
    }

    p {
        text-align: left;
        display: flex;
        padding-left: 10px;
        font-size: 0.875rem;
        line-height: 1.5rem;

        font-family: 'Inter';
    }

    .container-name{
        display: flex;
        align-items: center;
        font-size: 15px;
        padding-left: 10px;

        font-family: 'Inter';
    }

    .container-image{
        text-align: center;
        width: 19.5rem;
        height: 9.5rem;
        background-color:  #E9ECEF;
        border: 2px solid #E9ECEF;
    }

    .container-infos{
        padding-left: 10px;
        width: 100%;

        display: flex;
        justify-content: space-between;

        p{
            font-size: 1rem;
            font-weight: 600;
            color: #212529;
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
        color: #4529E6;

        background: #EDEAFD;
        border-radius: 4px;

        font-size: 0.8rem;
        font-weight: 550;
        font-family: 'Inter';
    }

`