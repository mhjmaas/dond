import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';

/**
 * This is a helper component to wrap around components that are only allowed to be shown when you are logged in.
 * @param props contains the children and an optional fallback component if you are not authenticated. By default it shows a big "you must be logged in" banner.
 * @returns AuthCheck component
 */
export default function AuthCheck(props) {
    const { username } = useContext(UserContext);

    return username ? 
            props.children :
            props.fallback || (
                <section className='unauthorized-section'>
                    <Link href="/login">
                        <a>You must be signed in</a>
                    </Link>
                </section>
            );
}