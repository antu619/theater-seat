import { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import EventCard from "../../components/Home/EventCard";


export default function AvailableEvents() {
    const [events, setEvents] = useState([]);

    // All Events
    useEffect( () => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    const availableEvents = events?.filter(event => event?.tickets != 0);

    console.log(availableEvents)
  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={'Available Events'} />
        {/* Available Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {
            availableEvents?.map(event => <EventCard key={event._id} event={event} />)
        }
      </div>
    </div>
  )
}
