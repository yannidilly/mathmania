import { db } from "@/database/firebase";
import { createContext, useContext } from "react";

export const SubjectContext = createContext([]);

export function SubjectContextProvider(props) {

  async function getSubjects() {
    const querySnapshot = await getDocs(collection(db, "subjects"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name}`);
    });
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