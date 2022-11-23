import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/allusers`);
      const data = await res.json();
      return data;
    },
  });
  const HandleAdmin = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, { method: "PUT" })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <div className="max-w-7xl mt-5 ">
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="hover" key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.role === "admin" ? (
                      ""
                    ) : (
                      <button
                        onClick={() => HandleAdmin(user._id)}
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-error ">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
