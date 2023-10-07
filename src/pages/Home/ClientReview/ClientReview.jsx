import { useEffect, useState } from "react";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";

const ClientReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("../clientReview.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-semibold my-10 bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text">
        Client Reviews
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 mb-7">
        {reviews?.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ClientReview;
