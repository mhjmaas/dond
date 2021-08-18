import Layout from '../../components/Layout';
import AuthCheck from '../../components/AuthCheck';
import Head from 'next/head';
import Link from 'next/link';
import { auth } from '../../lib/firebase';
import { useRouter } from 'next/router';

export default function AdminPage({ }) {
  const siteTitle = 'DonD | ADMIN'
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
      <Layout>
      <AuthCheck>
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
                  <Link href="/admin/faq">
                    <button className="button full-width w-button" >FAQ</button>
                  </Link>
                  <Link href="/admin/matches">
                    <button className="button full-width w-button" >Matches</button>
                  </Link>
                  <Link href="/admin/members">
                    <button className="button full-width w-button" >Members</button>
                  </Link>
                  <Link href="/admin/message">
                    <button className="button full-width w-button" >Message</button>
                  </Link>
                </div>
                <div className="accent-line-small line-space">
                
                </div>
                <SignOutButton></SignOutButton>
            </div>
            </div>
        </div>
      </AuthCheck>
    </Layout>
  </>
  )
}
function SignOutButton() {
  const router = useRouter();
  return (
      <button data-wait="Please wait..." className="button full-width w-button" onClick={() => {
        auth.signOut();
        router.push('/login');
        
      }}>Sign Out</button>
  )
}