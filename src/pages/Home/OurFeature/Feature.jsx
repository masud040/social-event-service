const Feature = () => {
  return (
    <div className="my-8">
      <h1 className="uppercase text-2xl text-center font-semibold  bg-gradient-to-r from-violet-600 via-pink-500 to-indigo-400 text-transparent bg-clip-text my-6 ">
        Why Choose to book Event services with{" "}
        <span className="text-green-700">us?</span>
      </h1>
      <div className="text-gray-600">
        <p>
          Clients should choose Our services for their event needs because we
          offer a comprehensive array of benefits that set us apart from the
          competition:
        </p>
        <ol className="list-decimal ms-8 space-y-2">
          <li>
            <span className="font-bold">Comprehensive services:</span> As a
            one-stop solution for all your event needs, we offer a wide range of
            services. This streamlines the planning process, making it
            hassle-free and efficient.
          </li>
          <li>
            <span className="font-bold">Competitive pricing:</span> By bundling
            multiple services, our clients can take advantage of cost savings
            without compromising on quality or experience.
          </li>
          <li>
            <span className="font-bold">Customization and creativity:</span>We
            recognize that each event is unique, and we’re dedicated to
            providing personalized, innovative solutions to ensure that your
            celebration is truly memorable and engaging.
          </li>
          <li>
            <span className="font-bold">Exceptional customer service:</span> Our
            team is committed to delivering top-notch customer support
            throughout the entire planning process. From the initial
            consultation to the execution of the event, we’re here to ensure
            that everything runs smoothly.
          </li>
        </ol>
        <p>
          By choosing Our Services, you are entrusting your event to a team that
          genuinely cares about your success and satisfaction. We strive to
          create memorable, enjoyable, and seamless experiences that will leave
          a lasting impression on you and you guest.
        </p>
      </div>
    </div>
  );
};

export default Feature;
