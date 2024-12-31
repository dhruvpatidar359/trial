"use client"
import { Button } from '../../components/ui/button'
import { SignOutButton, UserButton, useUser } from '@clerk/nextjs'
import { Plus, Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"

function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='p-4 flex justify-between items-center shadow-sm fixed top-0 w-full z-10 bg-white'>

      {/* Logo */}
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

      {/* Desktop Navigation */}
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

      

      {/* Mobile Navigation */}
      <div className='flex md:hidden items-center'>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
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


// "use client"
// import { Button } from '@/components/ui/button'
// import { SignOutButton, UserButton, useUser } from '@clerk/nextjs'
// import { Plus } from 'lucide-react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React, { useEffect } from 'react'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"

// function Header() {
//   const path = usePathname();
//   const { user, isSignedIn } = useUser();
//   // useEffect(() => {
//   //   console.log(path)
//   // }, [])
//   return (
//     <div className='p-6 px-10 flex justify-between shadow-sm fixed top-0 w-full z-10 bg-white'>

//       {/* Left Side */}
//       <div className='flex gap-12 items-center'>
//         {/* Logo click */}
//         <Link href={'/'}>
//           {/* <Image src={'/logo.svg'} width={150} height={150} alt='logo' /> */}
//           {/* <Image src={'/logo2.png'} width={120} height={100} alt='logo' className='rounded-xl h-[60px]'/> */}
//           <Image
//           src={'/logo2.png'}
//           width={120}
//           height={100}
//           alt="logoimage.png"
//           className="rounded-xl"
//           priority // Add this line for LCP optimization
//         />

//         </Link>
//         {/* Header navigation */}
//         <ul className='hidden md:flex gap-10'>
//           <Link href={'/'} >
//             <li className={`'hover:text-primary 
//                  font-medium text-sm cursor-pointer'
//                  ${path == '/' && 'text-primary'}`}>For Sell</li>
//           </Link>
//           <Link href={'/rent'} >
//             <li className={`'hover:text-primary 
//                  font-medium text-sm cursor-pointer'
//                  ${path == '/rent' && 'text-primary'}`}>For Rent</li>
//           </Link>
//           <Link href={'/lease'} >
//             <li className={`'hover:text-primary 
//                  font-medium text-sm cursor-pointer'
//                  ${path == '/lease' && 'text-primary'}`}>For Lease</li>
//           </Link>
//           <Link href={'/legalAdvisory'} >
//             <li className={`'hover:text-primary 
//                  font-medium text-sm cursor-pointer'
//                  ${path == '/legalAdvisory' && 'text-primary'}`}>Legal Advisory</li>
//           </Link>
//         </ul>

//       </div>

//       {/* right side */}
//       <div className='flex gap-2 items-center'>

//         {/* post add button */}
//         <Link href={'/add-new-listing'}>
//           <Button className="flex gap-2"><Plus className='h-5 w-5' /> Post Your Ad</Button>
//         </Link>

//         {isSignedIn ?
        
//           <DropdownMenu>
//               {/* user icon */}
//               <DropdownMenuTrigger asChild>
//                   <Image src={user?.imageUrl} 
//                   width={35} height={35} alt='user profile'
//                   className='rounded-full'
//                   />
//               </DropdownMenuTrigger>

//               {/* dropdown display ka way */}
//               <DropdownMenuContent>

//                 <DropdownMenuLabel>My Account</DropdownMenuLabel>

//                 <DropdownMenuSeparator />

//                 <DropdownMenuItem>
//                   <Link href={'/user'}>Profile</Link> 
//                 </DropdownMenuItem>

//                 <DropdownMenuItem>
//                   <Link href={'/user#/my-listing'}>
//                     My Listing
//                   </Link>
//                 </DropdownMenuItem>
                
//                 <DropdownMenuItem> 
//                     <SignOutButton>Logout</SignOutButton> 
//                 </DropdownMenuItem>
              
//               </DropdownMenuContent>
//           </DropdownMenu>
//           : 
//           <Link href={'/sign-in'}>
//             <Button variant="outline">Login</Button>
//           </Link>
//         }

//       </div>
//     </div>
//   )
// }

// export default Header