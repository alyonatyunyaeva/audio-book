import { memo, useContext } from 'react'
import BookCard from './BookCard'
import './BookList.css'
import Context from '../App/Context'

const BookList = () => {
  const { bookList } = useContext(Context)

  return (
    <section className="book-list">
      {bookList.map((book) => (
        <BookCard key={book.identifier} book={book}></BookCard>
      ))}
    </section>
  )
}

export default memo(BookList)
