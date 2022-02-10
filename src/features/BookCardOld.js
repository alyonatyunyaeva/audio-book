import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Collapse,
  CardActions,
} from '@mui/material'
import { ExpandMoreRounded } from '@mui/icons-material'
import './BookCard.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

const BookCard = ({ book }) => {
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Fragment>
      <Card
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'baseline',
          maxWidth: 'fit-content',
        }}
      >
        <CardHeader title={book.title} subheader={book.totaltime} />
        <CardContent>
          {book.authors.map((author, index) => (
            <Fragment>
              <Typography
                key={author.id + index}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {author.first_name} {author.last_name}
              </Typography>
              <Typography
                key={(author.dod + index).toString()}
                variant="body2"
                color="text.secondary"
                paragraph
              >
                {author.dob}-{author.dod}
              </Typography>
            </Fragment>
          ))}
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreRounded />
          </ExpandMore>
        </CardActions>
      </Card>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            dangerouslySetInnerHTML={{ __html: book.description }}
            paragraph
          ></Typography>
        </CardContent>
      </Collapse>
    </Fragment>
  )
}
ExpandMore.propTypes = {
  expand: PropTypes.bool,
}
BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    runtime: PropTypes.string,
    avg_rating: PropTypes.number,
    num_reviews: PropTypes.string,
    description: PropTypes.string,
    identifier: PropTypes.string,
    creator: PropTypes.string,
    date: PropTypes.string,
    downloads: PropTypes.number,
    subject: PropTypes.arrayOf(PropTypes.string),
    item_size: PropTypes.number,
  }),
}
export default memo(BookCard)
