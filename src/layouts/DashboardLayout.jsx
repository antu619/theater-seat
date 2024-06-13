import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Link to={'/'} className="text-2xl mb-4">theater<span className="font-bold text-3xl">Seat</span></Link>
      <li><Link to={'/dashboard'}>My Bookings</Link></li>
    </ul>
  
  </div>
</div>
  )
}
