import { BrowserRouter } from 'react-router-dom'
import { Routers } from './Router'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  )
}
