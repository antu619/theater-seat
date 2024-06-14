import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import AdminEventCard from "../../components/AdminEventCard";


export default function AllEvent() {

    const [events, setEvents] = useState([]);

    // All Events
    useEffect( () => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => {
          setEvents(data)
        })
    }, [])

    // handle remove
  const handleRemove = (_id) => {
    setEvents(events.filter((post) => post._id !== _id));
  };
  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={"All Events"} />
      {/* All Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {
            events?.map(event => <AdminEventCard key={event._id} event={event} handleRemove={handleRemove} />)
        }
      </div>
    </div>
  )
}
