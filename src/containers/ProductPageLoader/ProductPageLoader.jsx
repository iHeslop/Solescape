import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSneakerById } from "../../services/sneaker-services";
import ProductPage from "../../pages/ProductPage/ProductPage";

const ProductPageLoader = () => {
  const { id } = useParams();
  const [sneaker, setSneaker] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    getSneakerById(id)
      .then((data) => {
        setFetchStatus("SUCCESS");
        setSneaker(data);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
        setError(error);
      });
  }, [id]);
  return (
    <>
      {fetchStatus === "LOADING" && <p>...LOADING...</p>}
      {fetchStatus === "FAILED" && <p>...FAILED...</p>}
      {fetchStatus === "SUCCESS" && <ProductPage sneaker={sneaker} />}
    </>
  );
};

export default ProductPageLoader;
