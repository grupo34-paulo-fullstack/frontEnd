import { Link } from "react-router-dom";
import styled from "styled-components";
import { FooterStyle } from "../../components/Footer/style";

export const LoginMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 220px);
  background: rgba(233, 236, 239, 1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-right: 3rem;
  padding-left: 3rem;
  padding-top: 2.75rem;
  padding-bottom: 2.75rem;
  background-color: var(--colors-grey-10);
  width: 25.688rem;
  margin-top: 2.875rem;
  margin-bottom: 2.875rem;
  h5 {
    font-family: var(--font-lexend);
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    /* identical to box height */
    margin-bottom: 2rem;
    color: #000000;
  }
  label {
    margin-bottom: 0.5rem;
  }
  span {
    font-family: var(--font-inter);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */
    margin-bottom: 1.5rem;
    color: #000000;
  }

  p{
    color: var(--colors-grey-2);
    text-align: center;
    margin: 1.5rem 0;
  }

  .forget-password{
    text-align: end;
    cursor: pointer;
    margin-bottom: 20px;
    margin-top: -22px;
    z-index: 1;
  }

  @media (max-width: 425px){
    width: 90%;
    padding: 7%;
  }
`;

export const BodyLogin = styled.div`   
    height: 100vh;
` 

export const BtnSignIn = styled.button`
  width: 19.70rem;
  height: 3rem;

  background: var(--colors-brand-4);
  color: var(--colors-brand-1);

  border: 1.5px solid var(--colors-brand-4);
  border-radius: 4px;

  transition: 0.4s;

  &:hover{
    cursor: pointer;
    background: var(--colors-brand-1);
    color: var(--colors-white);
  }

  @media (max-width: 425px){
    width: 100%;
  }
`

export const BtnSignUp = styled(Link)`
  width: 19.70rem;
  height: 3rem;

  color: var(--colors-grey-0);
  background: var(--colors-white);

  border: 2px solid var(--colors-grey-4);
  border-radius: 4px;

  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.4s;

  &:hover{
    cursor: pointer;
    border: 2px solid var(--colors-grey-0);
    background-color: var(--colors-grey-0);
    color: var(--colors-white);
  }

  @media (max-width: 425px){
    width: 100%;
  }
`
  