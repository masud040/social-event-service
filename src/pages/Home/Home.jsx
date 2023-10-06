import Banner from "./Banner/Banner";
import Communicate from "./Comunicate/Communicate";
import Feature from "./OurFeature/Feature";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <Services />
        <Feature />
        <Communicate />
      </div>
    </>
  );
};

export default Home;
