import { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Dashboard() {
  // context
  const { user, logOut } = useContext(AuthContext);

  const [userBookings, setUserBookings] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.status);
        if (data.status === 403) {
          logOut();
          navigate("/login");
        }
        setUserBookings(data);
      });
  }, [user?.email, logOut, navigate]);


  const handlePayFree = (userBooking) => {
    console.log(userBooking)
    const payment = {
      bookingId: userBooking?._id,
      email: userBooking?.email,
      name: userBooking?.name,
      totalPrice: 0,
      transactionId: 123,
    };
    fetch("http://localhost:5000/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success('Congrates! Successfully paid.')
        }
      });
  }

  const token = localStorage.getItem("token");
  if (!token) {
    logOut();
    navigate("/login");
  }

  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={"My Bookings"} />
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
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {userBookings?.map((userBooking, i) => (
              <tr key={i} className="hover">
                <th>{i + 1}</th>
                <td>{userBooking?.title}</td>
                <td>{userBooking?.name}</td>
                <td>{userBooking?.time}</td>
                <td>{userBooking?.date}</td>
                <td>{userBooking?.bookedTickets}</td>
                <td>{userBooking?.totalPrice}</td>
                <td>
                  {
                    !userBooking?.paid && userBooking?.price !== 'free' &&
                      <Link to={`/dashboard/payment/${userBooking?._id}`} className="btn btn-sm btn-info w-20">Pay</Link>
                  }
                  {
                    userBooking?.paid && userBooking?.price &&
                      <button disabled="disabled" className="btn btn-sm btn-info w-20">Paid</button>
                  }
                  {
                    !userBooking?.paid && userBooking?.price === 'free' &&
                      <button onClick={() => handlePayFree(userBooking)} className="btn btn-sm btn-info w-20">Pay free</button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
