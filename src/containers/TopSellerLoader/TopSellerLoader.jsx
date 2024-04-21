import { useEffect, useState } from "react";
import TopSellerCard from "../../components/TopSellerCard/TopSellerCard";
import { getTopSellers } from "../../services/sneaker-services";
import styles from "./TopSellerLoader.module.scss";
import Message from "../../components/Message/Message";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const TopSellerLoader = () => {
  const [sneakers, setSneakers] = useState(null);

  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    getTopSellers()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setSneakers(data);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
        setError(error);
      });
  }, []);
  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        <h2 className={styles.title}>POPULAR</h2>
      </section>
      <section className={styles.list}>
        {fetchStatus === "LOADING" && <LoadingSpinner />}
        {fetchStatus === "FAILED" && <Message>...FAILED...</Message>}
        {fetchStatus === "SUCCESS" &&
          sneakers.map((sneaker) => (
            <TopSellerCard key={sneaker.name} sneaker={sneaker} />
          ))}
      </section>
    </main>
  );
};

export default TopSellerLoader;
