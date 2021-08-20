import Layout from '../../components/Layout';
import Message from '../../components/Message';
import {useCollection} from 'react-firebase-hooks/firestore';
import Head from 'next/head';
import { useState } from 'react';
import { articleToJSON, firestore, messageToJSON, serverTimestamp } from '../../lib/firebase';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const MESSAGES_LIMIT=15;

/**
 * This component is responsible for RD operations for messages. It allowes you to read, reply and delete messages.
 * @returns MessagesAdminPage 
 */
export default function MessagesAdminPage() {
  // use the useCollection hook from the react-firebase-hooks library to create a reference to the articles collection and listen for updates
  const [messagesRef] = useCollection(
    firestore.collection('messages')
    .orderBy('createdAt', 'asc')
    .limit(MESSAGES_LIMIT),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const siteTitle = 'DonD | MESSAGES';

  // Render either the overview or the edit mode based on the editMode state.
  return (
    <>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <Layout>
        <MessagesOverview messagesRef={messagesRef} />
    </Layout>
  </>
  )
}

/**
 * 
 * @param articlesRef a reference to the articles firestore object 
 * @param setEditMode a callback function to change the edit mode
 * @returns MessagesOverview, a list of all messages wich are provided
 */
function MessagesOverview({messagesRef }) {
  // Whenever the delete button on the Message component is clicked, it will end up being handled here. This deletes the specified message
  async function deleteMessage(messageId) {
    const messageRef = firestore.collection('messages').doc(messageId);
    await messageRef.delete();
  }

  return (
    <div className="utility-page-wrap">
        <div className="utility-page-content w-form">
        <div className="utility-page-form moveUp2">
            <h2 className="options-wrapper">
              Messages
            </h2>
            <div className="accent-line-small line-space">
            </div>
            <div className="messages-list">
                { messagesRef && messagesRef.docs?.map(messageToJSON).map(message => <Message message={message} key={message.createdAt} deleteMessage={deleteMessage}></Message> )}
                { messagesRef && messagesRef.docs?.length === 0 && (
                    <h5>There are no new messages!</h5>
                )}
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