import Book from '../features/Book/Book'
import { useContext, useEffect } from 'react'
import Context from '../App/Context'
import { getBook } from '../api/api'
import { useRoute } from 'react-router5'

const bookResultInterceptor = (rawList) => {
  return rawList.filter(
    (item) => item.source === 'original' && item.track
  )
}

const BookPage = () => {
  const { setAudioList } = useContext(Context)
  const { route } = useRoute()

  useEffect(async () => {
    try {
      const { result } = await getBook(route.params.id)
      setAudioList(bookResultInterceptor(result))
    } catch (e) {
      console.error('мои поздравления', e)
    }
  }, [])
  return <Book />
}
export default BookPage
