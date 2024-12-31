"use client"
import { Button } from '../../../../components/ui/button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function AgentDetail({ listingDetail }) {
  return (
    <div className="flex gap-5 items-center justify-between p-5 rounded-lg shadow-md border my-6  flex-wrap">
      <div className="flex items-center gap-6">
        <Image
          src={listingDetail?.profileImage}
          alt="profileImage"
          width={60}
          height={60}
          className="rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">{listingDetail?.agentName}</h2>
          <h2 className="text-gray-500">{listingDetail?.agentEmail}</h2>
          <h2 className="text-gray-700 mt-2">Mobile: {listingDetail?.agentPhone}</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        
        {/* <Link href={`https://wa.me/91${listingDetail?.agentWhatsapp}`}  className="w-full"> */}
        <Link href={`https://wa.me/917987202918`}  className="w-full">
            <Button size="sm" variant="destructive">
                Chat @ Whatsapp
            </Button>
        </Link>
        {/* <Button>Send Message</Button> */}
      </div>
    </div>
  );
}

export default AgentDetail;


// import { Button } from '@/components/ui/button'
// import Image from 'next/image'
// import React from 'react'

// function AgentDetail({listingDetail}) {
//   return (
//     <div className='flex gap-5 items-center justify-between 
//     p-5 rounded-lg shadow-md border my-6'>
//         <div className='flex items-center gap-6'>
//             <Image src={listingDetail?.profileImage}
//             alt='profileImage'
//             width={60}
//             height={60}
//             className='rounded-full'
//             />
//             <div>
//                 <h2 className='text-lg font-bold'>{listingDetail?.fullName}</h2>
//                 <h2 className='text-gray-500'>{listingDetail?.createdBy}</h2>
//             </div>
//         </div>
        
//         <Button>Send Message</Button>
//     </div>
//   )
// }

// export default AgentDetail