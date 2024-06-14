
import { CiEdit } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { Link } from 'react-router-dom';

export default function AdminEventCard({event}) {
    const { _id, title, imgUrl, time, date, tickets, price } = event;
  return (
    <div
      style={{
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      className="card card-compact bg-base-200 rounded-none justify-between"
    >
      <figure>
        <img src={imgUrl} alt="Thumb" />
      </figure>
      <div className="card-body w-full justify-end">
        <h2 className="card-title">
          {title}
          {
            price === 'free' && 
            <div className="badge badge-secondary">Free</div>
          }
          </h2>

        <div className="grid grid-cols-2 gap-5 my-4">
          <p className="flex items-center gap-2">
            <IoMdTime className="text-info" />
            {time}
          </p>
          <p className="flex items-center justify-end gap-2">
            <SlCalender className="text-info" />
            <div><p>yyyy/mm/dd</p>
            {date}</div>
          </p>
          <p>Tickets: {tickets}</p>
          <p className="flex items-center justify-end gap-2">Price: ${price}</p>
        </div>
      <div className="card-actions justify-end">
        <button
          className="btn btn-error btn-sm btn-outline uppercase rounded-none"
        >
          <MdDelete />
        </button>
        <Link
          to={`/dashboard/update-event/${_id}`}
          className="btn btn-info btn-sm btn-outline uppercase rounded-none"
        >
          <CiEdit />
        </Link>
        <Link
          to={`/events/${_id}`}
          className="btn btn-primary btn-sm btn-outline uppercase rounded-none"
        >
          Details
        </Link>
      </div>
      </div>
    </div>
  )
}
