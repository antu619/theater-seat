import { Link } from "react-router-dom"


export default function Navbar() {


    const navLinks = <>
        <li><a>Home</a></li>
        <li><a>Dashboard</a></li>
    </>
  return (
    <div className="bg-primary">
        <div className="navbar max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link to={'/'} className="text-2xl">theater<span className="font-bold text-3xl">Seat</span></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
    <Link to={'/join'} className="btn w-28 uppercase">Join Us</Link>
  </div>
  
    </div>
  )
}
