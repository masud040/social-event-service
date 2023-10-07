import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const eventData = useLoaderData();
  const { id } = useParams();
  const match = eventData?.find((event) => event.id === parseInt(id));
  console.log(match);
  const { event_name, image, description, capacity, location, price, rating } =
    match || {};

  return (
    <div className="min-h-[85vh] text-gray-600">
      <div className="grid grid-cols-2 gap-6 my-8 ">
        <div className="bg-gradient-to-r from-fuchsia-500 rounded-md p-[2px] via-red-500 to-indigo-500">
          <img src={image} className="rounded-md" alt="" />
        </div>
        <div>
          <p className="text-2xl font-semibold">{event_name}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EventDetails;
