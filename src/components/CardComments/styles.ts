import styled from "styled-components";

export const Container = styled.li`

    margin-bottom: 2.75rem;
    width: 100%;

    .userInfo {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1.75rem;

        .userBall {
            font-family: var(--font-inter);
            width: 2rem;
            height: 2rem;
            font-style: normal;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 0px;

            background: var(--colors-brand-1);
            border-radius: 50px;

            color: var(--colors-white);
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 0.5rem;
        }
        .name {
            margin-right: 0.5rem;
            font-family: var(--font-inter);
            font-style: normal;
            font-weight: 500;
            font-size: 0.875rem;
            line-height: 1.5rem;
            color: var(--colors-grey-1);
        }
        .userDot {
            width: 0.25rem;
            height: 0.25rem;
            background: var(--colors-grey-4);
            border-radius: 50px;
            margin-right: 0.5rem;
        }

        .postedDate {
            font-family: var(--font-inter);
            font-style: normal;
            font-weight: 400;
            font-size: 0.75rem;
            line-height: 1.5rem;

            color: var(--colors-grey-3);
        }
    }
    .userComment {
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.5rem;

    color: var(--colors-grey-2);
    }       
  
  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  
`



