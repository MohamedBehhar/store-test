import Link from "next/link"
import { FiMenu } from 'react-icons/fi'
import React, { useState } from 'react';
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
	<nav className=" relative">
    <h1 className="text-red-400 font-fancy py-3 text-lg border-l text-center shadow-sm ">Fake Store</h1>
    <FiMenu 
    className="absolute top-3 text-2xl right-2 cursor-pointer text-gray-700 sm:hidden"
    onClick={() => setOpenNav(!openNav)}/>
    <ul className={` ${openNav ? "openNav" : "closeNav"}`}>
      <li className="">
        <Link href="/" >
          <a  className="">Home</a>
        </Link>
      </li>
      <li>
        <Link href="/products">
          <a className="">Products</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a className="">Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar