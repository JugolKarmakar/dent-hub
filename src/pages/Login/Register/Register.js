import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const handelNameBlur = (e) => {
    setName(e.target.value);
  };
  const handelEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handelPasswordBlur = (e) => {
    setPassword(e.target.value);
  };

  const handelConfirmdBlur = (e) => {
    setConfirm(e.target.value);
  };

  const handelCreateUser = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    toast("verify email");
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="container min-h-screen m-auto w-1/3 border-2 px-8 mt-5 mb-8 shadow-lg">
      <h2 className="text-3xl text-center text-cyan-500 font-semibold my-4">
        Register PLease!!
      </h2>
      <SocialLogin></SocialLogin>
      <form onSubmit={handelCreateUser}>
        <div className="mb-3">
          <label
            className="text-base text-black font-medium block pb-2"
            htmlFor="Your Name"
          >
            Your Name
          </label>
          <input
            onBlur={handelNameBlur}
            className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-orange-400"
            type="text"
            name="text"
            id=""
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label
            className="text-base text-black font-medium block pb-2"
            htmlFor="Your Email"
          >
            Your Email
          </label>
          <input
            onBlur={handelEmailBlur}
            className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-orange-400"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label
            className="text-base text-black font-medium block pb-2"
            htmlFor="Your Password"
          >
            Your Password
          </label>
          <input
            onBlur={handelPasswordBlur}
            className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-orange-400"
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            required
          />
        </div>
        <div>
          <label
            className="text-base text-black font-medium block pb-2"
            htmlFor="Confirm Password"
          >
            Confirm Password
          </label>
          <input
            onBlur={handelConfirmdBlur}
            className="w-full py-2 px-6 rounded-full outline-none border-b-2 focus:border-orange-400"
            type="password"
            name="password"
            id=""
            placeholder="Your Password"
            required
          />
        </div>

        <p>{error?.message ? error?.message : ""}</p>

        <div className="text-center">
          <input
            onClick={() => createUserWithEmailAndPassword()}
            className="bg-cyan-500 text-white font-semibold px-12 py-2 rounded-full mt-4 cursor-pointer"
            type="submit"
            value="Register"
          />
        </div>
      </form>
      <ToastContainer />
      <p className="text-base text-center mt-3 mb-5">
        Already have an account?{" "}
        <Link className="text-orange-400 font-bold" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
