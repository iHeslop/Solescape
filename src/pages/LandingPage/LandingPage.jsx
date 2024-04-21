import Feature from "../../components/Feature/Feature";
import FeaturedLoader from "../../containers/FeaturedLoader/FeaturedLoader";
import StoreFeature from "../../components/StoreFeature/StoreFeature";
import TopSellerLoader from "../../containers/TopSellerLoader/TopSellerLoader";

const LandingPage = () => {
  return (
    <>
      <Feature />
      <FeaturedLoader />
      <StoreFeature />
      <TopSellerLoader />
    </>
  );
};
export default LandingPage;
