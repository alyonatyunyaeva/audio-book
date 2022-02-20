import { useState } from 'react'

const useBookListState = () => {
  const [bookList, setBookList] = useState([])
  return { bookList, setBookList }
}
const useBookState = () => {
  const [bookData, setBookData] = useState([])
  const [audioList, setAudioList] = useState([])
  return { bookData, audioList, setBookData, setAudioList }
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
  const bookState = useBookState()
  const searchBooksState = useSearchBooksState()
  const navState = useNavState()
  return {
    ...bookListState,
    ...bookState,
    ...searchBooksState,
    ...navState,
  }
}
