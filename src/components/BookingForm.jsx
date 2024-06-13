import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export default function BookingForm({ event }) {
  const { _id, title, time, date, tickets } = event;

  // context
  const { user } = useContext(AuthContext);

  // Book tickets
  const handleBooking = async(e) => {
    e.preventDefault();
    const form = e.target;
    const bookedTickets = form.bookedTickets.value;
    const name = form.name.value;
    const booking = {
      name,
      email: user?.email,
      title,
      time,
      date,
      bookedTickets,
    };
    // booking tickets
    if (tickets >= bookedTickets) {
      await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        //   get available tickets after booking
          const availableTickets = parseInt(tickets) - parseInt(bookedTickets);

        //   update tickets after booking
          if(data.acknowledged){
              fetch(`http://localhost:5000/events/${_id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({tickets: availableTickets})
            })
            .then(res => res.json())
            .then(data => console.log(data))
          }
          toast.success("Successfully Booked.");
          form.reset();
          });
          }
          else{
              toast.error("There are not enough tickets!");
          }
  };

  return (
    <div>
      {/* <button className="btn" >open modal</button> */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
        <Toaster />
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-center">Book A Ticket</h3>
          <form onSubmit={handleBooking} className="w-full">
            {/* User Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                className="input input-bordered"
                disabled
              />
            </div>
            {/* Event title */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Name</span>
              </label>
              <input
                name="title"
                type="text"
                defaultValue={title}
                className="input input-bordered"
                disabled
              />
            </div>
            {/* Event Time and Date */}
            <div className="flex justify-between">
              <div className="">
                <label className="label">
                  <span className="label-text">Time</span>
                </label>
                <input
                  name="time"
                  type="text"
                  defaultValue={time}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  name="date"
                  type="text"
                  defaultValue={date}
                  className="input input-bordered"
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="">
                <label className="label">
                  <span className="label-text">Available Tickets</span>
                </label>
                <input
                  name="tickets"
                  type="number"
                  defaultValue={tickets}
                  className="input input-bordered"
                  disabled
                />
              </div>
              <div className="">
                <label className="label">
                  <span className="label-text">Booking Tickets *</span>
                </label>
                <input
                  name="bookedTickets"
                  type="number"
                  className="input input-bordered"
                  placeholder="Sum of your tickets"
                  min={1}
                />
              </div>
            </div>
            {/* Ticket holder name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Event Name</span>
              </label>
              <input
                name="name"
                type="text"
                className="input input-bordered"
                placeholder="Your Name"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary uppercase">Book</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}
