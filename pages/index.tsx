import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout, { siteTitle } from '../components/Layout';
import InitWebflow from '../lib/hooks';
import Articles from '../components/Articles';
import FaqSection from '../components/FaqSection';

export default function Home({  }) {
  return (
   <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
      <div className="header-section">
        <div className="container">
          <div className="hero-content-wrapper">
            <h5 data-w-id="d5c6557c-f137-143e-3e96-81a9c6cd2a54" className="h5-title interaction2">welcome to Day of no Defeat</h5>
            <h1 data-w-id="1f4ee6ac-a629-c222-013d-f23612b7800d" className="hero-title interaction2">Hell let loose GLOBAL community</h1>
            <Link href="/about" >
              <a data-w-id="21b1975f-9fa3-4d15-c618-031aac97b536" className="button w-button interaction2">LEARN MORE</a>
            </Link>
          </div>
        </div>
        <div data-w-id="0d5ca418-ca09-8cf1-14b5-1f534c6f1b8d" className="scroll-wrapper interaction2">
          <img src="images/Arrow-Down-Grey.svg" loading="lazy" data-w-id="0b52aba5-e792-d7d0-9184-631c3feb8b3e" alt="" className="down-arrow"/>
          <div className="subheading-small">scroll down</div>
        </div>
        <div data-w-id="d6190c0d-1c85-3a58-83dc-277a96fe570c" className="social-wrapper interactionRight3">
          <div className="social-link-wrapper">
            <a href="http://instagram.com" target="_blank" className="social-link">INSTAGRAM</a>
            <a href="http://twitch.com" target="_blank" className="social-link">TWITCH</a>
            <a href="https://www.facebook.com/DayOfNoDefeat" className="social-link">FACEBOOK</a>
          </div>
        </div>
      </div>
      <div className="about-section">
        <div className="container-medium">
          <div className="w-layout-grid about-grid">
            <div data-w-id="c683b0c0-3c8d-f040-259f-7e8902c37157" className="content-wrap-small interaction1">
              <div className="accent-line"></div>
              <h2>ABOUT THE <span className="brand-span">DOND </span>Community</h2>
              <p>The name of the game is TEAMWORK. Our ultimate goal as a community is to create strength in utilizing dedicated squads.</p>
              <Link href='/members'>
                <a href="members.html" className="button-outline margin-top-32 w-button">meet the team</a>
              </Link>
            </div>
            <div data-w-id="6294ec0b-4d36-e5fb-b357-ed5eacbbc110" className="video-wrapper interaction2">
              <div className="video-block">
                <a href="#" className="play-button w-inline-block w-lightbox">
                  <img src="images/Play-Icon-Filled.svg" loading="lazy" alt=""/>
                  {/* <script type="application/json" className="w-json">{
                      "items": [
                        {
                          "type": "video",
                          "originalUrl": "https://www.youtube.com/watch?v=T4Thq_T3NgI&ab_channel=Flowbase",
                          "url": "https://www.youtube.com/watch?v=T4Thq_T3NgI&ab_channel=Flowbase",
                          "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FT4Thq_T3NgI%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DT4Thq_T3NgI&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FT4Thq_T3NgI%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
                          "thumbnailUrl": "https://i.ytimg.com/vi/T4Thq_T3NgI/hqdefault.jpg",
                          "width": 940,
                          "height": 528
                        }
                      ]
                    }</script> */}
                </a>
              </div>
              <img src="images/Shape_accent-1.svg" loading="lazy" data-w-id="4a9a4c6d-997c-dcb4-6527-beaf2c72c715" alt="" className="video-accent interaction3"/>
            </div>
          </div>
        </div>
      </div>
      <div className="match-section">
        <div className="container-medium">
          <div data-w-id="7bb11d4a-5b9f-83b5-0a11-d117cf759b30" className="title-wrap-centre interaction1">
            <h1 className="h1-title">UPCOMING <span className="brand-span">&amp;</span> FINISHED MATCHES</h1>
            <div className="accent-line-small"></div>
          </div>
          <div className="w-layout-grid match-grid">
            <div className="match-wrapper">
              <div className="match-block">
                <div className="match-banner">
                  <div className="clan-mark"><img src="images/star-filled.svg" loading="lazy" alt="" className="star-match"/><img src="images/Logo_done.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>DonD</h5>
                </div>
                <div className="match-links">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
              <div className="match-results">
                <h3 className="match-number">3</h3>
                <h3 className="match-number-split">:</h3>
                <h3 className="match-number">2</h3>
              </div>
              <div className="match-block">
                <div className="match-banner right-side">
                  <div className="clan-mark"><img src="images/Star-Outline.svg" loading="lazy" alt="" className="star-match"/><img src="images/Medium-Anubis.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>EXODUS</h5>
                </div>
                <div className="match-links right-side">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
            </div>
            <div className="match-wrapper">
              <div className="match-block">
                <div className="match-banner">
                  <div className="clan-mark"><img src="images/star-filled.svg" loading="lazy" alt="" className="star-match"/><img src="images/Logo_done.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>DonD</h5>
                </div>
                <div className="match-links">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
              <div className="match-results">
                <h3 className="match-number">5</h3>
                <h3 className="match-number-split">:</h3>
                <h3 className="match-number">0</h3>
              </div>
              <div className="match-block">
                <div className="match-banner right-side">
                  <div className="clan-mark"><img src="images/Star-Outline.svg" loading="lazy" alt="" className="star-match"/><img src="images/Medium-Anubis.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>RACOONS</h5>
                </div>
                <div className="match-links right-side">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
            </div>
            <div className="match-wrapper">
              <div className="match-block">
                <div className="match-banner">
                  <div className="clan-mark"><img src="images/star-filled.svg" loading="lazy" alt="" className="star-match"/><img src="images/Logo_done.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>DOND</h5>
                </div>
                <div className="match-links">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
              <div className="match-results">
                <h3 className="match-number">1</h3>
                <h3 className="match-number-split">:</h3>
                <h3 className="match-number">4</h3>
              </div>
              <div className="match-block">
                <div className="match-banner right-side">
                  <div className="clan-mark"><img src="images/Star-Outline.svg" loading="lazy" alt="" className="star-match"/><img src="images/Medium-Anubis.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>PBS</h5>
                </div>
                <div className="match-links right-side">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
            </div>
            <div className="match-wrapper">
              <div className="match-block">
                <div className="match-banner">
                  <div className="clan-mark"><img src="images/star-filled.svg" loading="lazy" alt="" className="star-match"/><img src="images/Logo_done.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>DOND</h5>
                </div>
                <div className="match-links">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
              <div className="match-results">
                <h3 className="match-number">4</h3>
                <h3 className="match-number-split">:</h3>
                <h3 className="match-number">1</h3>
              </div>
              <div className="match-block">
                <div className="match-banner right-side">
                  <div className="clan-mark"><img src="images/Star-Outline.svg" loading="lazy" alt="" className="star-match"/><img src="images/Medium-Anubis.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>22th PANZER</h5>
                </div>
                <div className="match-links right-side">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
            </div>
            <div className="match-wrapper">
              <div className="match-block">
                <div className="match-banner">
                  <div className="clan-mark"><img src="images/star-filled.svg" loading="lazy" alt="" className="star-match"/><img src="images/Logo_done.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>DonD</h5>
                </div>
                <div className="match-links">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
              <div className="match-results">
                <h3 className="match-number">2</h3>
                <h3 className="match-number-split">:</h3>
                <h3 className="match-number">3</h3>
              </div>
              <div className="match-block">
                <div className="match-banner right-side">
                  <div className="clan-mark"><img src="images/Star-Outline.svg" loading="lazy" alt="" className="star-match"/><img src="images/Medium-Anubis.svg" loading="lazy" alt="" className="team-logo"/></div>
                  <h5>SPITFIRE</h5>
                </div>
                <div className="match-links right-side">
                  <div className="subheading-small margin-right-16">WATCH</div>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Twitch.svg" loading="lazy" alt=""/></a>
                  <a href="#" className="preview-links w-inline-block"><img src="images/Theme-Youtube.svg" loading="lazy" alt=""/></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="container-large">
          <div data-w-id="05999b8b-e343-df3c-714c-ab8e8e69325c" className="title-wrap-centre interaction1">
            <h1 className="h1-title">MEET OUR <span className="brand-span">EXCELLENT</span> TEAM</h1>
            <div className="accent-line-small"></div>
          </div>
          <div data-w-id="73ee4c9b-7533-8ebf-0f5f-d72e58cd60f8" className="w-layout-grid grid team-grid interaction2">
            <div className="team-block">
              <div className="player-image-wrapper"><img srcSet="images/s1-p-500.png 500w, images/s1.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/s1.png" alt="" className="player-image"/></div>
              <div className="team-detail">
                <h5>s-1</h5>
                <div className="subheading-small-white">Professional Medic</div>
              </div>
            </div>
            <div className="team-block">
              <div className="player-image-wrapper"><img src="images/joker.png" loading="lazy" alt="" className="player-image"/></div>
              <div className="team-detail">
                <h5>LIGE</h5>
                <div className="subheading-small-white">Joker SQUAD Leader</div>
              </div>
            </div>
            <div className="team-block">
              <div className="player-image-wrapper"><img srcSet="images/gog-p-500.png 500w, images/gog.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/gog.png" alt="" className="player-image"/></div>
              <div className="team-detail">
                <h5>GOG</h5>
                <div className="subheading-small-white">Vector SQuad Engineer</div>
              </div>
            </div>
            <div className="team-block">
              <div className="player-image-wrapper"><img srcSet="images/falcon-p-500.png 500w, images/falcon.png 512w" loading="lazy" sizes="(max-width: 479px) 90vw, (max-width: 767px) 91vw, 92vw" src="images/falcon.png" alt="" className="player-image"/></div>
              <div className="team-detail">
                <h5>Falcon</h5>
                <div className="subheading-small-white">Vector Squad Assault</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <div className="container-large">
          <div data-w-id="747cf8f4-fcaf-fadf-d259-c57ed659382c" className="title-wrap-split interaction1">
            <div>
              <div className="subheading">blog</div>
              <h1>ARTICLES</h1>
            </div>
            <a href="blog.html" className="button-outline w-button">see all</a>
          </div>
          <Articles></Articles>
        </div>
      </div>
      <div className="cta-section">
        <div className="container-large">
          <div data-w-id="3dcc60d3-1853-bbf9-993f-1c5ea02c1909" className="cta-block interaction1">
            <div className="cta-content-wrapper">
              <h2 className="cta-heading">What are you <br/>waiting for?</h2>
              <p>DOND is an open community and ourmain goal is to have FUN and be competitive through teamwork instead of hero individuals. Therefore anyone is qualified to join us. You can start by joining our <a href="https://discord.io/dond" target="_blank" className="link-span">Discord</a>.</p>
            </div>
            <a href="contact.html" className="button w-button">Contact US</a>
          </div>
        </div>
      </div>
      <div id="Games" className="games-section">
        <div className="container">
          <div data-w-id="a3c4baf6-1973-6e3a-468c-b9a6b50d036c" className="title-wrap-centre interaction1">
            <h1 className="h1-title">games</h1>
            <div className="accent-line-small"></div>
          </div>
          <div className="games-wrapper">
            <div className="w-layout-grid games-grid">
              <div data-w-id="6bb22f59-8f9b-6997-0f7d-6da0416c2ad7" className="game-column interaction2">
                <div className="game-block"><img src="images/hoi-colored.jpg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 320px, 94vw" srcSet="images/hoi-colored-p-500.jpeg 500w, images/hoi-colored.jpg 528w" alt="" className="game-cover"/></div>
              </div>
              <div data-w-id="c981de5d-d3e0-9866-bcde-0d054a655b20" className="game-column-centre interaction3">
                <div className="game-block"><img src="images/hell-let-loose-cover-colored.jpg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 320px, 94vw" srcSet="images/hell-let-loose-cover-colored-p-500.jpeg 500w, images/hell-let-loose-cover-colored-p-800.jpeg 800w, images/hell-let-loose-cover-colored.jpg 1030w" alt="" className="game-cover"/></div>
              </div>
              <div data-w-id="ff5b3ccf-6d19-ce4e-96ac-d5994e6b3968" className="game-column interaction4">
                <div className="game-block"><img src="images/ARMA-colored.jpg" loading="lazy" alt="" className="game-cover"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaqSection></FaqSection>
      <div className="instagram-section">
        <div className="container-large">
          <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab04" className="title-wrap-centre">
            <h1 className="h1-title">FOLLOW US</h1>
            <div className="accent-line-small"></div>
          </div>
          <div className="w-layout-grid instagram-grid">
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab09" className="instagram-wrap"><img src="images/Instagram-01.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab0b" href="http://instagram.com" target="_blank" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab0e" className="instagram-wrap"><img src="images/Instagram-02.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab10" href="http://instagram.com" target="_blank" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab13" className="instagram-wrap"><img src="images/Instagram-03.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab15" href="http://instagram.com" target="_blank" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab18" className="instagram-wrap"><img src="images/Instagram-04.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab1a" href="http://instagram.com" target="_blank" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  </>
  );
}