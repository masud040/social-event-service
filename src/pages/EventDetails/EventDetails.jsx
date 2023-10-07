import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";

const EventDetails = () => {
  const eventData = useLoaderData();
  const { id } = useParams();
  const match = eventData?.find((event) => event.id === parseInt(id));
  console.log(match);
  const { event_name, image, description, capacity, location, price, rating } =
    match || {};

  return (
    <div className="min-h-[85vh] text-gray-600  my-8">
      <div className=" grid md:grid-cols-2 gap-5 items-start  ">
        <div className="bg-gradient-to-r from-fuchsia-500 rounded-md p-[2px] via-red-500 to-indigo-500 w-96 mx-auto ">
          <img src={image} className="rounded-md h-96 w-96 mx-auto" alt="" />
        </div>
        <div className="  ">
          <div className="space-y-2 w-96 md:w-full mx-auto">
            <p className="text-3xl font-semibold">
              {" "}
              Service Name: {event_name}
            </p>
            <p className="text-xl font-semibold">Capacity: {capacity} Person</p>
            <p className="text-xl font-semibold">Quality: Best</p>
            <span className="flex gap-3">
              <p className="text-xl">
                <Rating
                  initialRating={rating}
                  emptySymbol={<AiOutlineStar />}
                  fullSymbol={<AiFillStar className="text-red-600" />}
                />
              </p>
              <p>({rating})</p>
            </span>
            <p className="text-lg font-semibold">Price: {price}</p>
            <span className="text-lg font-semibold flex items-center gap-2 ">
              <p>
                <FaLocationDot />
              </p>
              <p>Location: {location}</p>
            </span>
          </div>
          <div className="bg-gradient-to-r mt-6 w-full  rounded-md my-1 from-[#3c4fdf] via-[#6354e6] to-[#985cf0] p-[2px]">
            <Link to={`/booking/${id}`}>
              <button className="bg-[#1a0b30] w-full  text-white font-semibold rounded-sm py-2 hover:bg-gradient-to-r from-blue-800 to-indigo-500 hover:delay-500">
                Confirm Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

export default EventDetails;
