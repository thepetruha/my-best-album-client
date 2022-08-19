import '../styles/globals.css'
import Head from 'next/head'
import { Header } from '../components/Header'
import type { AppProps } from 'next/app'
import styles from '../styles/Home.module.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state = { search: "" }, action: any) => {
  switch (action.type) {
    case "set":
      return { ...state, search: action.search }
    default:
      return state
  }
}

const store = createStore(reducer)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Provider store={store} >
          <Header />
          <main className={styles.main}>
            <Component {...pageProps} />
          </main>
        </Provider>
      </div>
      <footer className={styles.footer}>
        www.mybestalbum.org
      </footer>
    </>
  )
}

export default MyApp