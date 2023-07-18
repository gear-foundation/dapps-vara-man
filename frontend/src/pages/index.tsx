import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { useInitGame } from '@/app/hooks/use-game'

const routes = [
  { path: '/', Page: lazy(() => import('./game')) },
  { path: '/levels', Page: lazy(() => import('./levels')) },
  { path: '/rules', Page: lazy(() => import('./rules')) },
  { path: '/home', Page: lazy(() => import('./home')) },
]

export const Routing = () => {
  useInitGame()

  return (
    <Routes>
      {routes.map(({ path, Page }) => (
        <Route
          key={path}
          path={path}
          element={
            <Page />
          }
        />
      ))}
    </Routes>
  )
}
