"use client"
import { Button } from '../../components/ui/button'
import {  Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'


function Header() {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='p-4 flex justify-between items-center shadow-sm fixed top-0 w-full z-10 bg-white'>

       
      <div className='flex items-center'>
        <Link href={'/'}>
          <Image
            src={'/logo2.png'}
            width={100}
            height={80}
            alt="logoimage.png"
            className="rounded-xl"
            priority
          />
        </Link>
      </div>

       
      <ul className='hidden md:flex gap-10 items-center'>
        <Link href={'/'}>
          <li className={`font-medium text-sm cursor-pointer hover:text-primary ${path == '/' && 'text-primary'}`}>
            For Sell
          </li>
        </Link>
        <Link href={'/rent'}>
          <li className={`font-medium text-sm cursor-pointer hover:text-primary ${path == '/rent' && 'text-primary'}`}>
            For Rent
          </li>
        </Link>
        <Link href={'/lease'}>
          <li className={`font-medium text-sm cursor-pointer hover:text-primary ${path == '/lease' && 'text-primary'}`}>
            For Lease
          </li>
        </Link>
        <Link href={'/legalAdvisory'}>
          <li className={`font-medium text-sm cursor-pointer hover:text-primary ${path == '/legalAdvisory' && 'text-primary'}`}>
            Legal Advisory
          </li>
        </Link>
        <Link href={'/contact'}>
          <li className={`font-medium text-sm cursor-pointer hover:text-primary ${path == '/contact' && 'text-primary'}`}>
            Contact Us
          </li>
        </Link>
      </ul>

      

       
      <div className='flex md:hidden items-center'>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

       
      {menuOpen && (
        <div className='absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden'>
          <Link href={'/'} onClick={() => setMenuOpen(false)}>
            For Sell
          </Link>
          <Link href={'/rent'} onClick={() => setMenuOpen(false)}>
            For Rent
          </Link>
          <Link href={'/lease'} onClick={() => setMenuOpen(false)}>
            For Lease
          </Link>
          <Link href={'/legalAdvisory'} onClick={() => setMenuOpen(false)}>
            Legal Advisory
          </Link>
          <Link href={'/contact'} onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          
        </div>
      )}
    </div>
  );
}

export default Header;

