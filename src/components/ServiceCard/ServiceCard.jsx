import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { short_details, event_name, image, price } = service || {};
  return (
    <div className=" mb-5 mx-auto rounded-md bg-gradient-to-r from-fuchsia-500 via-red-500 to-indigo-500 p-[2px] hover:scale-105 delay-100 transition-all">
      <div className="h-full w-full items-center justify-center rounded-md  bg-gray-200 back flex flex-col p-3 lg:w-96">
        <img src={image} className="mx-auto w-96 h-56 rounded-md" alt="" />

        <div className="text-gray-600  my-2 space-y-2 px-4 flex-grow">
          <h1 className="text-xl py-2 font-bold ">{event_name}</h1>
          <p className="text-sm">{short_details}</p>
        </div>
        <div className="w-full px-4">
          <div className="bg-gradient-to-r rounded-md  from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[2px] my-2">
            <p className="text-lg rounded-sm px-4 py-1 text-center bg-gradient-to-r from-[#0a0a2b]  to-[#1a0b30] text-gray-100">
              Price: <span className="text-lg font-semibold">{price}</span>
            </p>
          </div>
          <div className="bg-gradient-to-r w-full  rounded-md my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[2px]">
            <button className="bg-[#1a0b30] w-full  text-white font-semibold rounded-sm py-2 hover:bg-gradient-to-r from-blue-800 to-indigo-500 hover:delay-500">
              Event Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
ServiceCard.propTypes = {
  service: PropTypes.object,
};
export default ServiceCard;
