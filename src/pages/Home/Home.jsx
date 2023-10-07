import Banner from "./Banner/Banner";
import ClientReview from "./ClientReview/ClientReview";

import Feature from "./OurFeature/Feature";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Services />
        <Feature />
        <ClientReview />
      </div>
    </>
  );
};

export default Home;
