import Head from 'next/head';
import InstagramSection from '../components/InstagramSection';
import Layout, { siteTitle } from '../components/Layout';
import TeamGrid from '../components/TeamGrid';

export default function MembersPage({ }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <div className="blog-grid-header">
          <div className="container">
            <div className="hero-content-wrapper">
              <h5 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe46" className="h5-title interaction2">DOND COMMUNITY</h5>
              <h1 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe48" className="hero-title interaction3">Meet our legends<span className="brand-span"></span></h1>
            </div>
          </div>
        </div>
        <div className="team-section">
          <div className="container-large">
            <TeamGrid id="e06bf118-8958-a441-e64b-c28d1ce38fd4"></TeamGrid>
          </div>
        </div>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}