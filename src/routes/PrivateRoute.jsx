import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";


export default function PrivateRoute({children}) {
    // context
    const {user, loading} = useContext(AuthContext);

    // redirect location
    const location = useLocation();

    if(loading){
        return <Loading />;
    }

    if(user){
        return children;
    }

  return <Navigate state={location?.pathname} to={'/join'} />
}
