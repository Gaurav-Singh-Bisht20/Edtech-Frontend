import React, { useEffect, useState } from 'react'
import {NavbarLinks} from "../../data/navbar-links";
import fontLogo_dark from "../../assets/Logo/fontLogo_dark.png"
import { Link,matchPath } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiShoppingCart } from "react-icons/fi";
import ProfileDropDown from '../core/Auth/ProfileDropDown';
import { apiConnector } from '../../services/apiconnector';
import { categories } from '../../services/apis';
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  const {token} = useSelector((state)=>state.auth);
  const {user} = useSelector((state)=>state.profile);
  const {totalItems} = useSelector((state)=>state.cart);

  const [sublinks,setSublinks] = useState([]);
  const fetchSublinks = async()=>{
    try{
        const result = await apiConnector("GET", categories.CATEGORIES_API);
        setSublinks(result.data.data);
    }catch(error){
      console.log("couldn't get courses list")
    }
  }
  useEffect(()=>{
    fetchSublinks();
  },[])

  const location = useLocation();
  const matchRoute = (route)=>{
    return matchPath ({path:route},location.pathname);
  }


  return (
    <div className='flex mx-auto h-16  w-full border-b-[1px] border-brown-50'>
        <div className='flex justify-between w-10/12 mx-auto items-center '>
          {/* logo */}
          <Link to={"/"}>
          <img src={fontLogo_dark} alt="" className='w-20 h-[62px]'/>
          </Link>

          {/* NavbarLinks */}
          <nav>
            <ul className='flex gap-5 text-richblack-25'>{
              NavbarLinks.map((link,index) =>{
               return <li key={index}>
                 {
                  link.title === "Catalog"? (<div className='flex items-center gap-1 group relative'>
                    {link.title}
                    <RiArrowDropDownLine className='' />
                    <div className='invisible absolute left-[50%] top-[200%] flex flex-col rounded-md
                     bg-richblack-5 p-4 translate-x-[-50%] translate-y-[-50%] text-richblack-900
                      opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100
                       lg:w-[300px]'>

                    <div className='absolute left-[55%] top-[-10%] h-6 w-6 rotate-45 bg-richblack-5 '>

                    </div>

                    </div>
                  </div>):(
                    <Link to={link?.path}>
                      <p className={`${matchRoute(link?.path)? "text-yellow-25":"text-white"}`}>{link.title}</p>
                    </Link>
                  )
                 }
                </li>
              })
            }</ul>
          </nav>

          {/* login signUp */}

          <div className='flex gap-x-4 '>
            {
              user && user?.accountType != "Instructor" && (
                <Link to={"/dashBoard"} className='relative'>
                  <FiShoppingCart />
                  {
                    totalItems>0 && (
                      <span>{totalItems}</span>
                    )
                  }
                </Link>
              )
            }
            
            {
              token === null && (
                <Link to="/login">
                  <button className='hover:bg-richblack-400 hover:border hover:border-black hover:rounded px-3 py-2 text-white'>login</button>
                </Link>
              )
            }

            {
              token === null && (
                <Link to="/signUp">
                  <button className='hover:bg-richblack-400 hover:border hover:border-black hover:rounded px-3 py-2 text-white'>Sign up</button>
                </Link>
              )
            }

            {
              token !== null && <ProfileDropDown/>
            }


          </div>


        </div>

    </div>
  )
}

export default Navbar