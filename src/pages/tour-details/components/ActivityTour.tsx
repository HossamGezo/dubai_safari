// React Icons
import { TbCalendarEvent } from "react-icons/tb";
import { MdFreeCancellation } from "react-icons/md";
import { FaVirusCovid } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { FaUserCheck } from "react-icons/fa";

// Types
type ActivityTourProps = {
  duration: string;
};

// Main Component
const ActivityTour = ({ duration }: ActivityTourProps) => {
  return (
    <div>
      {/* Activity Title */}
      <h2 className="text-[28px] font-medium text-orange-800 mb-3.5">
        About this activity
      </h2>
      {/* Activity List */}
      <ul className="[&>li]:mb-3.5 [&>li>span]:flex [&>li>span]:items-center [&>li>span]:gap-2.5 [&>li>span]:mb-2 [&>li>span]:text-xl [&>li>p]:text-gray-500">
        {/* Item */}
        <li>
          <span>
            <MdFreeCancellation className="text-red-500" />
            Free cancellation
          </span>
          <p>Cancel up to 24 hours in advance to receive a full refund</p>
        </li>
        {/* Item */}
        <li>
          <span>
            <TbCalendarEvent className="text-green-500" />
            Reserve now & pay later
          </span>
          <p>
            Keep your travel plan flexible --- book your spot and pay nothing
            today
          </p>
        </li>
        {/* Item */}
        <li>
          <span>
            <FaVirusCovid className="text-orange-800" />
            Covid-19 precautions
          </span>
          <p>
            Special health and safety measures are in place. Check your activity
            voucher once you book for full details.
          </p>
        </li>
        {/* Item */}
        <li>
          <span>
            <GiDuration className="text-green-600" />
            Duration {duration}
          </span>
          <p>Check availability to see starting times</p>
        </li>
        {/* Item */}
        <li>
          <span>
            <FaUserCheck className="text-blue-400" />
            Live tour guide
          </span>
          <p>English</p>
        </li>
      </ul>
    </div>
  );
};
export default ActivityTour;
