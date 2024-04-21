import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>...LOADING...</h2>
      </div>
    </>
  );
};

export default LoadingSpinner;
