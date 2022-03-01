const SUPABASE_URL = 'https://qdniuczcwtzdmgdwzpzk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbml1Y3pjd3R6ZG1nZHd6cHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYwNjk3MDcsImV4cCI6MTk2MTY0NTcwN30.Ej2Isq0jXny54c3_1nKx6Zf0VVXdbuL68BoKgvjXjvE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


//hope this works for the timer
export async function updateEndTimer(id) {
    const response = await client.from('break-stats').update({ end_time: new Date() }).match({ id });
    return checkError(response);
}

export async function createBreak() {
    const response = await client.from('break-stats').insert({}).single();
    return checkError(response);
}

//we need to fetch params by id at some point

//--------login-------
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./break-tracker');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
