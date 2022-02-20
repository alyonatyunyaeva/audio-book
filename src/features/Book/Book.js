import { useContext } from 'react'
import Context from '../../App/Context'

const Book = () => {
  const { bookData, audioList } = useContext(Context)
  console.log('dd', audioList, bookData)
  const getLink = (audioId) => {
    const bookId = bookData.identifier
    const result = `https://www.archive.org/download/${bookId}/${audioId}`
    console.log('result', result)
    return result
  }

  return (
    <div>
      {audioList.map((item) => (
        <div key={item['external-identifier']}>
          <span>{item.title}</span>

          <audio controls>
            <source src={getLink(item.name)} type="audio/mpeg"/>
                Your browser does not support the audio tag.
          </audio>
        </div>
      ))}
    </div>
  )
}
export default Book
