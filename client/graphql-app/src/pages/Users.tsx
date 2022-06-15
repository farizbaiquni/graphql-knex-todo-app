import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_ALL_USERS } from "../graphql/queries/UserQuery";
import * as ROUTES from "../constants/routes";

type userType = {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
};

function Users() {
  const [users, setUsers] = useState<Array<userType>>([]);
  const navigate = useNavigate();
  const { data } = useQuery(GET_ALL_USERS);
  useEffect(() => {
    if (data) {
      const dataUsers: Array<userType> = data.getAllUsers;
      setUsers(dataUsers);
    }
  }, [data, users]);

  return (
    <div className=" flex flex-col items-center h-screen">
      <h1 className=" py-10 font-bold text-2xl">Graphql Users</h1>

      <table className=" table-auto border-collapse">
        <thead>
          <tr className=" text-left">
            <td colSpan={6}>
              <button
                type="button"
                onClick={() => navigate(ROUTES.createUser)}
                className=" bg-green-300 px-3 rounded-sm my-2 border-2 border-slate-500 col-span-3 font-semibold"
              >
                Add new user
              </button>
            </td>
          </tr>
          <tr>
            <th className=" border border-slate-600">Id</th>
            <th className=" border border-slate-600">Name</th>
            <th className=" border border-slate-600">Email</th>
            <th className=" border border-slate-600">Address</th>
            <th className=" border border-slate-600">Phone</th>
            <th className=" border border-slate-600">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 &&
            users.map((user) => (
              <tr className=" text-start" key={user.id}>
                <td className=" px-7 text-center border border-slate-600">
                  {user.id}
                </td>
                <td className=" border px-7 border-slate-600">{user.name}</td>
                <td className=" border px-7 border-slate-600">{user.email}</td>
                <td className=" border px-7 border-slate-600">
                  {user.address}
                </td>
                <td className=" border px-7 border-slate-600">{user.phone}</td>
                <td className=" border px-7 border-slate-600">
                  <button
                    type="button"
                    className="bg-blue-400 px-3 rounded-sm my-2 border-2 border-slate-500"
                    onClick={() => navigate(ROUTES.todos)}
                  >
                    Todos
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot />
      </table>
    </div>
  );
}

export default Users;
