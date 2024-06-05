'use client';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../../../../firebase';


export const AuthContext = createContext([]);

export function AuthContextProvider(props) {

  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('---user: ', user);
        const { displayName, photoURL, uid, email } = user;

        if (!displayName || !photoURL) {
          console.log('Missing info from google account');
        }

        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
          email,
        })
      }
    })
    // declara event listener e seta método pra finalizar a função inicializada quando 
    // o app sair de tela
    return () => {
      unsubscribe();
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    if (result.user) {
      const { displayName, photoURL, uid, email, accessToken } = result.user;

      if (!displayName || !photoURL) {
        console.log('Missing info from google account');
      }
      localStorage.setItem('@matemania:token', accessToken);
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
        email: email,
      });
      localStorage.setItem('@matemania:user', JSON.stringify(user));
      router.push('/');
    }
  }

  async function signOut() {
    await auth.signOut();
  }

  async function signInWithEmail(email, password) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem('@matemania:token', user.accessToken);
        setUser({
          id: user.uid,
          name: user.displayName,
          avatar: user.photoURL,
          email: user.email,
        })
        localStorage.setItem('@matemania:user', JSON.stringify(user));
        router.push('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  async function createAccountWithEmail(email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        signInWithEmail(email, password);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  const updateAccountInfo = async (displayName, photoURL) => (
    updateProfile(auth.currentUser, { displayName, photoURL }).then(() => ({ message: "successfull" })).catch(e => ({ e })));

  const state = useMemo(() => ({ user }), [user]);
  const api = useMemo(() => ({ signOut, signInWithGoogle, signInWithEmail, createAccountWithEmail, updateAccountInfo }), [signOut, signInWithGoogle, signInWithEmail]);

  const context = [state, api];

  return (
    <AuthContext.Provider value={ context }>
      { props.children }
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const value = useContext(AuthContext);

  return value;
}