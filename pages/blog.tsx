import Head from 'next/head';
import Articles from '../components/Articles';
import DiscordCallToActionSection from '../components/DiscordCallToActionSection';
import InstagramSection from '../components/InstagramSection';
import Layout, { siteTitle } from '../components/Layout';

export default function BlogPage({ }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <div className="blog-grid-header">
          <div className="container">
            <div className="hero-content-wrapper">
              <h5 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe46" className="h5-title interaction2">anubıs e-sport team</h5>
              <h1 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe48" className="hero-title interaction3">Our latest news<span className="brand-span"></span></h1>
            </div>
          </div>
        </div>
        <div className="blog-grid-section">
          <div className="container">
            <Articles></Articles>
          </div>
        </div>
        <DiscordCallToActionSection></DiscordCallToActionSection>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}