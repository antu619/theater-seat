import { useEffect, useState } from "react"
import EventCard from "./EventCard";


export default function Events() {
    const [events, setEvents] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    console.log(events)

  return (
    <div className="max-w-7xl mx-auto mt-20">
        {/* Heading */}
      <h2 className="text-3xl text-center mb-1">Events</h2>
      <div className="flex justify-center ">
      <hr className="w-28" />
      </div>
    {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {
            events?.map(event => <EventCard key={event._id} event={event} />)
        }
      </div>
    </div>
  )
}
