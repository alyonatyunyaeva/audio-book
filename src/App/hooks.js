import { useState } from 'react'
import { page } from '../router/constants'

const useBookListState = () => {
  const [bookList, setBookList] = useState([])
  return { bookList, setBookList }
}
const useSearchBooksState = () => {
  const [params, setParams] = useState({
    title: '',
    creator: '',
  })
  return { params, setParams }
}

const useNavState = () => {
  const [activePage, setActivePage] = useState(null)
  const changeRoute = ({ route }) => setActivePage(route.name)

  return { activePage, changeRoute }
}

export const useAppState = () => {
  const bookListState = useBookListState()
  const searchBooksState = useSearchBooksState()
  const navState = useNavState()
  return {
    ...bookListState,
    ...searchBooksState,
    ...navState,
  }
}
