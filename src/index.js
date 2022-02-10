import ReactDOM from 'react-dom'
import App from './App/AppContainer'
import * as router from './router'

const appRouter = router.initialize()
ReactDOM.render(<App router={appRouter} />, document.getElementById('root'))
