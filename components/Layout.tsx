import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from './Navbar'
import Footer from './Footer'
import InitWebflow from '../lib/hooks'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

export const siteTitle = 'DonD - A community of squads'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta content="DonD - A community of squads" property="og:title" />
        <meta content="Day of no Defeat is the ultimate embodiment of teamwork and focussed on making Hell Let Loose even better than it already is by playing together with friends." property="og:description"/>
        <meta content="DonD - A community of squads" property="twitter:title"/>
        <meta content="Day of no Defeat is the ultimate embodiment of teamwork and focussed on making Hell Let Loose even better than it already is by playing together with friends." property="twitter:description"/>
        <meta property="og:type" content="website"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <meta content="width=device-width, initial-scale=1" name="viewport"></meta>
        <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon"></link>
        <link href="images/webclip.png" rel="apple-touch-icon"></link>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs=" crossOrigin="anonymous"></script>
        <script src='../js/webflow.js' type='text/javascript'/>
      </Head>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
      <InitWebflow/>
    </>
  )
}