import { useLoaderData } from "react-router-dom";
import Member from "../../components/Member/Member";
const About = () => {
  const temMembers = useLoaderData();

  return (
    <div>
      <div className="bg-[url('https://i.ibb.co/zNkTJ3x/nathan-dumlao-8-Lq-Esf-I9-Po-unsplash.png')]  bg-cover bg-center rounded-xl bg-no-repeat h-[70vh] mt-5 hero">
        <div className="hero-overlay rounded-xl bg-opacity-70">
          {" "}
          <h1 className="text-7xl h-[70vh] flex justify-center items-center text-white font-light">
            ABOUT
          </h1>
        </div>
      </div>
      <div className="my-6 text-gray-600">
        <h1 className="uppercase text-4xl my-4 text-center font-semibold">
          Meet our Company
        </h1>
        <p className="text-justify">
          Our company was founded in 2018 with the mission of creating an event
          entertainment, production and design powerhouse. Years later, the
          company reigns as one of the youngest, most energetic and proactive
          event production firms in the Mid-Atlantic region, with a full spread
          of offerings regarding all aspects of audio, video, staging and
          lighting production as well as a wide range of entertainment offerings
          from DJs and solo musicians to full bands. Bringing together some of
          the industry’s best event experts, Extraordinary aims to outperform
          for every client that chooses to engage with us.
        </p>
        <h1 className="text-center text-3xl font-semibold my-8">OUR TEAM</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {temMembers?.map((member) => (
            <Member key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
