/* eslint-disable no-unused-vars */
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import type { todoType } from "../constants/Entity";
import { GET_TODOS_BY_ID } from "../graphql/queries/UserQuery";

type todoDataType = {
  id: string;
  title: string;
  body: string;
  updated_at: Date;
  created_at: Date;
};

function Todos() {
  const id = "1";
  const [todos, setTodos] = useState<Array<todoDataType>>([]);
  const { data } = useQuery(GET_TODOS_BY_ID, {
    variables: { id },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      const dataUsers: Array<todoType> = data.getTodosById;
      const todoList: Array<todoDataType> = [];
      dataUsers.map((item) => {
        const tempUser: todoDataType = {
          id: item.id,
          title: item.title,
          body: item.body,
          updated_at: new Date(parseInt(item.updated_at, 10)),
          created_at: new Date(parseInt(item.created_at, 10)),
        };
        todoList.push(tempUser);
        return true;
      });
      setTodos(todoList);
    }
  }, [data]);

  return (
    <div className=" flex flex-col items-center h-screen">
      <h1 className=" py-10 font-bold text-2xl">Todos</h1>

      <table className=" w-[500px] table-auto border-collapse">
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
            <th className=" border border-slate-600 py-3">Id</th>
            <th className=" border border-slate-600">Title</th>
            <th className=" border border-slate-600">Todo</th>
            <th className=" border border-slate-600">Updated At</th>
            <th className=" border border-slate-600">Created At</th>
            <th className=" border border-slate-600">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {todos &&
            todos.map((todo) => (
              <tr className=" text-start" key={todo.id}>
                <td className=" px-7 text-center border border-slate-600">
                  {todo.id}
                </td>
                <td className=" border px-7 border-slate-600">{todo.title}</td>
                <td className=" border px-7 border-slate-600">{todo.body}</td>
                <td className=" border px-7 border-slate-600">
                  {todo.updated_at.toString()}
                </td>
                <td className=" border px-7 border-slate-600">
                  {todo.created_at.toString()}
                </td>
                <td className=" border px-7 border-slate-600">
                  <button
                    type="button"
                    className="bg-blue-400 px-3 rounded-sm my-2 border-2 border-slate-500"
                  >
                    Edit
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

export default Todos;
