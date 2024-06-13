import { useContext, useEffect, useState } from "react";
import Heading from "../../components/Heading";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function AllUsers() {
  // context
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  // Get all users
  useEffect(() => {
    fetch("http://localhost:5000/users", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        if (data.status === 403) {
          logOut();
          navigate("/login");
        }
      });
  }, [logOut, navigate]);

  // redirect when token is not found
  const token = localStorage.getItem("token");

  if (!token) {
    logOut();
    navigate("/login");
  }
  return (
    <div className="p-5 lg:p-10">
      {/* Heading */}
      <Heading heading={"All Users"} />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-base-300">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, i) => (
              <tr key={i} className="hover">
                <th>{i + 1}</th>
                {user?.name ? <td>{user?.name}</td> : <td>Not Found</td>}
                {user?.email ? <td>{user?.email}</td> : <td>Not Found</td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
