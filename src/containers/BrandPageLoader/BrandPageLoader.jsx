import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSneakersByBrand } from "../../services/sneaker-services";
import BrandPage from "../../pages/BrandPage/BrandPage";
import Message from "../../components/Message/Message";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const BrandPageLoader = () => {
  const { id } = useParams();
  const [sneakers, setSneakers] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    getSneakersByBrand(id)
      .then((data) => {
        setFetchStatus("SUCCESS");
        setSneakers(data);
      })
      .catch((error) => {
        setFetchStatus("FAILED");
        setError(error);
      });
  }, [id]);
  return (
    <>
      {fetchStatus === "LOADING" && <LoadingSpinner />}
      {fetchStatus === "FAILED" && <Message />}
      {fetchStatus === "SUCCESS" && (
        <BrandPage sneakers={sneakers} brand={id} />
      )}
    </>
  );
};

export default BrandPageLoader;
