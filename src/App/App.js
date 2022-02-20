import { Fragment, memo, useContext, useEffect } from 'react'

import { Link, useRoute } from 'react-router5'

import BookListPage from '../pages/BookListPage'
import BookPage from '../pages/BookPage'
import { page } from '../router/constants'
import Context from './Context'

const App = () => {
  const { activePage, changeRoute } = useContext(Context)
  const { router, route } = useRoute()

  useEffect(() => {
    router.subscribe(changeRoute)

    changeRoute({ route })
  }, [])

  return (
    <Fragment>
      {activePage === page.bookList && <BookListPage></BookListPage>}
      {activePage === page.book && <BookPage/>}
    </Fragment>
  )
}

export default memo(App)
