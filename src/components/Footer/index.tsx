import logo from '../../assets/images/logo.svg'
import { FooterContainer, LogoContainer } from './style'

export function Footer() {
  return (
    <FooterContainer>
      <LogoContainer>
        <img src={logo} alt="Smart Fit Logo" />
        <samp>Todos os direitos reservados - 2020</samp>
      </LogoContainer>
    </FooterContainer>
  )
}
