import Head from 'next/head';
import { useCallback, useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import { UserContext } from '../lib/context';
import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';

export default function LoginPage() {
    const siteTitle = 'DonD - Admin Login';
    const { user, username } = useContext(UserContext);

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <Layout>
        <div className="utility-page-wrap">
            <div className="utility-page-content w-password-page w-form">
            <div className="utility-page-form w-password-page moveUp2">
                <h2> {user ? 
                    !username ? 'Provide username' : 'Admin'
                    :
                    'Admin'
                }</h2>
                <div className="accent-line-small line-space">
                    
                </div>
                {user ? 
                    !username ? <UsernameForm /> : <SignOutButton />
                    :
                    <SignInButton />
                }
                {/* <input type="password" autoFocus={true} id="pass" name="pass" placeholder="Enter your password" maxLength={256} className="password-field w-password-page w-input">
                 */}
                <div className="w-password-page w-form-fail">
                    <div>Incorrect password. Please try again.</div>
                </div>
            </div>
            </div>
        </div>
      </Layout>
    </>
  )
}

function SignInButton() {
    const router = useRouter();
    const signInWithGoogle = async() => {
        await auth.signInWithPopup(googleAuthProvider);
        router.push('/admin');
    }
    return (
        <button data-wait="Please wait..." className="button full-width w-password-page w-button" onClick={signInWithGoogle}>
            Sign in with google
        </button>
    );
}

function SignOutButton() {
    return (
        <button data-wait="Please wait..." className="button full-width w-password-page w-button" onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function UsernameForm() {
    const [formValue, setFormValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, username } = useContext(UserContext);

    useEffect(() => {
        checkUsername(formValue);
    }, [formValue]);


    const onChange = (e) => {
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._-]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        if (val.length < 3) {
            setFormValue(val);
            setLoading(false);
            setIsValid(false);
        }

        if (re.test(val)) {
            setFormValue(val);
            setLoading(true);
            setIsValid(false);
        }
    }

    const checkUsername = useCallback(
            debounce(async (username) => {
            if (username.length >= 3) {
                const ref = firestore.doc(`usernames/${username}`);
                const doc = await ref.get();
                setIsValid(doc && doc.data()?.uid?.length === 0);
                setLoading(false);
            }
        }, 500),
        []
    );

    const onSubmit = async (e) => {
        e.preventDefault();

        const userDoc = firestore.doc(`users/${user.uid}`);
        const usernameDoc = firestore.doc(`usernames/${formValue}`);

        const batch = firestore.batch();
        batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName});
        batch.set(usernameDoc, { uid: user.uid });

        await batch.commit();
    }


    return (
       !username && (
           <div className="select-username">
               <form onSubmit={onSubmit}>
                   <input name="username" placeholder="username" value={formValue} onChange={onChange} className="w-input" />
                   <UsernameMessage username={formValue} isValid={isValid} loading={loading}/>
                   <button type="submit" className="button full-width w-button" disabled={!isValid}>
                       Confirm username
                   </button>
               </form>
           </div>
       )
    );
}

function UsernameMessage({ username, isValid, loading}) {
    if (loading){
        return <p className="feedback">Checking...</p>
    } else if (isValid) {
        return <p className="feedback text-success">{username} is available.</p>
    } else if (username && !isValid) {
        return <p className="feedback text-error">{username} is not available.</p>
    } else {
        return <p></p>
    }
}