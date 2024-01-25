import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { Main } from './pages/main'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Main />} />
      </Route>
    </Routes>
  )
}
