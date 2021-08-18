import Head from 'next/head';
import InstagramSection from '../components/InstagramSection';
import Layout, { siteTitle } from '../components/Layout';
import TeamGrid from '../components/TeamGrid';
import { getMembers } from '../lib/util';

const MEMBER_LIMIT=12;

export async function getStaticProps() {

  const members = await getMembers(MEMBER_LIMIT);

  return {
    props: { members },
    revalidate: 900
  };
}


export default function MembersPage(props) {
  const siteTitle = 'DonD - Members';
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
            <TeamGrid id="e06bf118-8958-a441-e64b-c28d1ce38fd4" members={props.members}></TeamGrid>
          </div>
        </div>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}