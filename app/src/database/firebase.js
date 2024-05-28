import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const db = getFirestore(app);

// this function is used to get all documents from a collection in firestore

export const getSubjects = async () => {
  const querySnapshot = await getDocs(collection(db, "subjects"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().name}`);
  });
};
/* this function is used to create a document in subjects collection in firestore */

// const createSubjectDocument = async () => {
//   try {
//     const docRef = await addDoc(collection(db, "subjects"), {
//       name: "Geometria",
//       createdAt: new Date().toISOString(),
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };

// createSubjectDocument();

/* this function is used to create a collection in firestore */

/* const createSubjectCollection = async () => {
    try {
      const docRef = await addDoc(collection(db, "subjects"), {
        name: "Math",
        updatedAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
}

createSubjectCollection(); */
