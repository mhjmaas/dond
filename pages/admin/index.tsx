import Layout from '../../components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function AdminPage({ }) {
  const siteTitle = 'DonD | ADMIN'
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
      <Layout>
      <div className="utility-page-wrap">
          <div className="utility-page-content w-form">
          <div className="utility-page-form moveUp2">
              <h2>Admin menu</h2>
              <div className="accent-line-small line-space">
              
              </div>
              <div className="menu-items">
                <Link href="/admin/articles">
                  <button className="button full-width w-button" >Articles</button>
                </Link>
                <Link href="/admin/matches">
                  <button className="button full-width w-button" >Matches</button>
                </Link>
                <Link href="/admin/members">
                  <button className="button full-width w-button" >Members</button>
                </Link>
              </div>
              
          </div>
          </div>
      </div>
    </Layout>
  </>
  )
}