import { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import EventCard from "../../components/Home/EventCard";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


export default function AvailableEvents() {
    // context
    const {logOut} = useContext(AuthContext);

    const [events, setEvents] = useState([]);
    const navigate = useNavigate();

    // All Events
    useEffect( () => {
        fetch('https://theater-seat-server.vercel.app/events')
        .then(res => res.json())
        .then(data => {
          setEvents(data)
        })
    }, [])

    const availableEvents = events?.filter(event => event?.tickets != 0);

    console.log(availableEvents)


  const token = localStorage.getItem("token");

  if(!token){
    logOut()
    navigate('/login')
  }
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
