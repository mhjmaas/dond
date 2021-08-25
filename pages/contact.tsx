import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DiscordCallToActionSection from '../components/DiscordCallToActionSection';
import FaqSection from '../components/FaqSection';
import InstagramSection from '../components/InstagramSection';
import Layout from '../components/Layout';
import { firestore, serverTimestamp } from '../lib/firebase';
import { getQuestions } from '../lib/util';

const QUESTION_LIMIT = 9;

/**
 * For this page, static props will be invalidated every 15 minutes, after which a new set of questions will be retrieved from the back end.
 * @returns props containing questions, to be used while staticly rendering the page
 */
export async function getStaticProps() {
  const questions = await getQuestions(QUESTION_LIMIT);

  return {
    props: { questions },
    revalidate: 900
  };
}

/**
 * This renders the ContactPage by using some static html as well as reusable sections and components.
 * @param props Containing the questions to be used in the FAQ component.
 * @returns ContactPage component
 */
export default function ContactPage(props) {
  const [questions] = useState(props.questions);

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
              <h5 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe46" className="h5-title interaction2">DOND community</h5>
              <h1 data-w-id="ad798842-7d50-3354-ae9d-c6c363cdfe48" className="hero-title interaction3">CONTACT US</h1>
            </div>
            <div data-w-id="8c177336-629d-4e8e-d576-9d6b26c05df1" className="contact-banner interaction4">
              <div className="w-layout-grid contact-detail-grid">
                <a href="mailto:info@dayofnodefeat.eu?subject=Hello" className="contact-detail-wrapper w-inline-block"><img src="/images/Mail-Icon.svg" loading="lazy" alt="" className="contact-icon"/>
                  <div className="body-large" data-cy="contact-email">info@dayofnodefeat.eu</div>
                </a>
                <div className="contact-detail-wrapper"><img src="/images/Map-Icon.svg" loading="lazy" width="24" alt="" className="contact-icon"/>
                  <div className="body-large" data-cy="contact-location">Global</div>
                </div>
                <a href="https://discord.io/dond" className="contact-detail-wrapper w-inline-block" data-cy="join-discord-link"><img src="/images/Phone-Icon.svg" loading="lazy" alt="" className="contact-icon"/>
                  <div className="body-large" data-cy="contact-discord">discord.io/dond</div>
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
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
        <FaqSection questions={questions}></FaqSection>
        <DiscordCallToActionSection></DiscordCallToActionSection>
        <InstagramSection></InstagramSection>
      </Layout>
    </>
  )
}

function ContactForm() {
  // use the react-hook-form library to do client side validation
  const { register, handleSubmit, reset, formState } = useForm({ mode: 'onChange' });
  const { errors } = formState;

  // Helper function for showing itermediate stages while submitting
  const [submitted, setSubmitted] = useState(false);
  const [busy, setBusy] = useState(false)
  const [success, setSuccess] = useState(false);

   // When the client-side validations have succeeded, this method will insert the message in firestore
  const createMessage = async ({ name, email, message }) => {
    setSubmitted(true);
    setBusy(true);
    try {
      await firestore.collection('messages').add({
          name,
          email,
          message,
          createdAt: serverTimestamp(),
      });
      reset({ name, email, message });
      setSubmitted(true);
      setSuccess(true);
    } catch( exeption) {
      setSubmitted(true);
      setSuccess(false);
    }
    setBusy(false);
  };

  // Tie everything together in a form. You will notice client side form validation here
  return (
      <div className="contact-form w-form">
        {
          !submitted && (
            <form id="email-form" name="email-form" data-name="Email Form" onSubmit={handleSubmit(createMessage)} action='#'>
              <div className="w-layout-grid contact-grid">
                <div className="contact-cell">
                  <input type="text" data-cy="contact-name-input" className="input-field w-input" {...register('name', {
                      maxLength: { value: 256, message: 'name is too long' },
                      minLength: { value: 3, message: 'name is too short' },
                      required: { value: true, message: 'name is required'},
                    })} name="name" data-name="name" placeholder="Name" id="name-2" required={true}/>
                    {errors.name && <p className="text-danger" data-cy="name-error">{errors.name.message}</p>}
                </div>
                <div className="contact-cell">
                  <input type="text" data-cy="contact-email-input" className="input-field w-input" {...register('email', {
                      maxLength: { value: 256, message: 'email is too long' },
                      minLength: { value: 4, message: 'email is too short' },
                      required: { value: true, message: 'email is required'},
                      pattern: { value: /^\S+@\S+$/i, message: 'Please provide a correct email format'}
                    })} name="email" data-name="email" placeholder="Email" id="email" required={true}/>
                    {errors.email && <p className="text-danger" data-cy="email-error">{errors.email.message}</p>}
                </div>
                <div id="w-node-b13c8039-86e3-982c-f378-9f0faa97328c-7f6bfd35" className="contact-cell">
                  <textarea data-cy="contact-message-input" placeholder="Enter your message" {...register('message', {
                      maxLength: { value: 20000, message: 'message is too long' },
                      minLength: { value: 10, message: 'message is too short' },
                      required: { value: true, message: 'message is required'}
                    })} id="Message" name="message" data-name="Message" className="input-field-large w-input">

                  </textarea>
                  {errors.message && <p className="text-danger" data-cy="message-error">{errors.message.message}</p>}
                </div>
              </div>
              <div className="button-wrapper-contact"><input type="submit" value="Send Message" data-cy="contact-submit-message" data-wait="Please wait..." className="button w-button"/></div>
            </form>
          )
        }
        {
          submitted && success && (
            <div className="success-message">
              <div className="body-large" data-cy="contact-success-message">Thank you! Your message has been received!</div>
            </div>
          )
        }
        {
          submitted && !success && !busy && (
            <div className="error-message">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          )
        }
      </div>
  );

}