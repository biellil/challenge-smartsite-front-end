import logo from '../../assets/images/logo.svg'
import {
  BorderContainer,
  HeaderContainer,
  LogoContainer,
  Subtitle,
  Title,
  Titlediv,
} from './style'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="Smart Fit Logo" />
      </LogoContainer>
      <Titlediv>
        <Title>REABERTURA</Title>
        <Subtitle>
          <h2>SMART FIT</h2>
          <BorderContainer />
        </Subtitle>
      </Titlediv>
    </HeaderContainer>
  )
}
