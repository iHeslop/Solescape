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
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(3);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeDotIndices, setActiveDotIndices] = useState([0, 1, 2]);
  const totalSneakers = sneakers ? sneakers.length : 0;

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

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleClick = (direction) => {
    if (isMobileView) {
      const lastIndex = totalSneakers - 1;
      let newIndex;
      if (direction === "prev") {
        newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
      } else if (direction === "next") {
        newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
      }
      setActiveIndex(newIndex);
    } else {
      let firstIdx = firstIndex;
      let lastIdx = lastIndex;
      if (direction === "prev") {
        if (firstIdx === 0) {
          return;
        } else {
          firstIdx--;
          lastIdx--;
        }
      } else if (direction === "next") {
        if (lastIdx === 6) {
          return;
        } else {
          firstIdx++;
          lastIdx++;
        }
      }
      const newActiveDotIndices = activeDotIndices.map((index) =>
        direction === "prev"
          ? index - 1 >= 0
            ? index - 1
            : 5
          : index + 1 <= 5
          ? index + 1
          : 0
      );

      setActiveDotIndices(newActiveDotIndices);
      setFirstIndex(firstIdx);
      setLastIndex(lastIdx);
    }
  };

  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        <h2 className={styles.title}>POPULAR</h2>
        {isMobileView ? (
          <div className={styles.dots}>
            {[...Array(totalSneakers).keys()].map((index) => (
              <p
                key={index}
                onClick={() => handleDotClick(index)}
                style={{ opacity: index === activeIndex ? 1 : 0.4 }}
              >
                &#x2022;
              </p>
            ))}
          </div>
        ) : (
          <div className={styles.dots}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <p
                key={index}
                style={{ opacity: activeDotIndices.includes(index) ? 1 : 0.4 }}
              >
                &#x2022;
              </p>
            ))}
          </div>
        )}
        <div className={styles.arrows}>
          <div
            className={styles.arrows_btn}
            onClick={() => handleClick("prev")}
          >
            &lt;
          </div>
          <div
            className={styles.arrows_btn}
            onClick={() => handleClick("next")}
          >
            &gt;
          </div>
        </div>
      </section>
      <section className={styles.list}>
        {fetchStatus === "LOADING" && <LoadingSpinner />}
        {fetchStatus === "FAILED" && <Message />}
        {fetchStatus === "SUCCESS" &&
          (isMobileView
            ? sneakers
                .slice(activeIndex, activeIndex + 1)
                .map((sneaker) => (
                  <TopSellerCard key={sneaker.name} sneaker={sneaker} />
                ))
            : sneakers
                .slice(firstIndex, lastIndex)
                .map((sneaker) => (
                  <TopSellerCard key={sneaker.name} sneaker={sneaker} />
                )))}
      </section>
    </main>
  );
};

export default TopSellerLoader;
