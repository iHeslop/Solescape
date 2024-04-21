import { useEffect, useState } from "react";
import { getLatestSneakers } from "../../services/sneaker-services";
import LatestPage from "../../pages/LatestPage/LatestPage";
import Message from "../../components/Message/Message";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const LatestPageLoader = () => {
  const [sneakers, setSneakers] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    getLatestSneakers()
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
    <>
      {fetchStatus === "LOADING" && <LoadingSpinner />}
      {fetchStatus === "FAILED" && <Message />}
      {fetchStatus === "SUCCESS" && <LatestPage sneakers={sneakers} />}
    </>
  );
};

export default LatestPageLoader;
