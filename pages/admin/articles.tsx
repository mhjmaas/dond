import Layout from '../../components/Layout';
import Articles from '../../components/Articles';
import ImageUploader from '../../components/ImageUploader';
import {useCollection} from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useState } from 'react';
import { articleToJSON, firestore, serverTimestamp } from '../../lib/firebase';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const ARTICLE_LIMIT=15;

/**
 * This component is responsible for CRD operations for articles. It allowes you to create, read and delete articles.
 * @returns ArticlesAdminpage 
 */
export default function ArticlesAdminPage() {
  const [editMode, setEditMode] = useState(false); // determines we are in edit (acturally create, but in future probably update also) mode

  // use the useCollection hook from the react-firebase-hooks library to create a reference to the articles collection and listen for updates
  const [articlesRef] = useCollection(
    firestore.collection('articles'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const siteTitle = 'DonD | ARTICLES';

  // Render either the overview or the edit mode based on the editMode state.
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
      {
        !editMode && (
          <ArticlesOverview articlesRef={articlesRef} setEditMode={setEditMode} />
        )
      }
      {
        editMode && (
          <EditArticle setEditMode={setEditMode}></EditArticle>
        )
      }
    </Layout>
  </>
  )
}

/**
 * 
 * @param articlesRef a reference to the articles firestore object 
 * @param setEditMode a callback function to change the edit mode
 * @returns ArticlesOverview, a list of all articles wich are provided
 */
function ArticlesOverview({articlesRef, setEditMode }) {
  // Whenever the delete button on the Article component is clicked, it will end up being handled here. This deletes the specified article
  async function deleteArticle(articleId) {
    const articleRef = firestore.collection('articles').doc(articleId);
    await articleRef.delete();
  }

  return (
    <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
        <div className="utility-page-form moveUp2">
            <h2 className="options-wrapper">
              Articles
              <AddButton setEditMode={setEditMode}></AddButton>
            </h2>
            <div className="accent-line-small line-space">
            </div>
            <Articles articles={articlesRef?.docs.map(articleToJSON)} deleteArticle={deleteArticle} />
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
 * This is the component responsible for creating a new article. It will do both edit and create in future.
 * It also features an image upload component to upload images to a firebase bucket. 
 * It will show you the url for the image, you will have to copy paste it into the right field for now.
 * @param setEditMode a callback function to change the edit mode 
 * @returns EditArticle component
 */
function EditArticle({ setEditMode }) {
  const defaultValues = {
    img: "",
    caption: "",
    tag: "NEWS"
  }

  // use the react-hook-form library to do client side validation
  const { register, handleSubmit, reset, formState } = useForm({ defaultValues, mode: 'onChange' });
  const { errors } = formState;

  // some helper state which is not used in the render method for now.
  const [ submitted, setSubmitted] = useState(false);
  const [ busy, setBusy] = useState(false)
  const [ success, setSuccess] = useState(false);

  // When the client-side validations have succeeded, this method will insert the article in firestore
  const createArticle = async ({ caption, img, tag }) => {
    setSubmitted(true);
    setBusy(true);
    try {
      await firestore.collection('articles').add({
          img,
          caption,
          tag,
          createdAt: serverTimestamp(),
      });
      reset({ caption, img, tag });
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
                Add Article
              </h2>
              <div className="accent-line-small line-space"></div>
              <form id="add-article-form" className="crud-form" name="add-article-form" data-name="Add article Form" onSubmit={handleSubmit(createArticle)} action='#'>
                <div className="w-layout-grid contact-grid">
                  <div className="contact-cell stretch-cell">
                  <ImageUploader folder="articles"></ImageUploader>
                    <input type="text" className="input-field w-input" {...register('img', {
                        maxLength: { value: 256, message: 'img is too long' },
                        required: { value: true, message: 'img is required'},
                      })} name="img" data-name="img" placeholder="Image" id="img-2" required={true}/>
                      {errors.img && <p className="text-danger">{errors.img.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <input type="text" className="input-field w-input" {...register('caption', {
                        maxLength: { value: 75, message: 'caption is too long' },
                        minLength: { value: 10, message: 'caption is too short' },
                        required: { value: true, message: 'caption is required'}
                      })} name="caption" data-name="caption" placeholder="Caption" id="caption" required={true}/>
                      {errors.caption && <p className="text-danger">{errors.caption.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <input type="text" className="input-field w-input" {...register('tag', {
                        maxLength: { value: 10, message: 'TAG is too long' },
                        minLength: { value: 2, message: 'TAG is too short' },
                        required: { value: true, message: 'TAG is required'}
                      })} name="tag" data-name="tag" placeholder="Tag" id="tag" required={true}/>
                      {errors.tag && <p className="text-danger">{errors.tag.message}</p>}
                  </div>
                </div>
                <div className="button-wrapper-contact"><input type="submit" value="Create article" data-wait="Please wait..." className="button w-button"/></div>
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
 * @param setEditMode this method should be called by the button to change the edit mode, and show the "add article" form.
 * @returns AddButton component
 */
function AddButton({setEditMode}) {
  return (
    <button className="button admin-add-button" onClick={() => setEditMode(true)} >
      <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
    </button>
  )
}

