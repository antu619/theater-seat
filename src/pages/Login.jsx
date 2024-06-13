/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";


export default function Login() {

    // Context
    const {logIn, providerLogin} = useContext(AuthContext);

    // location & navigate
    const navigate =  useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    console.log(location)

    // Email Pass Login Method
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result => console.log(result))
        navigate(from, {replace: true});
        toast.success('Successfully Logged In')
    }

    const googleProvider = new GoogleAuthProvider();
    // Google Login method
    const handleGoogleLogin = () => {
      providerLogin(googleProvider)
      .then(result => {
        console.log(result);
        if(result?.user?.email){
          const userData = {
            name: result?.user?.displayName,
            email: result?.user?.email,
          }
          fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            toast.success('Successfully Logged In')
            navigate(from, {replace: true});
          })
        }
      })
    }
  return (
    <div style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} className="card w-full max-w-lg mx-auto my-20 bg-base-100 rounded-none">
      <form onSubmit={handleLogin} className="card-body">
        <p className="text-center text-xl">Login</p>
        <a className="text-2xl text-center">To theater<span className="font-bold text-3xl">Seat</span></a>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email *</span>
          </label>
          <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password *</span>
          </label>
          <input name="password" type="password" placeholder=" Enter Your Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary uppercase">Login</button>
        </div>
        <p className="text-center">Don't have any account? <Link className="btn btn-link p-0" to={'/join'}>Join Us</Link></p>
        <div className="divider">OR</div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-error btn-outline uppercase"> Continue With Google</button>
        </div>
      </form>
    </div>
  )
}
