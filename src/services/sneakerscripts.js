import { db } from "../config/firestore";
import {
  addDoc,
  collection,
  deleteField,
  getDocs,
  updateDoc,
} from "firebase/firestore";

export const updateSneakers = async () => {
  const collectionRef = collection(db, "sneakers");
  const snapshot = await getDocs(collectionRef);
  snapshot.docs.forEach(async (doc) => {
    await updateDoc(doc.ref, {
      ...doc.data(),
      sizes: {
        7.5: 2,
        8: 2,
        8.5: 2,
        9: 2,
        9.5: 2,
        10: 2,
        10.5: 2,
        11: 2,
        11.5: 2,
        12: 2,
        12.5: 2,
        13: 2,
      },
    });
  });
};
