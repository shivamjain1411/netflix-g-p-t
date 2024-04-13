import React, { useRef, useState } from "react";
import Header from "./Header";
import { backgroundimage } from "../utils/URL";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch=useDispatch();
  const handleButtonClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    // if(msg==="Email ID is not valid"){
    //   setErrorMessage("email id is not valid");

    // }
    // if(msg==="Password is not valis"){
    //   setErrorMessage("password is not valid");
    // }
    // if(msg==null){
    //   setErrorMessage(null);
    // }
    setErrorMessage(msg);
    if (msg) return;
    //create or sign in user
    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/122403035?s=400&u=c6c1745421c20828f3242d9d15d54ab92eae478e&v=4"
          }).then(() => {
            console.log(user);
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }));
          
          // ...
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrorMessage(error.msg);
            // An error occurred
            // ...
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorCode ==="auth/invalid-credential"){
            setErrorMessage("no user found");
          }
          
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img className="absolute" src={backgroundimage} alt="logo" />

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-3/12  absolute p-12 my-36 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80"
        >
          <h1 className=" font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-transparent border border-solid border-white rounded-md"
            ></input>
          )}

          <input
            ref={email}
            type="text"
            placeholder="email address"
            className="p-4 my-4 w-full bg-transparent border border-solid border-white rounded-md"
          ></input>
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-4 my-4 w-full bg-transparent border border-solid border-white rounded-md"
          ></input>
          <p className="text-red-500">{errorMessage}</p>
          <button
            type="submit"
            className="p-4 my-6 w-full bg-red-700 rounded-md"
            onClick={handleButtonClick}
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
