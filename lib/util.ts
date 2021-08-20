import { firestore, articleToJSON, matchToJSON } from "./firebase";

export async function getArticles(limit: number) {
    const articlesQuery = firestore
    .collection('articles')
    .orderBy('createdAt', 'desc')
    .limit(limit);

    return (await articlesQuery.get()).docs.map(articleToJSON);
}

export async function getMembers(limit: number) {
    const membersQuery = firestore
    .collection('members')
    .limit(limit);

    return (await membersQuery.get()).docs.map(doc =>  doc.data());
}

/**
 * 
 * @param limit the amount of matches to return
 * @returns JSON list of matches
 */
export async function getMatches(limit: number) {
    const matchesQuery = firestore
    .collection('matches')
    .orderBy('matchdate', 'desc')
    .limit(limit);

    return (await matchesQuery.get()).docs.map(matchToJSON);
}

/**
 * @param limit the amount of questions to return
 * @returns JSON list of questions
 */
export async function getQuestions(limit: number) {
    const questionsQuery = firestore
    .collection('questions')
    .orderBy('order', 'asc')
    .limit(limit);

    return (await questionsQuery.get()).docs.map(doc => doc.data());
}

/**
 * @returns Community overview data
 */
export async function getCommunityOverview() {
    const communityRef = firestore.collection('community').doc('overview');
    return (await communityRef.get()).data()
}