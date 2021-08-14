import Link from 'next/link'

export default function Footer(props) {
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
                  <div>TEAM</div>
                </a>
              </Link>
              <Link href='/'>
                <a aria-current="page" className="navigation-footer w-inline-block w--current"><img src="images/Logo_done.svg" loading="lazy" height="72" alt="" className="logo"/></a>
              </Link>
              <Link href='/#Games'>
                <a className="footer-link w-inline-block">
                  <div>GAME</div>
                </a>
              </Link>
              <Link href='/blog'>
                <a className="footer-link w-inline-block">
                  <div>BLOG</div>
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
            <div className="footer-legal-text">© Template by <a href="https://www.flowbase.co/" target="_blank" className="link-span">Flowbase</a>
              <a href="http://webflow.com" target="_blank" className="link-span"></a>
            </div>
            <div className="footer-extra-links">
              
            </div>
          </div>
        </div>
      </div>
    </>
    )
}