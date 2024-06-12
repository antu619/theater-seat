import { IoMdTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { useLoaderData } from "react-router-dom"


export default function EventDetails() {

    const event = useLoaderData();
    // Event Data
  const { title, imgUrl, time, date, tickets, price, description } = event;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-10 my-20 p-5">
      <div
      className="lg:col-span-2 card card-compact bg-base-200 rounded-none"
    >
      <figure>
        <img src={imgUrl} alt="Thumb" />
      </figure>
      <div className="card-body">
        <p><span className="font-semibold">Details:</span> {description}</p>
      </div>
    </div>
      <div
      className="card card-compact bg-base-200 rounded-none justify-between"
    >
      <div className="p-5">
      <h2 className="card-title justify-center">About {title} Event</h2>
      <div className="flex justify-around my-4 mt-10">
          <p className="flex items-center gap-2">
            <IoMdTime className="text-info" />
            {time}
          </p>
          <p className="flex items-center gap-2">
            <SlCalender className="text-info" />
            {date}
          </p>
        </div>
        <div className="flex justify-around">
          <p>Tickets: {tickets}</p>
          <p className="flex items-center gap-2">Price: ${price}</p>
        </div>
      </div>
      <div className="w-full card-actions">
        <button
          className="btn btn-primary btn-outline w-full uppercase rounded-none"
        >
          Book Now
        </button>
      </div>
      </div>
    </div>
  )
}
