import { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { AuthContext } from "../../provider/AuthProvider";


export default function Dashboard() {
  // context
  const {user} = useContext(AuthContext);

  const [userBookings, setUserBookings] = useState([]);

  useEffect( () => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`)
    .then(res => res.json())
    .then(data => setUserBookings(data))
  }, [user?.email])

  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={'My Bookings'} />
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="bg-base-300">
        <th>No.</th>
        <th>Event</th>
        <th>Name</th>
        <th>Time</th>
        <th>Date</th>
        <th>Tickets</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
        {
          userBookings?.map((userBooking, i) => <tr key={i} className="hover">
          <th>{i+1}</th>
            <td>{userBooking?.title}</td>
            <td>{userBooking?.name}</td>
            <td>{userBooking?.time}</td>
            <td>{userBooking?.date}</td>
            <td>{userBooking?.bookedTickets}</td>
            <td><button className="btn btn-sm btn-info w-20">Pay</button></td>
          </tr>)
        }
    </tbody>
  </table>
</div>
    </div>
  )
}
