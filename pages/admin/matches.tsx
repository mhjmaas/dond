import Layout from '../../components/Layout';
import Match from '../../components/Match';
import ImageUploader from '../../components/ImageUploader';
import {useCollection} from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useState } from 'react';
import { firestore, matchToJSON } from '../../lib/firebase';
import { Controller, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker'
import Link from 'next/link';

import "react-datepicker/dist/react-datepicker.css";

const MATCH_LIMIT=15;

/**
 * This component is responsible for CRD operations for matches. It allowes you to create, read and delete matches.
 * @returns MatchAdminpage 
 */
export default function MatchAdminPage() {
  const [editMode, setEditMode] = useState(false); // determines we are in edit (acturally create, but in future probably update also) mode

  // use the useCollection hook from the react-firebase-hooks library to create a reference to the matches collection and listen for updates
  const [matchesRef] = useCollection(
    firestore.collection('matches')
    .orderBy('matchdate', 'desc')
    .limit(MATCH_LIMIT),
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
    const matchRef = firestore.collection('matches').doc(matchId);
    await matchRef.delete();
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
            <Link href="/admin" prefetch={false} passHref>
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
    homescore: null,
    awayteam: "",
    awaylogo: "/images/Medium-Anubis.svg",
    awaystreamurl: "#",
    awayyoutubeurl: "#",
    awayscore: null
  
  }

  // use the react-hook-form library to do client side validation
  const { control, register, handleSubmit, reset, formState } = useForm({ defaultValues, mode: 'onChange' });
  const { errors } = formState;

  // some helper state which is not used in the render method for now.
  const [ submitted, setSubmitted] = useState(false);
  const [ busy, setBusy] = useState(false)
  const [ success, setSuccess] = useState(false);

  // When the client-side validations have succeeded, this method will insert the match in firestore
  const createMatch = async ({ matchdate, hometeam, homelogo, homestreamurl, homeyoutubeurl, homescore, awayteam, awaylogo, awaystreamurl, awayyoutubeurl, awayscore }) => {
    setSubmitted(true);
    setBusy(true);
    try {
      await firestore.collection('matches').add({
          matchdate,
          hometeam,
          homelogo,
          homestreamurl,
          homeyoutubeurl,
          homescore,
          awayteam,
          awaylogo,
          awaystreamurl,
          awayyoutubeurl,
          awayscore
      });
      reset({ matchdate, hometeam, homelogo, homestreamurl, homeyoutubeurl, homescore, awayteam, awaylogo, awaystreamurl, awayyoutubeurl, awayscore});
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
                Add Match
              </h2>
              <div className="accent-line-small line-space"></div>
              <form id="add-match-form" className="crud-form" name="add-match-form" data-name="Add match Form" onSubmit={handleSubmit(createMatch)} action='#'>
                <div className="w-layout-grid contact-grid align-left">
                  <div className="contact-cell stretch-cell">
                    <Controller
                      control={control}
                      name='matchdate'
                      render={({ field }) => (
                        <DatePicker
                          showTimeSelect
                          className="input-field w-input"
                          dateFormat="dd-MM-yyyy HH:mm"
                          placeholderText='Select match date'
                          onChange={(date) => field.onChange(date)}
                          selected={field.value}
                        />
                    )}
                    />
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Home team name:</span>
                    <input type="text" className="input-field w-input" {...register('hometeam', {
                        maxLength: { value: 30, message: 'team name is too long' },
                        required: { value: true, message: 'team name is required'},
                      })} name="hometeam" data-name="hometeam" placeholder="Home team name" id="hometeam-2" required={true}/>
                      {errors.hometeam && <p className="text-danger">{errors.hometeam.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Home team logo:</span>
                    <ImageUploader folder="matches"></ImageUploader>
                    <input type="text" className="input-field w-input" {...register('homelogo', {
                        maxLength: { value: 256, message: 'logo url is too long' },
                        required: { value: true, message: 'logo url is required'},
                      })} name="homelogo" data-name="homelogo" placeholder="Home logo url" id="homelogo-2" required={true}/>
                      {errors.homelogo && <p className="text-danger">{errors.homelogo.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Home team twitch url:</span>
                    <input type="text" className="input-field w-input" {...register('homestreamurl', {
                        maxLength: { value: 256, message: 'home twitch url is too long' },
                      })} name="homestreamurl" data-name="homestreamurl" placeholder="Home twitch stream url" id="homestreamurl-2" required={true}/>
                      {errors.homestreamurl && <p className="text-danger">{errors.homestreamurl.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Home team youtube url:</span>
                    <input type="text" className="input-field w-input" {...register('homeyoutubeurl', {
                        maxLength: { value: 256, message: 'home youtube url is too long' },
                      })} name="homeyoutubeurl" data-name="homeyoutubeurl" placeholder="Home youtube url" id="homeyoutubeurl-2" required={true}/>
                      {errors.homeyoutubeurl && <p className="text-danger">{errors.homeyoutubeurl.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Away team name:</span>
                    <input type="text" className="input-field w-input" {...register('awayteam', {
                        maxLength: { value: 30, message: 'team name is too long' },
                        required: { value: true, message: 'team name is required'},
                      })} name="awayteam" data-name="awayteam" placeholder="Away team name" id="awayteam-2" required={true}/>
                      {errors.awayteam && <p className="text-danger">{errors.awayteam.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Away team logo:</span>
                    <ImageUploader folder="matches"></ImageUploader>
                    <input type="text" className="input-field w-input" {...register('awaylogo', {
                        maxLength: { value: 256, message: 'logo url is too long' },
                        required: { value: true, message: 'logo url is required'},
                      })} name="awaylogo" data-name="awaylogo" placeholder="Away logo url" id="awaylogo-2" required={true}/>
                      {errors.awaylogo && <p className="text-danger">{errors.awaylogo.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Away team twitch url:</span>
                    <input type="text" className="input-field w-input" {...register('awaystreamurl', {
                        maxLength: { value: 256, message: 'away twitch url is too long' },
                      })} name="awaystreamurl" data-name="awaystreamurl" placeholder="Away twitch stream url" id="awaystreamurl-2" required={true}/>
                      {errors.awaystreamurl && <p className="text-danger">{errors.awaystreamurl.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Away team youtube url:</span>
                    <input type="text" className="input-field w-input" {...register('awayyoutubeurl', {
                        maxLength: { value: 256, message: 'away youtube url is too long' },
                      })} name="awayyoutubeurl" data-name="awayyoutubeurl" placeholder="Away youtube url" id="awayyoutubeurl-2" required={true}/>
                      {errors.awayyoutubeurl && <p className="text-danger">{errors.awayyoutubeurl.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Home score:</span>
                    <input type="number" className="input-field w-input" {...register('homescore', {
                        min: { value: 0, message: 'Must always be a positive score' },
                        required: { value: true, message: 'Score is required'}
                      })} name="homescore" data-name="homescore" placeholder="Home score" id="order" required={true}/>
                      {errors.homescore && <p className="text-danger">{errors.homescore.message}</p>}
                  </div>
                  <div className="contact-cell stretch-cell">
                    <span className="input-label">Away score:</span>
                    <input type="number" className="input-field w-input" {...register('awayscore', {
                        min: { value: 0, message: 'Must always be a positive score' }
                      })} name="awayscore" data-name="oawayscorerder" placeholder="Away score" id="order" required={true}/>
                      {errors.awayscore && <p className="text-danger">{errors.awayscore.message}</p>}
                  </div>
                </div>
                <div className="button-wrapper-contact"><input type="submit" value="Create match" data-wait="Please wait..." className="button w-button"/></div>
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
 * @param setEditMode this method should be called by the button to change the edit mode, and show the "add match" form.
 * @returns AddButton component
 */
function AddButton({setEditMode}) {
  return (
    <button className="button admin-add-button" onClick={() => setEditMode(true)} >
      <img src="/images/Plus-Template.svg" loading="lazy" alt="" className="faq-plus"/>
    </button>
  )
}

