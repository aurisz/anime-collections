import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import Layout from '../components/Layout'

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
