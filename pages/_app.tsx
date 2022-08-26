import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'

import '../styles/globals.css'
import apolloClient from '../lib/apollo-client'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
