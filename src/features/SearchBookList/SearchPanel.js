import { Fragment, memo, useContext, useEffect, useState } from 'react'
import Context from '../../App/Context'
import { getBooksList } from '../../api/api'

const param = {
  title: 'title',
  creator: 'creator',
}
const SearchPanel = () => {
  const { params, setParams, setBookList } = useContext(Context)
  const { title, creator } = params

  const setValue = ({
    target: {
      value,
      dataset: { name },
    },
  }) => {
    setParams({ ...params, [name]: value })
  }
  const getBooksListByQuery = async () => {
    const { items } = await getBooksList(title, creator)
    setBookList(items)
  }
  const handleQuery = (e) => {
    setValue(e)
  }
  return (
    <Fragment>
      <label>
        title
        <input
          value={title}
          data-name="title"
          onChange={handleQuery}
          type="text"
        />
      </label>
      <label>
        creator
        <input
          value={creator}
          data-name="creator"
          onChange={handleQuery}
          type="text"
        />
      </label>
      <button onClick={getBooksListByQuery}>Search</button>
    </Fragment>
  )
}

export default memo(SearchPanel)
