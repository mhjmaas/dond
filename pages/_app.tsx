import '../styles/normalize.global.css'
import '../styles/webflow.global.css'
import '../styles/dond.webflow.global.css'
import '../styles/globals.css'
import head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
