import { ApolloProvider } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

import '../styles/globals.css'
import apolloClient from '../lib/apollo-client'
import { Layout } from '../components'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const commonLayout = (page: ReactElement) => (
  <Layout title="Anime List">
    {page}
  </Layout>
)

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || commonLayout

  return (
    <ApolloProvider client={apolloClient}>
      <NextNProgress />
      {getLayout(<Component {...pageProps} />)}
      <Toaster />
    </ApolloProvider>
  )
}

export default MyApp
