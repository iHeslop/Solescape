import { useEffect, useState } from "react";
import SneakerCard from "../../components/SneakerCard/SneakerCard";
import { getFeaturedSneakers } from "../../services/sneaker-services";
import styles from "./FeaturedLoader.module.scss";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message/Message";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const FeaturedLoader = () => {
  const navigate = useNavigate();
  const [sneakers, setSneakers] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");

  useEffect(() => {
    setFetchStatus("LOADING");
    getFeaturedSneakers()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setSneakers(data);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
        setError(error);
      });
  }, []);

  const onClickSneaker = (sneakerId) => {
    navigate(`/product/${sneakerId}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 8) % 16);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        <h2 className={styles.title}>FEATURED</h2>
      </section>
      <section className={styles.list}>
        {fetchStatus === "LOADING" && <LoadingSpinner />}
        {fetchStatus === "FAILED" && <Message />}
        {fetchStatus === "SUCCESS" &&
          sneakers
            .slice(currentIndex, currentIndex + 8)
            .map((sneaker) => (
              <SneakerCard
                key={sneaker.name}
                sneaker={sneaker}
                onClickSneaker={onClickSneaker}
              />
            ))}
      </section>
    </main>
  );
};

export default FeaturedLoader;
