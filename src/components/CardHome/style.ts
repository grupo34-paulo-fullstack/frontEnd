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
        margin-top: 10px;
        text-align: left;
        margin-top: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .container-description {
        text-align: left;
        margin-top: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 48px;
    }

    .container-name{
        display: flex;
        align-items: center;
        margin-top: 10px;
    }

    .container-image{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 312px;
        height: 9.5rem;
        background-color:  var(--colors-grey-7);
        border-radius: 3px;

        img{
            width: 75%;
            height: 75%;
            object-fit: contain;
        }
    }

    .container-infos{
        width: 100%;

        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        p{
            font-size: 1rem;
            font-weight: 600;
            color: var(--colors-grey-1);
            margin-right: 6px;
            
        }
    }

    &:hover{
        .container-image{

            border: 2px solid var(--colors-brand-1);

            img{

                transition: 0.5s;
                transform: scale(1.2);
            }
        }
    }
`

export const NameIcon = styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%; 
    margin-right: 5px;

    font-weight: 600;

    width: 27px;
    height: 27px;

    font-size: 0.8rem;

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