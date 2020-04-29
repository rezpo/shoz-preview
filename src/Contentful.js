import { createClient } from 'contentful'

export default createClient({
  host: process.env.REACT_APP_CONTENTFUL_HOST,
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
