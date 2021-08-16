import Head from 'next/head';
import DiscordCallToActionSection from '../components/DiscordCallToActionSection';
import FaqSection from '../components/FaqSection';
import InstagramSection from '../components/InstagramSection';
import Layout from '../components/Layout';

export default function ContactPage({ }) {
  const siteTitle = 'DonD - Contact';
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
        <div className="contact-header">
          <div className="container">
            <div className="hero-content-wrapper">
              <h5 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe46" className="h5-title interaction2">anubıs e-sport team</h5>
              <h1 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe48" className="hero-title interaction3">CONTACT US</h1>
            </div>
            <div data-w-id="8c177336-629d-4e8e-d576-9d6b26c05df1" className="contact-banner interaction4">
              <div className="w-layout-grid contact-detail-grid">
                <a href="mailto:hello@anubisteam.com?subject=Hello" className="contact-detail-wrapper w-inline-block"><img src="images/Mail-Icon.svg" loading="lazy" alt="" className="contact-icon"/>
                  <div className="body-large">info@dayofnodefeat.com</div>
                </a>
                <div className="contact-detail-wrapper"><img src="images/Map-Icon.svg" loading="lazy" width="24" alt="" className="contact-icon"/>
                  <div className="body-large">Global</div>
                </div>
                <a href="https://discord.io/dond" className="contact-detail-wrapper w-inline-block"><img src="images/Phone-Icon.svg" loading="lazy" alt="" className="contact-icon"/>
                  <div className="body-large">discord.io/dond</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <div data-w-id="4c533d48-8177-3134-4fab-9f85a7294717" className="container interaction5">
            <div className="title-wrap-centre">
              <div className="accent-line-small line-space"></div>
              <h1 className="h1-title">LET’S GET <span className="brand-span">TOUCH!</span></h1>
              <p className="body-large">Want to hear some more? Feel free to contact us using this form. We will contact you asap</p>
            </div>
            <div className="contact-block">
              <div className="contact-form w-form">
                <form id="email-form" name="email-form" data-name="Email Form" onSubmit={() => console.log('thank you')} action='#'>
                  <div className="w-layout-grid contact-grid">
                    <div className="contact-cell"><input type="text" className="input-field w-input" maxLength={256} name="name" data-name="name" placeholder="Name" id="name-2" required={true}/></div>
                    <div className="contact-cell"><input type="text" className="input-field w-input" maxLength={256} name="email" data-name="email" placeholder="Email" id="email" required={true}/></div>
                    <div id="w-node-b13c8039-86e3-982c-f378-9f0faa97328c-7f6bfd35" className="contact-cell"><textarea placeholder="Enter your message" maxLength={5000} id="Message" name="Message" data-name="Message" className="input-field-large w-input"></textarea></div>
                  </div>
                  <div className="button-wrapper-contact"><input type="submit" value="Send Message" data-wait="Please wait..." className="button w-button"/></div>
                </form>
                <div className="success-message w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FaqSection></FaqSection>
        <DiscordCallToActionSection></DiscordCallToActionSection>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}