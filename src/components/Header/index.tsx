import { Container, HeaderStyle, LinkDropDownUser, MenuDropDown, MenuNav, NavLink, NavUser } from "./style";
// import Button from "../Button";
import Burger from "./MenuHamburger";
import { createRef, useEffect, useState } from "react";
import logo from '../../assets/logo_header.png'

export interface IMenuBurgerProps {
    isOpen: boolean;
    setIsOpen: (prev:boolean) => void
    handleToggle: () => void
    refMenu: any
}

export const Header = () => {

    const inputRef = createRef<HTMLInputElement>();

    const [isOpenMenuUser, setIsOpenMenuUser] = useState(false)
    const [isOpenHamburgerMenu, setIsOpenHamburgerMenu] = useState(false)
    const [width, setWidth] = useState<number>(0)

    function handleToggleMenuUser () {
        setIsOpenMenuUser((prev)=> !prev)
    }

    function handleToggleHamburgerMenu () {
        setIsOpenHamburgerMenu((prev)=> !prev)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
          if (isOpenMenuUser && inputRef.current && !inputRef.current.contains(e.target)) {
            setIsOpenMenuUser(false)
          }
          if (isOpenHamburgerMenu && inputRef.current && !inputRef.current.contains(e.target)) {
            setIsOpenHamburgerMenu(false)
          }
        }    
        document.addEventListener("mousedown", checkIfClickedOutside)    
        return () => {
          // Cleanup the event listener
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpenMenuUser, isOpenHamburgerMenu])

    useEffect(() => {
        const captureWidth = () => {
          const newWidth = window.innerWidth;
          setWidth(newWidth);

          if(newWidth > 767) return setIsOpenHamburgerMenu(false)
          if(newWidth < 768) return setIsOpenMenuUser(false)
        }; 

        window.addEventListener("resize", captureWidth);
        return () => window.removeEventListener("resize", captureWidth)
    
    }, []);
    

    return(
    <HeaderStyle>
        <Container>
            <div>
                <img src={logo} alt="Motors shop" />
            </div>

            <Burger isOpen={isOpenHamburgerMenu} setIsOpen={setIsOpenHamburgerMenu} handleToggle={handleToggleHamburgerMenu} refMenu={inputRef}/>

            <MenuNav>
                <NavLink className='text-body-1-600' to="">Carros</NavLink>
                <NavLink className='text-body-1-600' to="">Motos</NavLink>
                <NavLink className='text-body-1-600' to="">Leilão</NavLink>
                <div className="vertical-line"/>
                {/* <NavLink className='text-body-1-600' to="">Fazer Login</NavLink>
                <Button background={'var(--colors-grey-10)'} color={'var(--colors-grey-0)'} outline_color={'var(--colors-grey-4)'} children={'Cadastrar'} background_hover={'var(--colors-grey-1)'} color_hover={'var(--colors-grey-10)'}></Button>  */}

                <NavUser onClick={handleToggleMenuUser}>
                    <p className="text-button-big-text" >SL</p>
                    <h4 className="text-body-1-400">Samuel Leão</h4>
                </NavUser>

                { isOpenMenuUser &&
                    <MenuDropDown ref={inputRef} open={isOpenMenuUser} width={width}>
                        <LinkDropDownUser className="text-body-1-400" to="" onClick={handleToggleMenuUser}>Editar Perfil</LinkDropDownUser>
                        <LinkDropDownUser className="text-body-1-400" to="" onClick={handleToggleMenuUser}>Editar Endereço</LinkDropDownUser>
                        <LinkDropDownUser className="text-body-1-400" to="" onClick={handleToggleMenuUser}>Minhas Compras</LinkDropDownUser>
                        <LinkDropDownUser className="text-body-1-400" to="" onClick={handleToggleMenuUser}>Sair</LinkDropDownUser>
                    </MenuDropDown>
                }                
            
            </MenuNav>
        </Container>
    </HeaderStyle>
    )
}