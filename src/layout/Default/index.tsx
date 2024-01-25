import { Outlet } from 'react-router-dom'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { LayoutContainer } from './styles'
import { Legend } from '../../pages/legend'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <Outlet />
      <Legend />
      <Footer />
    </LayoutContainer>
  )
}
