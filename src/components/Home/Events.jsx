import { useEffect, useState } from "react"
import EventCard from "./EventCard";
import Heading from "../Heading";


export default function Events() {
    const [events, setEvents] = useState([]);

    // All Events
    useEffect( () => {
        fetch('https://theater-seat-server.vercel.app/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    console.log(events)

  return (
    <div className="max-w-7xl mx-auto mt-10 lg:mt-20">
        {/* Heading */}
      <Heading heading={'New Events'} />
    {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 p-5">
        {
            events?.map(event => <EventCard key={event._id} event={event} />)
        }
      </div>
    </div>
  )
}
