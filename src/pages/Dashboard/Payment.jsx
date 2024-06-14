import { useLoaderData } from "react-router-dom";
import Heading from "../../components/Heading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

console.log(stripePromise);
export default function Payment() {
  const bookingdata = useLoaderData();
  const { title, time, date, price, bookedTickets, name, totalPrice } = bookingdata;
  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={`Payment for ${title}`} />
      <div
        style={{
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        className="card max-w-xl mx-auto card-compact bg-base-200 rounded-none justify-between"
      >
        <div className="card-body">
          <h2 className="card-title">Event Name: {title}</h2>

          <div className="flex justify-between my-5">
            <div className="">
              <p className="mb-3">Ticket Holder Name: {name}</p>
              <p className="font-semibold text-lg">
                Booked Tickets: ${bookedTickets}
              </p>
              <p className="font-semibold text-lg">
                Total Price: ${totalPrice}
              </p>
            </div>
            <div>
              <p className="">Time: {time}</p>
              <p className="flex gap-2 my-3">
                Date:
                <div>
                  <p>yyyy/mm/dd</p>
                  {date}
                </div>
              </p>
              <p className="">Ticket Price: ${price}</p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <Elements stripe={stripePromise}>
            <CheckoutForm bookingdata={bookingdata} />
          </Elements>
        </div>
      </div>
    </div>
  );
}
