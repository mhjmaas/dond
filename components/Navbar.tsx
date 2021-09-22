import Link from 'next/link'

export default function Navbar(props) {
  return (
    <header data-collapse="medium" data-animation="default" data-duration="400" data-w-id="da7c2208-b16f-5ddd-358b-1aef72ca8599" role="banner" className="navigation w-nav">
      <div className="container-navigation">
        <Link href="/">
          <a  aria-current="page" className="logo-mobile w-inline-block w--current">
            <img src="/images/Logo_done.svg" loading="lazy" height="72" alt="" className="logo"/>
          </a>
        </Link>
        <nav role="navigation" className="menu-wrap w-nav-menu">
          <Link href="/">
            <a aria-current="page" className="menu-link w-inline-block w--current">
              <div>HOME</div>
            </a>
          </Link>
          <Link href="/about">
            <a className="menu-link w-inline-block">
              <div>ABOUT</div>
            </a>
          </Link>
          <Link href="/members">
            <a className="menu-link w-inline-block">
              <div>Squads</div>
            </a>
          </Link>
          <Link href="/">
            <a href="index.html" aria-current="page" className="logo-desktop w-inline-block w--current">
              <img src="/images/Logo_done.svg" loading="lazy" height="72" alt="" className="logo"/>
            </a>
          </Link>
          <Link href="/#Games">
            <a className="menu-link w-inline-block">
              <div>GAMES</div>
            </a>
          </Link>
          <Link href="/news">
            <a className="menu-link w-inline-block">
              <div>NEWS</div>
            </a>
          </Link>
          <Link href="/contact">
            <a className="menu-link w-inline-block">
              <div>CONTACT</div>
            </a>
          </Link>
        </nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
      </div>
    </header>
    )
}