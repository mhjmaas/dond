import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/Layout';
import Articles from '../components/Articles';
import TeamGrid from '../components/TeamGrid';
import Match from '../components/Match';
import FaqSection from '../components/FaqSection';
import ReactPlayer from 'react-player/lazy';
import { getArticles, getMatches, getMembers, getQuestions } from '../lib/util';
import { useState } from 'react';

const ARTICLE_LIMIT=3;
const MEMBER_LIMIT=4;
const MATCH_LIMIT=5;
const QUESTION_LIMIT=6;

export async function getStaticProps() {
  const articles = await getArticles(ARTICLE_LIMIT);
  const members = await getMembers(MEMBER_LIMIT);
  const matches = await getMatches(MATCH_LIMIT);
  const questions = await getQuestions(QUESTION_LIMIT);

  return {
    props: { articles, members, matches, questions },
    revalidate: 900
  };
}

export default function Home(props) {
  const [articles] = useState(props.articles);
  const [members] = useState(props.members);
  const [matches] = useState(props.matches);
  const [questions] = useState(props.questions);

  const [showMovie, setShowMovie] = useState(false);

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
            <a data-w-id="21b1975f-9fa3-4d15-c618-031aac97b536" href="https://discord.gg/QzSt8ZkssV" target="_blank" rel="noreferrer"  className="button w-button interaction2" data-cy="join-discord-link">join our discord</a>
          </div>
        </div>
        <div data-w-id="0d5ca418-ca09-8cf1-14b5-1f534c6f1b8d" className="scroll-wrapper interaction2">
          <img src="/images/Arrow-Down-Grey.svg" loading="lazy" data-w-id="0b52aba5-e792-d7d0-9184-631c3feb8b3e" alt="" className="down-arrow"/>
          <div className="subheading-small">scroll down</div>
        </div>
        <div data-w-id="d6190c0d-1c85-3a58-83dc-277a96fe570c" className="social-wrapper interactionRight3">
          <div className="social-link-wrapper">
            <a href="http://instagram.com" target="_blank" rel="noreferrer" className="social-link" data-cy="index-insta-link">INSTAGRAM</a>
            <a href="http://twitch.com" target="_blank" rel="noreferrer" className="social-link" data-cy="index-twitch-link">TWITCH</a>
            <a href="https://www.facebook.com/DayOfNoDefeat" className="social-link" data-cy="index-facebook-link">FACEBOOK</a>
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
                <a href="members.html" className="button-outline margin-top-32 w-button" data-cy="index-meet-team">meet the team</a>
              </Link>
            </div>
            <div data-w-id="6294ec0b-4d36-e5fb-b357-ed5eacbbc110" className="video-wrapper interaction2">
              {
                !showMovie && (
                  <div className="video-block">
                    <a href="#" className="play-button w-inline-block w-lightbox" onClick={() => setShowMovie(true)}>
                      <img src="/images/Play-Icon-Filled.svg" loading="lazy" alt=""/>
                    </a>
                  </div>
                )
              }
               {
              showMovie && (
                <ReactPlayer url='https://www.youtube.com/watch?v=S3hLu58KXg8' 
                  className="video-block playing"
                  playing={true}
                  width='100%'
                  muted={true}
                  height='272px'/>
              )
            }
              <img src="/images/Shape_accent-1.svg" loading="lazy" data-w-id="4a9a4c6d-997c-dcb4-6527-beaf2c72c715" alt="" className="video-accent interaction3"/>
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
            {
              !!matches && matches.length > 0 ? matches.map((match) => <Match match={match} key={match.matchdate}></Match>) : null
            }
            {
              !!matches && matches.length === 0 && (
                <h4 className="center">No maches have been played... yet...</h4>
              )
            }
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="container-large">
          <div data-w-id="05999b8b-e343-df3c-714c-ab8e8e69325c" className="title-wrap-centre interaction1">
            <h1 className="h1-title">MEET OUR <span className="brand-span">EXCELLENT</span> TEAM</h1>
            <div className="accent-line-small"></div>
          </div>
          <TeamGrid id="73ee4c9b-7533-8ebf-0f5f-d72e58cd60f8" members={members}>

          </TeamGrid>
        </div>
      </div>
      <div className="blog-section">
        <div className="container-large">
          <div data-w-id="747cf8f4-fcaf-fadf-d259-c57ed659382c" className="title-wrap-split interaction1">
            <div>
              <div className="subheading">blog</div>
              <h1>ARTICLES</h1>
            </div>
            <Link href="/news">
              <a className="button-outline w-button" data-cy="index-see-all">see all</a>
            </Link>
          </div>
          <Articles articles={articles}></Articles>
        </div>
      </div>
      <div className="cta-section">
        <div className="container-large">
          <div data-w-id="3dcc60d3-1853-bbf9-993f-1c5ea02c1909" className="cta-block interaction1">
            <div className="cta-content-wrapper">
              <h2 className="cta-heading">What are you <br/>waiting for?</h2>
              <p>DOND is an open community and ourmain goal is to have FUN and be competitive through teamwork instead of hero individuals. Therefore anyone is qualified to join us. You can start by joining our <a href="https://discord.gg/QzSt8ZkssV" target="_blank" rel="noreferrer" className="link-span">Discord</a>.</p>
            </div>
            <Link href="/contact">
              <a className="button w-button" data-cy="index-contact-us">Contact US</a>
            </Link>
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
                <div className="game-block"><img src="/images/hoi-colored.jpg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 320px, 94vw" srcSet="/images/hoi-colored-p-500.jpeg 500w, images/hoi-colored.jpg 528w" alt="" className="game-cover"/></div>
              </div>
              <div data-w-id="c981de5d-d3e0-9866-bcde-0d054a655b20" className="game-column-centre interaction3">
                <div className="game-block"><img src="/images/hell-let-loose-cover-colored.jpg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 320px, 94vw" srcSet="/images/hell-let-loose-cover-colored-p-500.jpeg 500w, images/hell-let-loose-cover-colored-p-800.jpeg 800w, images/hell-let-loose-cover-colored.jpg 1030w" alt="" className="game-cover"/></div>
              </div>
              <div data-w-id="ff5b3ccf-6d19-ce4e-96ac-d5994e6b3968" className="game-column interaction4">
                <div className="game-block"><img src="/images/ARMA-colored.jpg" loading="lazy" alt="" className="game-cover"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaqSection questions={questions}></FaqSection>
      <div className="instagram-section">
        <div className="container-large">
          <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab04" className="title-wrap-centre">
            <h1 className="h1-title">FOLLOW US</h1>
            <div className="accent-line-small"></div>
          </div>
          <div className="w-layout-grid instagram-grid">
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab09" className="instagram-wrap"><img src="/images/Instagram-01.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab0b" href="http://instagram.com" target="_blank" rel="noreferrer" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab0e" className="instagram-wrap"><img src="/images/Instagram-02.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab10" href="http://instagram.com" target="_blank" rel="noreferrer" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab13" className="instagram-wrap"><img src="/images/Instagram-03.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab15" href="http://instagram.com" target="_blank" rel="noreferrer" className="instagram-hover w-inline-block">
                <div className="instagram-icon"><img src="https://uploads-ssl.webflow.com/60ead4ccb2cbb7d7e62a9701/60ecfb1344f45695aced2dd6_Instagram%20White.svg" loading="lazy" alt="" className="instagram-logo"/></div>
              </a>
            </div>
            <div data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab18" className="instagram-wrap"><img src="/images/Instagram-04.png" loading="lazy" alt="" className="instagram-image"/>
              <a data-w-id="c7dd6106-6c40-7941-71b3-013b38a7ab1a" href="http://instagram.com" target="_blank" rel="noreferrer" className="instagram-hover w-inline-block">
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