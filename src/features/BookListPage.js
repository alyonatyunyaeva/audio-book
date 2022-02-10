import { Fragment, memo, useContext, useEffect, useState } from 'react'
import Context from '../App/Context'
import BookList from '../features/BookList'
import SearchPanel from './SearchPanel'
import { getBooksList } from '../api/api'

const BookListPage = () => {
  const { setBookList } = useContext(Context)

  useEffect(async () => {
    try {
      const { items } = await getBooksList()
      setBookList(items)
    } catch (e) {
      console.error('мои поздравления', e)
    }
  }, [])

  return (
    <Fragment>
      <SearchPanel></SearchPanel>
      <BookList />
    </Fragment>
  )
}

export default memo(BookListPage)
