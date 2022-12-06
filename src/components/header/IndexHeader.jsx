import React, {useState, useContext, useEffect, useRef} from 'react'
import {useCartDetails} from '@/context/useCartDetails'
import { Link } from "react-router-dom"
import logoJade from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";



import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import NavLinkHeader from "@/components/header/NavLinkHeader";

import CardDetailsHeader from '@/components/header/CartDetailsHeader';
import ProfileHeader from './ProfileHeader';

let useClickOutside = (handler) => {
  let domClickOutside = useRef()
  useEffect(() => {
    let handlerOutside =  (event) =>{
      if (!domClickOutside.current.contains(event.target)){

        handler()
      }
    };
    document.addEventListener("mousedown",handlerOutside);
    return () => {
      document.removeEventListener("mousedown", handlerOutside)
    }
  }, )
  return domClickOutside
}

const IndexHeader = () => {
  const{cartQuantity} = useContext(useCartDetails)

  const [isOpenMenu, setIsOpenMenu ] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)

  const [isOpenProfile, setIsOpenProfile] = useState(false)

 

  const handleOpenMenu = () => {
    setIsOpenMenu(true)
  }
  const handleCloseMenu = () => {
    setIsOpenMenu(false)
  }
  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart)
  }
  const handleOpenProfile = () => {
    setIsOpenProfile(!isOpenProfile)
  }
  
  const domClickOutsideProfile = useClickOutside(() => {
    setIsOpenProfile(false)
  })
  const domClickOutsideCart = useClickOutside(() => {
    setIsOpenCart(false)
  })
  const domClickOutsideMenu = useClickOutside(() => {
    setIsOpenMenu(false)
  })
  
  return (
    <div>
      
    <header className="  z-10 relative container mx-auto flex items-center gap-8 p-4 md:p-0">
      <button className=" md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <Link to="/">
      <img className=" mx-4 mr-auto mb-1 h-10 md:mr-5" 
            src={logoJade} 
            alt="Logo Jade" />
      </Link>
      <nav 
        className={` bg-white mx-auto text-green-primary flex flex-col font-bold md:static md:mr-auto md:flex md:h-auto md:flex-row md:gap-4  md:p-0  ${
          isOpenMenu 
            ?  'fixed top-0 left-0 z-9 flex h-full w-2/5 flex-col gap-y-[1px]  p-5  md:p-8' : 'hidden'
            }`}
            ref={domClickOutsideMenu}>
          <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
            <CloseIcon />
          </button>
          <NavLinkHeader text="Products" />
          
          <NavLinkHeader text="Colections" />
          <NavLinkHeader text="Contact" />
          
      </nav>
      <div className=" ml-auto flex gap-4"  >
        <button 
          onClick={handleOpenCart}
          ref={domClickOutsideCart}
          className="relative">
          <CartIcon />
          <span className=' absolute bg-green-primary px-1 top-1 right-0 text-[0.6rem] rounded-lg text-white font-bold'>
            {cartQuantity}
          </span>
        </button>
        <button className=' min-w-fit'  onClick={handleOpenProfile} ref={domClickOutsideProfile}>
       
          <img  src={AvatarImage} className=" w-10 mx-4 ml-auto" alt=""></img>
        </button>
          
        {
          isOpenProfile && <ProfileHeader  />
        }
          
        {
          isOpenCart && <CardDetailsHeader />
        }
      </div>
    </header>
    <span className="container mb-2 mx-auto h-[1px] w-full bg-gray-500 md:block"></span>
    </div>
  );
};

export default IndexHeader;
