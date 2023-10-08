import { useEffect, useState } from "react";

const BlogGallery = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("../eventGallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div className="my-7">
      <h1 className="text-3xl text-center font-semibold my-6">
        Recent Events Gallery
      </h1>
      <div className="grid  md:grid-cols-3 gap-6 ">
        {images?.map((img) => (
          <div
            data-aos="flip-up"
            key={img.id}
            className="bg-[#150f2d] w-max  rounded-xl mx-auto"
          >
            <img
              src={img?.image}
              className=" w-52 lg:w-72 h-52 lg:h-72 rounded-t-lg mx-auto"
              alt=""
            />
            <div className="flex px-2 justify-between w-52 lg:w-72 mx-auto my-2 items-center">
              <p className="text-white font-semibold lg:text-xl">
                {img?.event_name}
              </p>
              <p className="lg:text-lg text-gray-500 font-semibold">
                {img?.event_date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogGallery;
