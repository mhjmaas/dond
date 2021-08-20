import Layout from '../../components/Layout';
import ImageUploader from '../../components/ImageUploader';
import {useCollection} from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useState } from 'react';
import { anyToJSON, firestore } from '../../lib/firebase';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import TeamGrid from '../../components/TeamGrid';

const MEMBER_LIMIT=15;

/**
 * This component is responsible for CRD operations for members. It allowes you to create, read and delete members.
 * @returns MembersAdminpage 
 */
export default function MembersAdminPage() {
  const [editMode, setEditMode] = useState(false); // determines we are in edit (acturally create, but in future probably update also) mode

  // use the useCollection hook from the react-firebase-hooks library to create a reference to the members collection and listen for updates
  const [membersRef] = useCollection(
    firestore.collection('members').limit(MEMBER_LIMIT),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const siteTitle = 'DonD | MEMBERS';

  // Render either the overview or the edit mode based on the editMode state.
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
      {
        !editMode && (
          <MembersOverview membersRef={membersRef} setEditMode={setEditMode} />
        )
      }
      {
        editMode && (
          <EditMember setEditMode={setEditMode}></EditMember>
        )
      }
    </Layout>
  </>
  )
}

/**
 * 
 * @param membersRef a reference to the members firestore object 
 * @param setEditMode a callback function to change the edit mode
 * @returns MembersOverview, a list of all members wich are provided
 */
function MembersOverview({membersRef, setEditMode }) {
  // Whenever the delete button on the Member component is clicked, it will end up being handled here. This deletes the specified member
  async function deleteMember(memberId) {
    const memberRef = firestore.collection('members').doc(memberId);
    await memberRef.delete();
  }

  return (
    <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
        <div className="utility-page-form moveUp2">
            <h2 className="options-wrapper">
              Members
              <AddButton setEditMode={setEditMode}></AddButton>
            </h2>
            <div className="accent-line-small line-space">
            </div>
            <TeamGrid id="e06bf118-8958-a441-e64b-c28d1ce38fd4" members={membersRef?.docs.map(anyToJSON)} deleteMember={deleteMember} />
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
 * This is the component responsible for creating a new member. It will do both edit and create in future.
 * It also features an image upload component to upload images to a firebase bucket. 
 * It will show you the url for the image, you will have to copy paste it into the right field for now.
 * @param setEditMode a callback function to change the edit mode 
 * @returns EditMember component
 */
function EditMember({ setEditMode }) {
  const defaultValues = {
    name: "",
    img: "",
    description: ""
  }

  // use the react-hook-form library to do client side validation
  const { register, handleSubmit, reset, formState } = useForm({ defaultValues, mode: 'onChange' });
  const { errors } = formState;

  // some helper state which is not used in the render method for now.
  const [ submitted, setSubmitted] = useState(false);
  const [ busy, setBusy] = useState(false)
  const [ success, setSuccess] = useState(false);

  // When the client-side validations have succeeded, this method will insert the member in firestore
  const createMember = async ({ name, img, description }) => {
    setSubmitted(true);
    setBusy(true);
    try {
      await firestore.collection('members').add({
          name,
          img,
          description
      });
      reset({ name, img, description });
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
                Add Member
              </h2>
              <div className="accent-line-small line-space"></div>
              <form id="add-member-form" className="crud-form align-left" name="add-member-form" data-name="Add member Form" onSubmit={handleSubmit(createMember)} action='#'>
                <div className="w-layout-grid contact-grid">
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Gamertag:</span>
                    <input type="text" className="input-field w-input" {...register('name', {
                        maxLength: { value: 75, message: 'name is too long' },
                        required: { value: true, message: 'name is required'}
                      })} name="name" data-name="name" placeholder="Name" id="name" required={true}/>
                      {errors.name && <p className="text-danger">{errors.name.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Gamer avatar:</span>
                    <ImageUploader folder="members"></ImageUploader>
                    <input type="text" className="input-field w-input" {...register('img', {
                        maxLength: { value: 256, message: 'img is too long' },
                        required: { value: true, message: 'img is required'},
                      })} name="img" data-name="img" placeholder="Image" id="img-2" required={true}/>
                      {errors.img && <p className="text-danger">{errors.img.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Short description:</span>
                    <input type="text" className="input-field w-input" {...register('description', {
                        maxLength: { value: 33, message: 'description is too long' },
                        minLength: { value: 5, message: 'description is too short' },
                        required: { value: true, message: 'description is required'}
                      })} name="description" data-name="description" placeholder="Description" id="description" required={true}/>
                      {errors.description && <p className="text-danger">{errors.description.message}</p>}
                  </div>
                </div>
                <div className="button-wrapper-contact"><input type="submit" value="Create member" data-wait="Please wait..." className="button w-button"/></div>
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
 * @param setEditMode this method should be called by the button to change the edit mode, and show the "add member" form.
 * @returns AddButton component
 */
function AddButton({setEditMode}) {
  return (
    <button className="button admin-add-button" onClick={() => setEditMode(true)} >
      <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
    </button>
  )
}

