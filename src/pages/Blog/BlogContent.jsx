import { MdTipsAndUpdates, MdChecklist } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
const BlogContent = () => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl text-center font-semibold mb-6">Event Planing</h1>
      <div className="grid md:grid-cols-3 gap-5 justify-center ">
        <div data-aos="zoom-in" className="bg-gray-400 p-5 md:p-3 rounded-lg">
          <p className="text-5xl p-6 rounded-md bg-gray-500  ">
            <MdTipsAndUpdates className="w-full mx-auto" />
          </p>

          <h1 className="text-xl my-2 font-semibold">
            Event Planning Tips and Tricks
          </h1>
          <p className="text-justify text-sm text-gray-700">
            Share insightful articles on various aspects of event planning, such
            as budgeting, venue selection, catering, entertainment, and decor.
            Provide practical tips and advice that your clients can use to make
            their events successful.
          </p>
        </div>
        <div data-aos="zoom-out" className="bg-gray-400 p-5 md:p-3 rounded-lg">
          <p className="text-5xl p-6 rounded-md bg-gray-500  ">
            <AiOutlineSolution className="w-full mx-auto" />
          </p>
          <h1 className="text-xl my-2 font-semibold">
            Event Planning Challenges and Solutions
          </h1>
          <p className="text-justify text-sm text-gray-700">
            Discuss common challenges that event planners face and provide
            practical solutions. This can help your clients navigate potential
            pitfalls and be better prepared for their events.
          </p>
        </div>
        <div
          data-aos="zoom-out-up"
          className="bg-gray-400 p-5 md:p-3 rounded-lg"
        >
          <p className="text-5xl p-6 rounded-md bg-gray-500  ">
            <MdChecklist className="w-full mx-auto" />
          </p>
          <h1 className="text-xl my-2 font-semibold">
            Event Planning Checklists and Templates
          </h1>
          <p className="text-justify text-sm text-gray-700">
            Offer downloadable event planning checklists, templates, and
            timelines that can help your clients organize their events
            efficiently. These resources can be valuable for both novice and
            experienced event planners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
