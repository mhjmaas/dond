import Layout from '../../components/Layout';
import Match from '../../components/Match';
import {useCollection} from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useState } from 'react';
import { firestore, matchToJSON } from '../../lib/firebase';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker'
import Link from 'next/link';

const MATCH_LIMIT=15;

/**
 * This component is responsible for CRD operations for matches. It allowes you to create, read and delete matches.
 * @returns MatchAdminpage 
 */
export default function MatchAdminPage() {
  const [editMode, setEditMode] = useState(false); // determines we are in edit (acturally create, but in future probably update also) mode

  // use the useCollection hook from the react-firebase-hooks library to create a reference to the matches collection and listen for updates
  const [matchesRef] = useCollection(
    firestore.collection('matches'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const siteTitle = 'DonD | MATCHES';

  // Render either the overview or the edit mode based on the editMode state.
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
      {
        !editMode && (
          <MatchOverview matchesRef={matchesRef} setEditMode={setEditMode} />
        )
      }
      {
        editMode && (
          <EditMatch setEditMode={setEditMode}></EditMatch>
        )
      }
    </Layout>
  </>
  )
}

/**
 * 
 * @param matchesRef a reference to the matches firestore object 
 * @param setEditMode a callback function to change the edit mode
 * @returns MatchOverview, a list of all matches wich are provided
 */
function MatchOverview({matchesRef, setEditMode }) {
  // Whenever the delete button on the match component is clicked, it will end up being handled here. This deletes the specified match
  async function deleteMatch(matchId) {
    const questionRef = firestore.collection('matches').doc(matchId);
    await questionRef.delete();
  }

  return (
    <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
        <div className="utility-page-form moveUp2">
            <h2 className="options-wrapper">
              Matches
              <AddButton setEditMode={setEditMode}></AddButton>
            </h2>
            <div className="accent-line-small line-space">
            </div>
            <div className="w-layout-grid match-grid admin-mode">
            {
              matchesRef ? matchesRef.docs?.map(matchToJSON).map((match) => <Match match={match} key={match.matchdate} deleteMatch={deleteMatch}></Match>) : null
            }
          </div>
            <div className="accent-line-small line-space extra-spacer"></div>
            <Link href="/admin" prefetch={false}>
              <button className="button" >
                Back to menu
              </button>
            </Link>
        </div>
        </div>
    </div>
  );
}

/**
 * This is the component responsible for creating a new match. It will do both edit and create in future.
 * @param setEditMode a callback function to change the edit mode 
 * @returns EditMatch component
 */
function EditMatch({ setEditMode }) {
  const defaultValues = {
    matchdate: new Date(),
    hometeam: "",
    homelogo: "/images/Logo_done.svg",
    homestreamurl: "#",
    homeyoutubeurl: "#",
    homescore: 0,
    awayteam: "",
    awaylogo: "/images/Medium-Anubis.svg",
    awaystreamurl: "#",
    awayyoutubeurl: "#",
    awayscore: 0
  
  }

  // use the react-hook-form library to do client side validation
  const { control, register, handleSubmit, reset, formState } = useForm({ defaultValues, mode: 'onChange' });
  const { errors } = formState;

  // some helper state which is not used in the render method for now.
  const [ submitted, setSubmitted] = useState(false);
  const [ busy, setBusy] = useState(false)
  const [ success, setSuccess] = useState(false);

  // When the client-side validations have succeeded, this method will insert the question in firestore
  const createQuestion = async ({ question, answer, order }) => {
    setSubmitted(true);
    setBusy(true);
    try {
      await firestore.collection('questions').add({
          question,
          answer,
          order,
      });
      reset({ question, answer, order });
      setSubmitted(true);
      setSuccess(true);
    } catch( exeption) {
      setSubmitted(true);
      setSuccess(false);
    }
    setBusy(false);
    setEditMode(false); // return to the overview
    
  };
  
  // Tie everything together in a form. You will notice client side form validation here
  return (
       <div className="utility-page-wrap">
          <div className="utility-page-content w-form">
          <div className="utility-page-form moveUp2">
              <h2 className="options-wrapper">
                Add Question
              </h2>
              <div className="accent-line-small line-space"></div>
              <form id="add-question-form" className="crud-form" name="add-question-form" data-name="Add question Form" onSubmit={handleSubmit(createQuestion)} action='#'>
                <div className="w-layout-grid contact-grid">
                  <div className="contact-cell stretch-cell">
                  <Controller
                    control={control}
                    name='matchdate'
                    render={({ field }) => (
                      <DatePicker
                        placeholderText='Select date'
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}
                      />
                  )}
                  />
                  </div>
                  <div className="contact-cell stretch-cell">
                    <input type="text" className="input-field w-input" {...register('question', {
                        maxLength: { value: 40, message: 'question is too long' },
                        required: { value: true, message: 'question is required'},
                      })} name="question" data-name="question" placeholder="Question" id="question-2" required={true}/>
                      {errors.question && <p className="text-danger">{errors.question.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <input type="text" className="input-field w-input" {...register('answer', {
                        maxLength: { value: 190, message: 'answer is too long' },
                        minLength: { value: 10, message: 'answer is too short' },
                        required: { value: true, message: 'answer is required'}
                      })} name="answer" data-name="answer" placeholder="Answer" id="answer" required={true}/>
                      {errors.answer && <p className="text-danger">{errors.answer.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <input type="number" className="input-field w-input" {...register('order', {
                        max: { value: 15, message: 'Maximum is 15' },
                        min: { value: 1, message: 'Minimum is 1' },
                        required: { value: true, message: 'Order is required, it defines the order in which questions are shown'}
                      })} name="order" data-name="order" placeholder="Order" id="order" required={true}/>
                      {errors.order && <p className="text-danger">{errors.order.message}</p>}
                  </div>
                </div>
                <div className="button-wrapper-contact"><input type="submit" value="Create question" data-wait="Please wait..." className="button w-button"/></div>
              </form>
              <div className="accent-line-small line-space extra-spacer"></div>
              <button className="button" onClick={() => setEditMode(false)} >
                Back to overview
              </button>             
          </div>
        </div>
    </div>
  );
}

/**
 * Helper component for an add button
 * @param setEditMode this method should be called by the button to change the edit mode, and show the "add question" form.
 * @returns AddButton component
 */
function AddButton({setEditMode}) {
  return (
    <button className="button admin-add-button" onClick={() => setEditMode(true)} >
      <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
    </button>
  )
}

