"use client";

import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useMemo } from "react";
import { db } from "../../../database/firebase";

export const SubjectContext = createContext([]);

export function SubjectContextProvider(props) {

  async function getSubjects() {
    const querySnapshot = await getDocs(collection(db, "subjects"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name}));
  }

  async function createSubjectDocument(name) {
    try {
      const docRef = await addDoc(collection(db, "subjects"), {
        name,
        createdAt: new Date().toISOString(),
      });
      return { message: "Document written with ID: ", docId: docRef.id }
    } catch (error) {
      return { message: "Error adding document: ", error }
    }
  };

  const api = useMemo(() => ({ getSubjects, createSubjectDocument }), [getSubjects, createSubjectDocument]);

  const value = [api];

  return (
    <SubjectContext.Provider value={ value }>
      { props.children }
    </SubjectContext.Provider>
  )
}

export function useSubjects() {
  const value = useContext(SubjectContext);

  return value;
}