import {
  collection,
  getDocs,
  where,
  query,
  limit,
  orderBy,
  getDoc,
  doc,
  updateDoc,
  arrayRemove,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../config/firestore";

export const getFeaturedSneakers = async () => {
  const collectionRef = query(
    collection(db, "sneakers"),
    where("featured", "==", true)
  );
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const getTopSellers = async () => {
  const collectionRef = query(
    collection(db, "sneakers"),
    where("estimatedMarketValue", "<", 1600),
    orderBy("estimatedMarketValue", "desc"),
    limit(3)
  );
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const getSneakerById = async (id) => {
  const docRef = doc(db, "sneakers", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Could not find sneaker with id " + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
};

export const getSneakersByBrand = async (brand) => {
  const collectionRef = query(
    collection(db, "sneakers"),
    where("brand", "==", brand)
  );
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const getLatestSneakers = async () => {
  const collectionRef = query(collection(db, "sneakers"));
  const snapshot = await getDocs(collectionRef);
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const removeSneakerSize = async (id, size) => {
  const docRef = doc(db, "sneakers", id);
  let updatedSize = Number(size);
  await updateDoc(docRef, {
    sizes: arrayRemove(updatedSize),
  });
};

export const addSneakerSize = async (id, size) => {
  const docRef = doc(db, "sneakers", id);
  let updatedSize = Number(size);
  await updateDoc(docRef, {
    sizes: arrayUnion(updatedSize),
  });
};

export const getSneakersBySearchTerm = async (searchTerm) => {
  const collectionRef = collection(db, "sneakers");
  const snapshot = await getDocs(collectionRef);

  const filteredSneakers = snapshot.docs.filter((doc) => {
    const data = doc.data();
    const nameContainsTerm = data.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const brandContainsTerm = data.brand
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return nameContainsTerm || brandContainsTerm;
  });

  const sneakers = filteredSneakers.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return sneakers;
};

export const getBrandNames = async () => {
  const collectionRef = collection(db, "sneakers");
  const snapshot = await getDocs(collectionRef);
  const brandNames = snapshot.docs.map((doc) => {
    return doc.data().brand;
  });
  const uniqueBrandNames = Array.from(new Set(brandNames));
  return uniqueBrandNames;
};
