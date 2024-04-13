import {  onAuthStateChanged, signOut } from "firebase/auth";
import { SupportedLanguages, netflixLogo, userLogo } from '../utils/URL'
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import {changeLanguage} from "../utils/configSlice";
const Header = () => {
  const dispatch=useDispatch();
  const location =useLocation();
  const navigate=useNavigate();
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
    // unsubscribe when component unmount
    return() => unsubscribe();
  }, []);
  const handleGptSearchClick=()=>{
    //toggle gptsearch
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value)); 
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div className="flex items-center">
        <img className='w-44' src={netflixLogo} alt='logo' />
        {(location.pathname!=="/") && 
        <div className="flex">
        <button className="text-white  mx-2 px-2 bg-black rounded-lg hover:text-gray-500">Movies</button>
        <button className="text-white  mx-2 px-2 bg-black rounded-lg hover:text-gray-500">TV Shows</button>
        <button className="text-white  mx-2 px-2 bg-black rounded-lg hover:text-gray-500">New And Popular</button>
        </div>
        }
        </div>
        <div className='flex'>
        {(location.pathname!=="/")
        && <div className="flex ">
          {showGptSearch && (<div>
          <select className="h-10 text-white mt-3 mr-6 px-2  bg-red-700 rounded-xl" onChange={handleLanguageChange}>
            {SupportedLanguages.map(lang=><option className="" key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            
          </select>
          </div>)}
          
          
          <button onClick={handleGptSearchClick} className="h-10 text-white mt-3 mr-6 px-2 bg-red-700 rounded-xl">{showGptSearch ? "Homepage" : "GPT Search"}</button> <img className='w-10 h-10 mt-3 mr-6 rounded-lg text-center' src={userLogo} alt="user Logo here" />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign out)</button></div> }

          

      </div>
      </div>
  )
}

export default Header
