import { Link } from "react-router-dom";
import styled from "styled-components"
import { ButtonStyle } from "../../Button/style";

interface IStyledBurguerProps {
    open: boolean
}

export const StyledBurger = styled.button<IStyledBurguerProps>`
  position: absolute;
  top: 28px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    background: var(--colors-grey-0);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(10px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
    color: var(--colors-grey-2);
    text-decoration: none;

    margin: 25px 0 10px 16px;

    &:hover {
        color: var(--colors-brand-1);
    }
`;


export const MenuDropDown = styled.nav<IStyledBurguerProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  position: relative;  

  hr{
    margin-top: 16px;
    border: 1px solid var(--colors-grey-5);
    margin-bottom: -10px;
    height: 2px;
    width: 375px;
  }

  ${ButtonStyle} {
    width: 92%;
    height: 48px;

    font-weight: 600;
    font-size: 16px;
    line-height: 0px;

    margin: 0 auto;
    margin-top: 28px;
    margin-bottom: 21px;
    }


  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    background-color: var(--colors-white);
    position: absolute;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 80px;
    right: 0;
    width: 375px;
    transition: transform 0.5s ease-in-out;
  }
`;


export const IconUser = styled.div`   

    position: absolute;

    display: flex;
    align-items: center;

    top: 220px;
    right: 30px;
    gap: 5px;

    p{
        padding: 7px;
        background-color: var(--colors-brand-2);
        border-radius: 50%;

        color: var(--colors-white);

        line-height: 16px;
    }
`
