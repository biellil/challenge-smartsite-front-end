import logo from '../../assets/images/logo.svg'
import {
  BorderContainer,
  HeaderContainer,
  LogoContainer,
  Subtitle,
  Text3,
  Title,
  Titlediv,
} from './style'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={logo} alt="Smart Fit Logo" />
      </LogoContainer>
      <Titlediv className="container">
        <Title>REABERTURA</Title>
        <Subtitle>
          <h2>SMART FIT</h2>
          <BorderContainer />
          <Text3>
            O horário de funcionamento das nossas unidades está seguindo os
            decretos de cada município. Por isso, confira aqui se a sua unidade
            está aberta e as medidas de segurança que estamos seguindo.
          </Text3>
        </Subtitle>
      </Titlediv>
    </HeaderContainer>
  )
}
