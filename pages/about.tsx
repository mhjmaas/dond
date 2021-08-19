import Head from 'next/head';
import { useState } from 'react';
import DiscordCallToActionSection from '../components/DiscordCallToActionSection';
import InstagramSection from '../components/InstagramSection';
import Layout from '../components/Layout';
import TeamGrid from '../components/TeamGrid';
import { oauth } from '../lib/discord';
import { getMembers } from '../lib/util';

const MEMBER_LIMIT = 4;

export async function getStaticProps() {
  const members = await getMembers(MEMBER_LIMIT);

  return {
    props: { members },
    revalidate: 900
  };
}


export default function AboutPage(props) {
  const siteTitle = 'DonD - About';
  const [members] = useState(props.members)


  // oauth.tokenRequest({
  //   clientId: "876779168438829076",
  //   clientSecret: "ux2u2Qp1M00Kk3GD-J4lWNx2jKxqKmRQ",
  
  //   scope: "identify guilds",
  //   grantType: "authorization_code",
    
  // }).then(console.log)

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <div className="about-header">
          <div className="container">
            <div className="hero-content-wrapper">
              <h5 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe46" className="h5-title interaction2">DOND Community</h5>
              <h1 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe48" className="hero-title interaction2">learn about<br/><span className="brand-span">our COMMUNITY</span></h1>
            </div>
            <div data-w-id="da6f1f5c-5107-a568-11af-b3aa94a3771d" className="video-header interaction4">
              <a href="#" className="play-button w-inline-block w-lightbox">
                <img src="images/Play-Icon-Filled.svg" loading="lazy" width="24" alt=""/>
                {/* <script type="application/json" className="w-json">{
                  "items": [
                    {
                      "type": "video",
                      "originalUrl": "https://www.youtube.com/watch?v=T4Thq_T3NgI&ab_channel=Flowbase",
                      "url": "https://www.youtube.com/watch?v=T4Thq_T3NgI&ab_channel=Flowbase",
                      "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FT4Thq_T3NgI%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DT4Thq_T3NgI&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FT4Thq_T3NgI%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube\" width=\"940\" height=\"528\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"true\"></iframe>",
                      "thumbnailUrl": "https://i.ytimg.com/vi/T4Thq_T3NgI/hqdefault.jpg",
                      "width": 940,
                      "height": 528
                    }
                  ]
                }</script> */}
              </a>
            </div>
          </div>
        </div>
        <div className="about-section">
          <div className="container">
            <div className="w-layout-grid about-grid">
              <div data-w-id="a2e1b6b6-00e3-0dd2-dd03-fd5b02d23cbb" className="content-wrap-large interaction1">
                <div className="accent-line"></div>
                <h2 className="h2-title">ABOUT THE DOND<br/><span className="brand-span">COMMUNITY</span></h2>
                <p>We are a community of players centered around the squad based realistic WWII game called Hell Let Loose. A couple of players got together and founded &quot;Vector&quot; squad. The mission of &quot;Vector&quot; was to try and improve as a dedicated squad. DonD takes this a step further by becoming a community of squads. A place to found and find a squad to join and train together with the ultimate goal of doing competitive matches composed of only dedicated squads.<br/><br/>Day of no Defeat actually has existed as a clan for a long time already as a, you might have guessed it, a &quot;Day of Defeat&quot; clan. However it had been growing silent and we have decided to resurrect it for our porpose.</p>
              </div>
              <div id="w-node-fb18d7e0-3760-3c7f-9fc4-9911180c1e31-286bfd32" data-w-id="fb18d7e0-3760-3c7f-9fc4-9911180c1e31" className="content-image-wrapper interaction2">
                <div className="content-image"><img src="images/partial-character-grey.jpg" loading="lazy" alt="" className="image-cover"/><img src="/images/Logo_done.svg" loading="lazy" width="250" alt="" className="team-logo-large"/></div><img src="images/Shape_accent-about-1.svg" loading="lazy"  data-w-id="27e1c6a4-6e5f-833b-2805-5f65fd3bd62c" alt="" className="about-accent interactionRight2"/>
              </div>
            </div>
          </div>
        </div>
        <div className="team-story-section">
          <div className="container">
            <div data-w-id="b28dcbc7-fc27-b9b2-edd0-2d410314b28d" className="title-wrap-centre margin-bottom-48 interaction1">
              <h1 className="h1-title">DOND <span className="brand-span">COMMUNITY </span>STORY</h1>
              <div className="accent-line-small"></div>
            </div>
            <div data-w-id="feca5776-73da-cbed-0afc-27b08fa98c1e" className="team-detail-banner interaction2">
              <div className="w-layout-grid team-detail-grid">
                <div className="team-detail-block">
                  <div className="subheading-medium">Number of Squads</div>
                  <h3>5</h3>
                </div>
                <div className="team-detail-block">
                  <div className="subheading-medium">Number of matches played</div>
                  <h3>12</h3>
                </div>
                <div className="team-detail-block">
                  <div className="subheading-medium">Number of members</div>
                  <h3>87</h3>
                </div>
                <div className="team-detail-block">
                  <div className="subheading-medium">wın ratıo</div>
                  <h3>73.5%</h3>
                </div>
              </div>
            </div>
            <div className="overview-wrapper">
              <div data-w-id="24d2a5ba-8de8-ad42-53e1-655f69d782e0" className="w-layout-grid team-grid interaction3">
                <div className="overview-image-wrapper"><img src="images/Team-Sory-Image.png" loading="lazy" alt="" className="image-cover"/><img src="/images/Logo_done.svg" loading="lazy" height="72" alt="" className="image-accent"/></div>
                <div>
                  <div className="w-layout-grid team-content-grid">
                    <div>
                      <h4>OUR MISSION</h4>
                      <p>We aim to become the epitomy of teamwork by having squadmates as well as complete squads work together as a well oiled machine to overcome any opponent.</p>
                    </div>
                    <div>
                      <h4>OUR TEAM</h4>
                      <p>Our members are from all over the world, of all ages, races and beliefs. We abide by a set of simple rules to keep our community healthy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <DiscordCallToActionSection></DiscordCallToActionSection>
        <div className="team-section">
          <div className="container-large">
            <div data-w-id="ecfb4d19-7695-f63a-613a-44bd0b86cb46" className="title-wrap-centre interaction1">
              <h1 className="h1-title">MEET OUR <span className="brand-span">awesome </span>members</h1>
              <div className="accent-line-small"></div>
            </div>
            <TeamGrid id="49517a3a-a68a-463e-3979-4c8c3194c7b8" members={members}></TeamGrid>
          </div>
        </div>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}