import { useEffect, useState } from "react";
import SneakerCard from "../../components/SneakerCard/SneakerCard";
import { getFeaturedSneakers } from "../../services/sneaker-services";
import styles from "./FeaturedLoader.module.scss";
import { useNavigate } from "react-router-dom";

const FeaturedLoader = () => {
  const navigate = useNavigate();
  const [sneakers, setSneakers] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getFeaturedSneakers()
      .then((data) => setSneakers(data))
      .catch((e) => console.warn(e.message));
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
        {sneakers &&
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
