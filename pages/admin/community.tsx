import Layout from '../../components/Layout';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { firestore } from '../../lib/firebase';
import { useForm } from 'react-hook-form';

/**
 * This component is responsible for CRUD operations for community overview. It allowes you to update community settings
 * @returns CommunityAdminPage 
 */
export default function CommunityAdminPage() {

  const [overviewRef] = useState(firestore.collection('community').doc('overview'));
  // use the useDocumentData hook from the react-firebase-hooks library to create a reference to the overview document and listen for updates
  const [realtimeOverview] = useDocumentData(overviewRef);

  const siteTitle = 'DonD | COMMUNITY';

  // Render either the overview or the edit mode based on the editMode state.
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
            <div className="utility-page-wrap">
            <div className="utility-page-content w-form">
                <CommunityOverview realtimeOverview={realtimeOverview}  />
                <EditCommunityOverview communityRef={overviewRef} defaultValues={realtimeOverview}></EditCommunityOverview>
            </div>
        </div>
    </Layout>
  </>
  )
}

/**
 * 
 * @param realtimeOverview a realtime reference to the overview data
 * @returns CommunityOverview, an overview of the community settings
 */
function CommunityOverview({ realtimeOverview }) {
  return (
    <div className="utility-page-form moveUp2">
        <h2 className="options-wrapper">
        Community Overview
        </h2>
        <div className="accent-line-small line-space">
        </div>
        <div className="team-detail-banner">
            <div className="w-layout-grid team-detail-grid">
                <div className="team-detail-block">
                    <div className="subheading-medium">Number of Squads</div>
                    <h3>{realtimeOverview?.numberofsquads}</h3>
                </div>
                <div className="team-detail-block">
                    <div className="subheading-medium">Number of matches played</div>
                    <h3>{realtimeOverview?.matchesplayed}</h3>
                </div>
                <div className="team-detail-block">
                    <div className="subheading-medium">Number of members</div>
                    <h3>{realtimeOverview?.numberofmembers}</h3>
                </div>
                <div className="team-detail-block">
                    <div className="subheading-medium"># Friends of DonD</div>
                    <h3>{realtimeOverview?.numberoffriends}</h3>
                </div>
            </div>
        </div>
    </div>
  );
}

/**
 * This is the component responsible for updating community overview settings.
 * @returns EditCommunityOverview component
 */
function EditCommunityOverview({defaultValues, communityRef}) {

  // use the react-hook-form library to do client side validation
  const { register, handleSubmit, reset, formState } = useForm({ defaultValues, mode: 'onChange' });
  const { errors } = formState;

  // some helper state which is not used in the render method for now.
  const [ submitted, setSubmitted] = useState(false);
  const [ busy, setBusy] = useState(false)
  const [ success, setSuccess] = useState(false);

  useEffect(()=> {
    reset(defaultValues);
  }, [defaultValues, reset])

  // When the client-side validations have succeeded, this method will update the overview document in firestore
  const updateOverview = async ({ numberofsquads, matchesplayed, numberofmembers, numberoffriends }) => {
    setSubmitted(true);
    setBusy(true);
    try {
      await communityRef.update({
        numberofsquads,
        matchesplayed,
        numberofmembers,
        numberoffriends
      });
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
    <div className="utility-page-form moveUp2">
        <h2 className="options-wrapper">
        Edit community overview
        </h2>
        <div className="accent-line-small line-space"></div>
        <form id="update-community-form" className="crud-form align-left" name="update-community-form" data-name="Update community form" onSubmit={handleSubmit(updateOverview)} action='#'>
        <div className="w-layout-grid contact-grid">
            <div className="contact-cell stretch-cell">
            <span className="input-label">Number of squads: </span>
            <input type="number" className="input-field w-input" {...register('numberofsquads', {
                min: { value: 0, message: 'number should be positive' },
                required: { value: true, message: 'number of squads is required'},
                })} name="numberofsquads" data-name="numberofsquads" placeholder="Number of squads" id="numberofsquads-2"/>
                {errors.numberofsquads && <p className="text-danger">{errors.numberofsquads.message}</p>}
            </div>
            <div className="contact-cell stretch-cell">
            <span className="input-label">Number of matches played: </span>
            <input type="number" className="input-field w-input" {...register('matchesplayed', {
                min: { value: 0, message: 'number should be positive' },
                required: { value: true, message: 'number of matches is required'},
                })} name="matchesplayed" data-name="matchesplayed" placeholder="Number of matches played" id="matchesplayed-2"/>
                {errors.matchesplayed && <p className="text-danger">{errors.matchesplayed.message}</p>}
            </div>
            <div className="contact-cell stretch-cell">
            <span className="input-label">Number of members: </span>
            <input type="number" className="input-field w-input" {...register('numberofmembers', {
                min: { value: 0, message: 'number should be positive' },
                required: { value: true, message: 'number of members is required'},
                })} name="numberofmembers" data-name="numberofmembers" placeholder="Number of members " id="numberofmembers-2"/>
                {errors.numberofmembers && <p className="text-danger">{errors.numberofmembers.message}</p>}
            </div>
            <div className="contact-cell stretch-cell">
            <span className="input-label">Number of friends: </span>
            <input type="number" className="input-field w-input" {...register('numberoffriends', {
                min: { value: 0, message: 'number should be positive' },
                required: { value: true, message: 'number of friends is required'},
                })} name="numberoffriends" data-name="numberoffriends" placeholder="Number of friends " id="numberoffriends-2"/>
                {errors.numberoffriends && <p className="text-danger">{errors.numberoffriends.message}</p>}
            </div>
        </div>
        <div className="button-wrapper-contact"><input type="submit" value="Update community data" data-wait="Please wait..." className="button w-button"/></div>
        </form>       
    </div>
  );
}
