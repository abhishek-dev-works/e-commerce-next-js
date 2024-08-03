'use-client';
import React from 'react';
import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import { FaRegHeart } from 'react-icons/fa6';
import { FaUser } from 'react-icons/fa6';
function Navbar() {
  const navItems = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'Shop',
      path: '/shop',
    },
    {
      id: 3,
      title: 'About',
      path: '/about',
    },
    {
      id: 4,
      title: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <div className="sticky top-0  z-10 bg-almond-700 backdrop-filter backdrop-blur-lg bg-opacity-40 ">
      <div className="h-24  flex items-center justify-around border-b-2 z-10 relative">
        <div className="text-4xl font-extrabold ">logo</div>
        <div className="flex gap-10">
          {navItems.map((item) => (
            <Link href={item.path} key={item.id}>
              {item.title} 
            </Link>
          ))}
        </div>
        <div className="flex gap-6">
          <FaRegHeart color="#F56040" fontSize={24} />
          <FiShoppingCart fontSize={24} />
          <FaUser fontSize={22} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
