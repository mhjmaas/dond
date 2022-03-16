import Link from 'next/link'
import { useContext } from 'react'
import { UserContext } from '../lib/context'

export default function Footer(props) {
  const { user, username } = useContext(UserContext);

  return (
    <>
      <div className="footer">
        <div className="footer-menu">
          <div className="container">
            <div data-w-id="836973a2-bacd-7d94-fe76-2c996856ceae" className="footer-wrapper">
              <Link href='/'>
                <a className="footer-link w-inline-block">
                  <div>HOME</div>
                </a>
              </Link>
              <Link href='/about'>
                <a className="footer-link w-inline-block">
                  <div>ABOUT</div>
                </a>
              </Link>
              <Link href='/members'>
                <a className="footer-link w-inline-block">
                  <div>MEMBERS</div>
                </a>
              </Link>
              <Link href='/'>
                <a aria-current="page" className="navigation-footer w-inline-block w--current"><img src="/images/Logo_20.png" loading="lazy" height="72" alt="" className="logo"/></a>
              </Link>
              <Link href='/#Games'>
                <a className="footer-link w-inline-block">
                  <div>GAME</div>
                </a>
              </Link>
              <Link href='/news'>
                <a className="footer-link w-inline-block">
                  <div>NEWS</div>
                </a>
              </Link>
              <Link href='/contact'>
                <a className="footer-link w-inline-block">
                  <div>CONTACT</div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-legal">
        <div className="container">
          <div className="footer-link-block">
            <div className="footer-legal-text">© Template by <a href="https://www.flowbase.co/" target="_blank" rel="noreferrer"  className="link-span">Flowbase</a>
              <a href="http://webflow.com" target="_blank" rel="noreferrer"  className="link-span"></a>
            </div>
            <div className="footer-extra-links">
              <Link href={!user ? '/login' : '/admin'}>
                <a className="template-link w-inline-block login-link">
                  <div>{!user ? 'Login' : 'Admin'}</div>
                </a>
              </Link>
          </div>
          </div>
        </div>
      </div>
    </>
    )
}