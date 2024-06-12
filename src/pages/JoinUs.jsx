import { Link } from "react-router-dom";


export default function JoinUs() {
  return (
    <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} className="card w-full max-w-lg mx-auto my-20 bg-base-100 rounded-none">
      <form className="card-body">
        <p className="text-center text-xl">Welcome</p>
        <a className="text-2xl text-center">To theater<span className="font-bold text-3xl">Seat</span></a>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name *</span>
          </label>
          <input type="text" placeholder="Enter Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email *</span>
          </label>
          <input type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password *</span>
          </label>
          <input type="password" placeholder=" Enter Your Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary uppercase">Join</button>
        </div>
        <p className="text-center">Already Have an Account? <Link className="btn btn-link p-0" to={'/login'}>Login</Link></p>
      </form>
    </div>
  )
}
