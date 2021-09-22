import Head from 'next/head';
import Articles from '../components/Articles';
import DiscordCallToActionSection from '../components/DiscordCallToActionSection';
import InstagramSection from '../components/InstagramSection';
import Layout from '../components/Layout';
import { articleToJSON, firestore } from '../lib/firebase';
import { getArticles } from '../lib/util';

const ARTICLE_LIMIT=9;

export async function getStaticProps() {

  const articles = await getArticles(ARTICLE_LIMIT);

  return {
    props: { articles },
    revalidate: 900
  };
}

export default function BlogPage({ articles }) {
  const siteTitle = 'DonD - News';
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <div className="blog-grid-header">
          <div className="container">
            <div className="hero-content-wrapper">
              <h5 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe46" className="h5-title interaction2">DonD community</h5>
              <h1 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe48" className="hero-title interaction3">Our latest news<span className="brand-span"></span></h1>
            </div>
          </div>
        </div>
        <div className="blog-grid-section">
          <div className="container">
          <Articles articles={articles}></Articles>
          </div>
        </div>
        <DiscordCallToActionSection></DiscordCallToActionSection>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}