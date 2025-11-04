// React Icons
import {TbCalendarEvent} from "react-icons/tb";
import {MdFreeCancellation} from "react-icons/md";
import {FaVirusCovid} from "react-icons/fa6";
import {GiDuration} from "react-icons/gi";
import {FaUserCheck} from "react-icons/fa";
// Main Component
const ActivityTour = ({duration}: {duration: string}) => {
  return (
    <>
      <div className="tour-activity">
        {/* Activity Title */}
        <h2 className="tour-activity-head text-[28px] font-medium text-orange-800 mb-3.5">
          About this activity
        </h2>
        {/* Activity List */}
        <ul className="tour-activity-list [&>li]:mb-3.5 [&>li>span]:flex [&>li>span]:items-center [&>li>span]:gap-2.5 [&>li>span]:mb-2 [&>li>span]:text-xl [&>li>p]:text-gray-500">
          {/* Item */}
          <li className="tour-activity-list-item">
            <span className="item-head">
              <MdFreeCancellation className="text-red-500" />
              Free cancellation
            </span>
            <p className="item-desc">
              Cancel up to 24 hours in advance to receive a full refund
            </p>
          </li>
          {/* Item */}
          <li className="tour-activity-list-item">
            <span className="item-head">
              <TbCalendarEvent className="text-green-500" />
              Reserve now & pay later
            </span>
            <p className="item-desc">
              Keep your travel plan flexible --- book your spot and pay nothing
              today
            </p>
          </li>
          {/* Item */}
          <li className="tour-activity-list-item">
            <span className="item-head">
              <FaVirusCovid className="text-orange-800" />
              Covid-19 precautions
            </span>
            <p className="item-desc">
              Special health and safely measures are in place. Check your
              activity voucher once you book for full details.
            </p>
          </li>
          {/* Item */}
          <li className="tour-activity-list-item">
            <span className="item-head">
              <GiDuration className="text-green-600" />
              Duration {duration}
            </span>
            <p className="item-desc">
              Check availability to see staritng times
            </p>
          </li>
          {/* Item */}
          <li className="tour-activity-list-item">
            <span className="item-head">
              <FaUserCheck className="text-blue-400" />
              Live tour guide
            </span>
            <p className="item-desc">English</p>
          </li>
        </ul>
      </div>
    </>
  );
};
export default ActivityTour;
