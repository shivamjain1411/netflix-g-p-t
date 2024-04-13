import React, { useState } from "react";
import Header from "./Header";
import { backgroundimage } from "../utils/URL";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={backgroundimage} alt="logo" />

        <form className="w-3/12  absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80">
          <h1 className=" font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && <input
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-transparent border border-solid border-white rounded-md"
          ></input>}

          <input
            type="email"
            placeholder="email address"
            className="p-4 my-4 w-full bg-transparent border border-solid border-white rounded-md"
          ></input>
          <input
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-transparent border border-solid border-white rounded-md"
          ></input>
          <button
            type="submit"
            className="p-4 my-6 w-full bg-red-700 rounded-md"
          >
            {" "}
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="py-2 px-4 hover:cursor-pointer font-bold"
            onClick={toggleSignIn}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up  Now"
              : "Already a User!! Sign In Now"}{" "}
          </p>
        </form>
      </div>
      Login
    </div>
  );
};

export default Login;
