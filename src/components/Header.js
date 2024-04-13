import {  signOut } from "firebase/auth";
import { netflixLogo, userLogo } from '../utils/URL'
import { auth } from '../utils/firebase';
import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {

  const location =useLocation();
  const navigate=useNavigate();
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={netflixLogo} alt='logo' />
        <div className='flex'>
        {(location.pathname!=="/")
        && <div className="flex "><img className='w-16 h-16 rounded-lg text-center' src={userLogo} alt="user Logo here" />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign out)</button></div> }

          

      </div>
      </div>
  )
}

export default Header
