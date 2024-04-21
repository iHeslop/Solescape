import { useEffect, useState } from "react";
import TopSellerCard from "../../components/TopSellerCard/TopSellerCard";
import { getTopSellers } from "../../services/sneaker-services";
import styles from "./TopSellerLoader.module.scss";

const TopSellerLoader = () => {
  const [sneakers, setSneakers] = useState(null);
  useEffect(() => {
    getTopSellers()
      .then((data) => setSneakers(data))
      .catch((e) => console.warn(e.message));
  }, []);
  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        <h2 className={styles.title}>POPULAR</h2>
      </section>
      <section className={styles.list}>
        {sneakers &&
          sneakers.map((sneaker) => (
            <TopSellerCard key={sneaker.name} sneaker={sneaker} />
          ))}
      </section>
    </main>
  );
};

export default TopSellerLoader;
