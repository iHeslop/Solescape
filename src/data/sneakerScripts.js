// Example data for sneakers
import { db } from "../config/firestore";
import { addDoc, collection, getDocs, updateDoc } from "firebase/firestore";

export const fetchSneakers = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const uploadSneakersDataToFirebase = async (sneakers) => {
  const collectionRef = collection(db, "sneakers");
  for (const sneaker of sneakers) {
    let selectedLink = "";
    if (sneaker.links.stockX) {
      selectedLink = sneaker.links.stockX;
    } else if (sneaker.links.goat) {
      selectedLink = sneaker.links.goat;
    } else if (sneaker.links.flightClub) {
      selectedLink = sneaker.links.flightClub;
    }
    await addDoc(collectionRef, {
      name: sneaker.name,
      retailPrice: sneaker.retailPrice,
      brand: sneaker.brand,
      colourway: sneaker.colorway,
      description: sneaker.story,
      estimatedMarketValue: sneaker.estimatedMarketValue,
      image: sneaker.image.original,
      link: selectedLink,
      releaseDate: sneaker.releaseDate,
      releaseYear: sneaker.releaseYear,
      sizes: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    });
  }
  console.log("Sneakers data uploaded to Firebase successfully!");
};

export const updateSneakers = async () => {
  const collectionRef = collection(db, "sneakers");
  const snapshot = await getDocs(collectionRef);
  snapshot.docs.forEach(async (doc) => {
    await updateDoc(doc.ref, {
      ...doc.data(),
      featured: false,
    });
  });
};
