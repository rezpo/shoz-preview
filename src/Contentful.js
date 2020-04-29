import { createClient } from 'contentful'

export default createClient({
  host: process.env.REACT_APP_CONTENTFUL_HOST,
  space: process.env.REACT_APP_API_SPACE,
  accessToken: 'rbXjT3dQl2smfGM4fJdQYJ4VnA0Ypgzkpft7GsrvYqU',
});
