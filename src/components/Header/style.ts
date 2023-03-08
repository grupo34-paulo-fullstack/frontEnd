import { Link } from "react-router-dom";
import styled from "styled-components"

interface OpenMenuUser {
    open: boolean
    width: number
    height: string
}

export const HeaderStyle = styled.header`
    max-width: 100vw;
    width: 100%;
    height: 5rem;    
    background-color: var(--colors-grey-10);
    border-bottom: 2px solid var(--colors-grey-6);
`

export const Container = styled.div`
    max-width: 1600px;
    height: 100%;
    margin: 0 auto;
    padding: 0 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        img{
            display: flex;
            align-items: center;
            width: 154px;
            height: 27px;
        }

        &:hover {
        cursor: pointer;
    }}    
`

export const MenuNav = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    z-index: 2;
    height: 100%;

    .vertical-line{
        border-left: 1px solid var(--colors-grey-6);
        height: 5rem;
        width: 2px
    }

    @media (min-width: 768px) {
        width: 30rem;      
    }

    @media (min-width: 1024px) {
        width: 37.5rem;     
    }

    @media (max-width: 767px) {
        display: none;        
    }
`

export const NavLink = styled(Link)`
    color: var(--colors-grey-2);
    text-decoration: none;

    &:hover {
        color: var(--colors-brand-1);
    }
`;

export const NavUser = styled.div`

    width: 8.75rem;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-right: 45px;
    gap: 8px;
    cursor: default;
    transition: 0.2s;

    &:hover {
        transform: scale(1.05);
    }

    p{
        padding: 10px;
        background-color: var(--colors-brand-2);
        width: 35px;
        height: 35px;
        border-radius: 50%;

        color: var(--colors-white);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h4{
        white-space: nowrap;
    }
`

export const MenuDropDown = styled.nav<OpenMenuUser>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  width: 12.5rem;
  height: 12.5rem;

  padding-top: 21px;
  padding-bottom: 5px;


  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 767px) {
    position: absolute;

    flex-direction: column;

    background-color: var(--colors-white);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s ease-in-out;

    top: 70px;
    right: 20px;

    width: 12.5rem;
    height: ${props => props.height};
  }

  @media (min-width: 1600px) {
    right: ${({ width })=> ((width-1600)/2)+30}px;
    height: ${props => props.height};
  }  
`;

export const LinkDropDownUser = styled(Link)`
    color: var(--colors-grey-2);
    text-decoration: none;

    margin: 0px 0 16px 22px;

    &:hover {
        color: var(--colors-brand-1);
    }
`;