import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/Default'
import { HOME } from './pages/Home'

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HOME />} />
      </Route>
    </Routes>
  )
}
