import React, { useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react'
import { auth, firestore } from '../lib/firebase'


export default function InitWebflow() {
  useEffect(function mount() {
    const ids = {
      '/' : '61150792de460512ba6bfd2c',
      '/about' : '61150792de4605e6286bfd32',
      '/members' : '61150792de4605a54d6bfd3c',
      '/blog' : '61150792de4605d5f46bfd33',
      '/contact': '61150792de4605917f6bfd35'
    }
    setTimeout(() => {
      const element = document.getElementById('html-page');
      const pathname = (window as any).location.pathname
      const id = ids[pathname];
      element.setAttribute('data-wf-page', id);
      (window as any).Webflow && (window as any).Webflow.destroy();
      (window as any).Webflow && (window as any).Webflow.ready();
      (window as any).Webflow && (window as any).Webflow.require( 'ix2' ).init();
      document.dispatchEvent( new CustomEvent( 'IX2_PREVIEW_LOAD' ) );
      document.dispatchEvent(new Event('readystatechange'));
    },10);
    
  }, []);

  return null;
}

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;
    if (user) {
      const ref = firestore.collection('users').doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubscribe;
  }, [user]);

  return { user, username }
}