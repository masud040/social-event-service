import PropTypes from "prop-types";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const ReviewCard = ({ review }) => {
  const { event_type, client_name, image_url, testimonial, rating } =
    review || {};

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="2000"
      className="rounded-md bg-gradient-to-r from-violet-500 via-red-500  to-indigo-500 p-[2px]"
    >
      <div className="text-center border flex flex-col p-4 md:h-96 bg-gray-300 rounded-md text-gray-600">
        <div className="bg-gradient-to-r from-violet-500 via-red-500 to-purple-500 p-[1px] w-max mx-auto rounded-3xl">
          <img
            src={image_url}
            className=" h-32 lg:h-52 w-32 lg:w-52 rounded-3xl   bg-gray-200"
            alt=""
          />
        </div>

        <div className="flex-grow">
          <p className="text-xl">{client_name}</p>
          <p className="tex-lg">Service: {event_type}</p>
          <p className="flex gap-2 items-center justify-center ">
            <Rating
              className="text-xl mt-[5px]"
              initialRating={rating}
              emptySymbol={<AiOutlineStar />}
              fullSymbol={<AiFillStar className="text-red-600" />}
            />
            <span className="p-0">({rating})</span>
          </p>
        </div>

        <p className="text-sm">{testimonial}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
