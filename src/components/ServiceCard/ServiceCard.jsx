import PropTypes from "prop-types";
const ServiceCard = ({ service }) => {
  const { short_details, event_name, id, image, price, rating } = service || {};
  return (
    <div className="w-96  mx-auto rounded-md bg-gradient-to-r from-fuchsia-500 via-red-500 to-indigo-500 p-1 hover:scale-105 delay-100 transition-all">
      <div className="h-full w-full items-center justify-center bg-gray-200 back flex flex-col ">
        <img src={image} className="mx-auto   w-96 h-56" alt="" />
        <div className="px-4">
          <div className="text-gray-600  my-2 space-y-2  flex-grow">
            <h1 className="text-xl py-2 font-bold ">{event_name}</h1>
            <p className="text-sm">{short_details}</p>
            <div className="bg-gradient-to-r rounded-md my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[2px]">
              <p className="text-lg px-4 py-1 text-center bg-gradient-to-r from-[#0a0a2b]  to-[#1a0b30] text-gray-100">
                Price: <span className="text-lg font-semibold ">{price}</span>
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r w-full  rounded-md my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[2px]">
            <button className="bg-[#1a0b30] w-full  text-white font-semibold py-2 hover:bg-gradient-to-r from-blue-800 to-indigo-500 hover:delay-500">
              Show Details
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
