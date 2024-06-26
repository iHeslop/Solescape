import BrandCard from "../../components/BrandCard/BrandCard";
import { useNavigate } from "react-router-dom";
import styles from "./BrandPage.module.scss";

const BrandPage = ({ sneakers, brand }) => {
  const navigate = useNavigate();
  const onClickSneaker = (sneakerId) => {
    navigate(`/product/${sneakerId}`);
  };
  const sortedSneakers = sneakers.slice().sort((a, b) => {
    return new Date(a.releaseDate) - new Date(b.releaseDate);
  });
  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        <h2 className={styles.title}>
          Brands {">"} {brand}
        </h2>
      </section>
      <section className={styles.list}>
        {sneakers &&
          sortedSneakers.map((sneaker) => (
            <BrandCard
              key={sneaker.id}
              sneaker={sneaker}
              onClickSneaker={onClickSneaker}
            />
          ))}
      </section>
    </main>
  );
};
export default BrandPage;
