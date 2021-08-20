import Layout from '../../components/Layout';
import Question from '../../components/Question';
import {useCollection} from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useState } from 'react';
import { articleToJSON, firestore, anyToJSON, serverTimestamp } from '../../lib/firebase';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const FAQ_LIMIT=15;

/**
 * This component is responsible for CRD operations for faq questions. It allowes you to create, read and delete questions.
 * @returns FAQAdminpage 
 */
export default function FAQAdminPage() {
  const [editMode, setEditMode] = useState(false); // determines we are in edit (acturally create, but in future probably update also) mode

  // use the useCollection hook from the react-firebase-hooks library to create a reference to the articles collection and listen for updates
  const [questionsRef] = useCollection(
    firestore.collection('questions')
    .orderBy('order', 'desc')
    .limit(FAQ_LIMIT),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const siteTitle = 'DonD | FAQ';

  // Render either the overview or the edit mode based on the editMode state.
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
      {
        !editMode && (
          <FAQOverview questionsRef={questionsRef} setEditMode={setEditMode} />
        )
      }
      {
        editMode && (
          <EditFAQ setEditMode={setEditMode}></EditFAQ>
        )
      }
    </Layout>
  </>
  )
}

/**
 * 
 * @param questionsRef a reference to the questions firestore object 
 * @param setEditMode a callback function to change the edit mode
 * @returns FAQOverview, a list of all questions wich are provided
 */
function FAQOverview({questionsRef, setEditMode }) {
  // Whenever the delete button on the faq component is clicked, it will end up being handled here. This deletes the specified question
  async function deleteQuestion(questionId) {
    const questionRef = firestore.collection('questions').doc(questionId);
    await questionRef.delete();
  }

  return (
    <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
        <div className="utility-page-form moveUp2">
            <h2 className="options-wrapper">
              FAQ
              <AddButton setEditMode={setEditMode}></AddButton>
            </h2>
            <div className="accent-line-small line-space">
            </div>
            <div data-w-id="6e55dcaa-8b2c-3c8b-c222-4f0ac739d077" className="faq-wrapper">
                <div className="w-layout-grid faq-grid">
                    { questionsRef ? questionsRef.docs?.map(anyToJSON).map((question) => <Question question={question} key={question.order} deleteQuestion={deleteQuestion}></Question>) : null }
                </div>
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
 * This is the component responsible for creating a new question. It will do both edit and create in future.
 * @param setEditMode a callback function to change the edit mode 
 * @returns EditFAQ component
 */
function EditFAQ({ setEditMode }) {
  const defaultValues = {
    question: "",
    answer: "",
    order: 1
  }

  // use the react-hook-form library to do client side validation
  const { register, handleSubmit, reset, formState } = useForm({ defaultValues, mode: 'onChange' });
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

