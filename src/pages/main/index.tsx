import { Horarios } from '../Horarios'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from '../../layout/Default/styles'
import { Legend } from '../../pages/legend'
export function Main() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Horarios />
        <Legend />
        <Footer />
      </LayoutContainer>
    </>
  )
}
