import { ApolloProvider } from '@apollo/client'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import '../styles/globals.css'
import apolloClient from '../lib/apollo-client'
import Layout from '../components/Layout'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const commonLayout = (page: ReactElement) => (
  <Layout>
    {page}
  </Layout>
)

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || commonLayout

  return (
    <ApolloProvider client={apolloClient}>
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </ApolloProvider>
  )
}

export default MyApp
