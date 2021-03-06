import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import DiscordCallToActionSection from '../components/DiscordCallToActionSection';
import FaqSection from '../components/FaqSection';
import InstagramSection from '../components/InstagramSection';
import Layout from '../components/Layout';
import { firestore, serverTimestamp } from '../lib/firebase';
import { getQuestions } from '../lib/util';


/**
 * This renders the 404 by using some static html
 * @returns NotFound component
 */
export default function NotFoundPage() {
  const siteTitle = 'DonD - Not found';
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout>
      <div className="about-header">
          <div className="container">
            <div className="hero-content-wrapper">
              <h5 className="h5">You must be part of our recon squads?</h5>
              <h1 className="hero-title"><br/><span className="brand-span">404 </span>| Not found</h1>
            </div>
          </div>
        </div>
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
                  <input type="text" className="input-field w-input" {...register('name', {
                      maxLength: { value: 256, message: 'name is too long' },
                      minLength: { value: 3, message: 'name is too short' },
                      required: { value: true, message: 'name is required'},
                    })} name="name" data-name="name" placeholder="Name" id="name-2" required={true}/>
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                </div>
                <div className="contact-cell">
                  <input type="text" className="input-field w-input" {...register('email', {
                      maxLength: { value: 256, message: 'email is too long' },
                      minLength: { value: 4, message: 'email is too short' },
                      required: { value: true, message: 'email is required'},
                      pattern: { value: /^\S+@\S+$/i, message: 'Please provide a correct email format'}
                    })} name="email" data-name="email" placeholder="Email" id="email" required={true}/>
                    {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div id="w-node-b13c8039-86e3-982c-f378-9f0faa97328c-7f6bfd35" className="contact-cell">
                  <textarea placeholder="Enter your message" {...register('message', {
                      maxLength: { value: 20000, message: 'message is too long' },
                      minLength: { value: 10, message: 'message is too short' },
                      required: { value: true, message: 'message is required'}
                    })} id="Message" name="message" data-name="Message" className="input-field-large w-input">

                  </textarea>
                  {errors.message && <p className="text-danger">{errors.message.message}</p>}
                </div>
              </div>
              <div className="button-wrapper-contact"><input type="submit" value="Send Message" data-wait="Please wait..." className="button w-button"/></div>
            </form>
          )
        }
        {
          submitted && success && (
            <div className="success-message">
              <div className="body-large">Thank you! Your message has been received!</div>
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