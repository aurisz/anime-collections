import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graphql.anilist.co', fetch
  }),
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default client;
