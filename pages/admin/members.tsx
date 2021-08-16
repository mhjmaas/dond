import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function AdminPage({ }) {
  const siteTitle = 'DonD | MEMBERS'
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
      <Layout>
      <div className="utility-page-wrap">
          <div className="utility-page-content w-form">
          <div className="utility-page-form moveUp2">
              <h2>Members</h2>
              <div className="accent-line-small line-space">
              
              </div>
      
          </div>
          </div>
      </div>
    </Layout>
  </>
  )
}