import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from '../../layout/Default/styles'
import { Legend } from '../../pages/legend'
import { Horarios } from '../Horarios'
import { List } from '../List'

export function Main() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Horarios />
        <Legend />
        <List />
        <Footer />
      </LayoutContainer>
    </>
  )
}
