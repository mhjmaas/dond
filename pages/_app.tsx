import '../styles/normalize.global.css'
import '../styles/webflow.global.css'
import '../styles/dond.webflow.global.css'
import '../styles/globals.css'
import { UserContext } from '../lib/context'
import { useUserData } from '../lib/hooks'

import { getAnalytics } from "firebase/analytics";

const analytics = getAnalytics();


function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

export default MyApp
