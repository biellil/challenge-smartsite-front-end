import { Route, Routes } from 'react-router-dom'
import { Main } from './pages/main'

export function Routers() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}
