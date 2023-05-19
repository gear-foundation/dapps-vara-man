import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const routes = [
  { path: '/', Page: lazy(() => import('./home')) },
  { path: '/levels', Page: lazy(() => import('./levels')) },
]

export const Routing = () => {
  return (
    <Routes>
      {routes.map(({ path, Page }) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<>Page {Page.name} is loading...</>}>
              <Page />
            </Suspense>
          }
        />
      ))}
    </Routes>
  )
}
