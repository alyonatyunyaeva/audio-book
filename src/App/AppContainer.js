import { memo } from 'react'
import PropTypes from 'prop-types'
import Context from './Context'
import { useAppState } from './hooks'
import { RouterProvider } from 'react-router5'
import App from './App'

const AppContainer = ({ router }) => {
  const state = useAppState()

  return (
    <RouterProvider router={router}>
      <Context.Provider value={state}>
        <App></App>
      </Context.Provider>
    </RouterProvider>
  )
}
AppContainer.propTypes = {
  router: PropTypes.object,
}
export default memo(AppContainer)
