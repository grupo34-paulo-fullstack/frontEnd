import { IMenuBurgerProps } from ".."
import Button from "../../Button"
import { IconUser, NavLink } from "./style"
import { MenuDropDown, StyledBurger } from "./style"


const Burger = ( {isOpen, setIsOpen, handleToggle, refMenu}: IMenuBurgerProps) => {
    
    return (
      <>
        <StyledBurger open={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        {
            isOpen &&
            <MenuDropDown open={isOpen} ref={refMenu}>
                <NavLink className="text-body-1-600" to="" onClick={handleToggle}>Carros</NavLink>
                <NavLink className="text-body-1-600" to="" onClick={handleToggle}>Motos</NavLink>
                <NavLink className="text-body-1-600" to="" onClick={handleToggle}>Leilão</NavLink>
                <hr/>
                {/* <NavLink className="text-body-1-600" to="">Fazer Login</NavLink>
                <Button  background={'var(--colors-grey-10)'} color={'var(--colors-grey-0)'} outline_color={'var(--colors-grey-4)'} children={'Cadastrar'} background_hover={'var(--colors-grey-1)'} color_hover={'var(--colors-grey-10)'}></Button> */}
                
                <NavLink className="text-body-1-600" to="">Editar Perfil</NavLink>
                <IconUser >
                    <p className="text-body-2-400" >SL</p>
                </IconUser>
                <NavLink className="text-body-1-600" to="">Editar Endereço</NavLink>
                <NavLink className="text-body-1-600" to="">Minhas Compras</NavLink>
                <NavLink className="text-body-1-600" to="">Sair</NavLink>

            </MenuDropDown>
        }
      </>
    )
}
  
export default Burger