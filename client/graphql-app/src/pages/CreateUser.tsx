/* eslint-disable no-unused-vars */
import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import CREATE_USER from "../graphql/mutations/UserMutation";
import loadingGif from "../assets/gif/loading_gif.gif";

function CreateUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleCreateUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      name.length > 0 &&
      email.length > 0 &&
      address.length > 0 &&
      phone.length > 0
    ) {
      createUser({ variables: { name, address, phone } });
      navigate(ROUTES.home);
    } else {
      alert("Input field cannot be empty");
    }
  };

  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={(e) => handleCreateUser(e)}
        className=" w-[500px] border border-slate-500 p-7"
      >
        <div className=" w-full flex justify-start">
          <button
            type="button"
            onClick={() => navigate(ROUTES.home)}
            className=" mb-5 text-blue-600 font-semibold"
          >
            {`<  Back to main page`}
          </button>
        </div>
        {error && (
          <h5 className=" mb-10 text-red-600 line-clamp-3 break-all">
            {error.message}
          </h5>
        )}
        {loading && (
          <div className=" w-full flex flex-col items-center">
            <img src={loadingGif} alt="loading..." className=" w-14 h-14" />
            <h1 className=" mb-10 mt-3">Processing, please wait...</h1>
          </div>
        )}
        <div className=" relative ">
          <input
            type="text"
            id="simple-email"
            className=" flex-1 appearance-none border mb-5 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-transparent"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            id="simple-email"
            className=" flex-1 appearance-none border mb-5 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-transparent"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            id="simple-email"
            className=" flex-1 appearance-none border mb-5 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-transparent"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            id="simple-email"
            className=" flex-1 appearance-none border mb-5 border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-slate-700 focus:border-transparent"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="py-2 px-4 mt-7 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
        >
          CREATE USER
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
