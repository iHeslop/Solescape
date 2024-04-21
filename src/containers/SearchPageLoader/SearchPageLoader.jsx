import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSneakersBySearchTerm } from "../../services/sneaker-services";
import SearchPage from "../../pages/SearchPage/SearchPage";
import Message from "../../components/Message/Message";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const SearchPageLoader = () => {
  const { id } = useParams();
  const [sneakers, setSneakers] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    getSneakersBySearchTerm(id)
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
      {fetchStatus === "FAILED" && <Message>...FAILED...</Message>}
      {fetchStatus === "SUCCESS" && <SearchPage sneakers={sneakers} />}
    </>
  );
};

export default SearchPageLoader;
