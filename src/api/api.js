const axios = require('axios').default

const fields = [
  'title',
  'subject',
  'runtime',
  'avg_rating',
  'num_reviews',
  'description',
  'identifier',
  'creator',
  'date',
  'downloads',
  'subject',
  'item_size',
]
const makeQuery = (title, creator) => {
  const common = 'collection:(librivoxaudio)'
  const titleQuery = title ? ` AND title:${title}` : ''
  const creatorQuery = creator ? ` AND creator:${creator}` : ''
  return common + titleQuery + creatorQuery
}
const commonParams = {
  count: 100,
  fields: fields.join(', '),
}

export const getBooksList = async (title = '', creator = '') => {
  console.log('title', title, 'creator', creator)
  return (
    await axios.get('api/services/search/v1/scrape', {
      params: {
        ...commonParams,
        q: makeQuery(title, creator),
      },
    })
  ).data
}
export const getBook = async (bookId) => {
  return (await axios.get(`/api/metadata/${bookId}/files`)).data
}


// https://ia600801.us.archive.org/32/items/1-2pedro_reina_valera_1710_librivox/1-2pedro_01_rva_128kb.mp3
// https://www.archive.org/download/1-2pedro_reina_valera_1710_librivox/1-2pedro_01_rva_128kb.mp3
// id book / id track