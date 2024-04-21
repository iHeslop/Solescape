import BrandCard from "../../components/BrandCard/BrandCard";
import { useNavigate } from "react-router-dom";
import styles from "./LatestPage.module.scss";

const BrandPage = ({ sneakers }) => {
  const navigate = useNavigate();
  const onClickSneaker = (sneakerId) => {
    navigate(`/product/${sneakerId}`);
  };
  return (
    <main className={styles.container}>
      <section className={styles.grid}>
        <h2 className={styles.title}>LATEST</h2>
      </section>
      <section className={styles.list}>
        {sneakers &&
          sneakers.map((sneaker) => (
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
