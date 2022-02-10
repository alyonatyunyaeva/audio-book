import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'
import { page } from './constants'

const routes = [
  { name: page.bookList, path: '/' },
  { name: page.book, path: '/book/:id' },
]

export const initialize = () => {
  const router = createRouter(routes, { defaultRoute: page.bookList })
  router.usePlugin(browserPlugin())
  router.start()
  return router
}
