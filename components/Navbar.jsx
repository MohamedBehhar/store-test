import Link from "next/link"
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown} from 'react-icons/io'
import React, { useState, useRef, useEffect} from 'react';

const Navbar = () => {
  const subMenu = [
    {name: "All"},
    {name: "Men's clothing"},
    {name: "Women's clothing"},
    {name: "Jewelery"},
    {name: "Electronics"},
  ]
  const [openNav, setOpenNav] = useState(false);
  const [showProducts, setShowProducts] = useState(false);



  return (
	<nav className=" relative">
    <Link href={"/"}>
      <div className="flex justify-center  z-[100]"  >
        <h1 className="text-red-400 font-fancy py-3 text-lg border-l text-center  cursor-pointer">Fake Store</h1>
      </div>
    </Link>
    <div className="absolute top-3 text-2xl right-2 cursor-pointer text-gray-700 sm:hidden" 
    onClick={() => setOpenNav(!openNav)}>
      {openNav?  <FiMenu /> : <AiOutlineClose/>}
    </div>
    <ul className={`bg-white font-poppins leading-8  text-gray-700 shadow-md  w-full  absolute  transition-all duration-200 ease-in text-left pl-5 ${openNav ? "opacity-0" : "top-12 z[1] flex flex-col justify-around py-3"}`} >
      <li className={`${openNav ? "hidden" : ""}`}>
        <Link href="/" >
          <a className={` ${openNav ? "hidden" : ""}`}   
          onClick={() => setOpenNav(!openNav)}>Home</a>
        </Link>
      </li>
      <li >
        <Link href="/products" >
          <a  className={`${openNav ? "hidden" : ""}`}  
          onClick={() => setShowProducts(!showProducts)}>Products 
            <span className="inline-block">
              <IoIosArrowDown className={`transition-all ease-in duration-200 ${showProducts? "rotate-180": ""}`} />
            </span>
          </a>
        </Link>
        <ul className={`${showProducts? " h-0 transition-all ease-in duration-300 opacity-0" : "h-[160px] transition-all ease-in duration-300 opacity-100"}`}>
          {subMenu.map(el => (
            <li key={el.name} className={`pl-4 text-s text-gray-600 cursor-pointer ${showProducts? "hidden" : ""}`}>
              <a onClick={() => setOpenNav(!openNav)}>
                {el.name}
              </a>
            </li>
          ))}         
          </ul>
      </li>
      <li>
        <Link href="/contact">
          <a className={`${openNav ? "hidden" : ""}`}
          onClick={() => setOpenNav(!openNav)}>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar