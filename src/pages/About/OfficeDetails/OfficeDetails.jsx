import { HiBuildingOffice } from "react-icons/hi2";
import { BiSolidPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Ri24HoursLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const OfficeDetails = () => {
  return (
    <div className="my-8">
      <h1 className="uppercase text-2xl my-4 text-center font-semibold">
        our office info
      </h1>
      <div className="bg-gray-200 p-6 space-y-4 rounded-lg">
        <div className="flex gap-4 items-center">
          <span>
            <HiBuildingOffice className="text-4xl" />
          </span>
          <span>
            <h2 className="text-3xl font-bold">Office</h2>
            <p className="text-lg font-semibold">
              Jamuna Future park, Bonani, Dhaka, Bangladesh
            </p>
          </span>
        </div>

        <div className="flex gap-4 items-center">
          <span>
            <BiSolidPhoneCall className="text-4xl" />
          </span>
          <span>
            <h2 className="text-3xl font-bold">Call Us</h2>
            <p className="text-lg font-semibold">Local : 01788-643444</p>
            <p className="text-lg font-semibold">
              Toll Free : 1((833) 888-1798
            </p>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <AiOutlineMail className="text-4xl" />
          </span>
          <span>
            <h2 className="text-3xl font-bold">Email Us</h2>

            <p className="text-lg font-semibold">socialEvent@.com</p>
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            <Ri24HoursLine className="text-4xl" />
          </span>
          <span>
            <h2 className="text-3xl font-bold">Office Hours</h2>
            <p className="text-lg font-semibold">
              Mon - Fri 09:00 AM - 05:00 PM
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfficeDetails;
