import React, { Fragment, memo, useContext } from 'react'
import PropTypes from 'prop-types'

import './BookCard.css'
import Context from '../App/Context'
import { useRoute } from 'react-router5'
import { page } from '../router/constants'

const BookCard = ({ book }) => {
  const { identifier, title, creator, runtime } = book
  const { router } = useRoute()

  const goToBook = () => {
    router.navigate(page.book, { id: identifier })
  }

  return (
    <div className="book-card" onClick={goToBook}>
      <div className="book-card--cover-container">
        <div
          className="book-card--cover"
          style={{
            backgroundImage: `url("https://archive.org/services/img/${book.identifier}")`,
          }}
        ></div>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{creator}</p>
        <p>{runtime}</p>
      </div>
    </div>
  )
}
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    runtime: PropTypes.string,
    // avg_rating: PropTypes.number,
    // num_reviews: PropTypes.string,
    // description: PropTypes.string,
    identifier: PropTypes.string,
    creator: PropTypes.string,
    // date: PropTypes.string,
    // downloads: PropTypes.number,
    // subject: PropTypes.arrayOf(PropTypes.string),
    // item_size: PropTypes.number,
  }),
}
export default memo(BookCard)
