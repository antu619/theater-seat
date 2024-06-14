import { BsDoorOpenFill } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open relative">
    <label htmlFor="my-drawer-2" className="btn absolute right-0 m-5 drawer-button lg:hidden"><BsDoorOpenFill className="text-3xl" /></label>
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet />
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-1">
      {/* Sidebar content here */}
      <Link to={'/'} className="text-2xl mb-4">theater<span className="font-bold text-3xl">Seat</span></Link>
      <li><Link to={'/dashboard'}>My Bookings</Link></li>
      <li><Link to={'/dashboard/available-events'}>Available Events</Link></li>
      <li><Link to={'/dashboard/all-events'}>All Events</Link></li>
      <li><Link to={'/dashboard/all-users'}>All Users</Link></li>
      <li><Link to={'/dashboard/upload-event'}>Upload Event</Link></li>
    </ul>
  
  </div>
</div>
  )
}
