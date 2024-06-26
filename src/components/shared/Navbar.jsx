import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../provider/AuthProvider"


export default function Navbar() {
    // Context
    const {user, logOut} = useContext(AuthContext);

    console.log(user)

    // Handle Log Out
    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => console.log(err))
    }

    const navLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        {
            user?.email &&
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
        }
    </>
  return (
    <div className="bg-primary">
        <div className="navbar lg:max-w-7xl lg:mx-auto justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <Link to={'/'} className="text-xl lg:text-2xl">theater<span className="font-bold text-2xl lg:text-3xl">Seat</span></Link>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
    {
        user?.email ?
        <button onClick={handleLogOut} className="btn w-28 uppercase">Log Out</button>
        :
        <div>
          <Link to={'/login'} className="btn lg:w-28 uppercase mr-2">Login</Link>
          <Link to={'/join'} className="btn btn-outline border-black text-black lg:w-28 uppercase">Join Us</Link>
        </div>

    }
  </div>
    </div>
  )
}
