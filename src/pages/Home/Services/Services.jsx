import { useEffect, useState } from "react";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("../event_data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-3xl text-center font-semibold my-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text"
      >
        EVENT SERVICES FOR SOCIAL EVENTS
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
