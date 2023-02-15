import logo  from '../../assets/logo_footer.png'
import { FooterStyle } from './style'
import { IoIosArrowUp } from 'react-icons/io'

const Footer = () => (
  <FooterStyle>
    <div className='container-footer'>
    <figure>
      <img src={logo} alt="Motors shop" />
    </figure>

    <p>© 2022 -  Todos os direitos reservados.</p>

    <a href="#">
      <IoIosArrowUp />
    </a>

    </div>

  </FooterStyle>  
)

export default Footer