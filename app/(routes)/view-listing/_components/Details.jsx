import { Button } from '../../../../components/ui/button';
import { Bath, BedDouble, CarFront, Drill, Home, LandPlot, MapPin, Share } from 'lucide-react'

import React, { useState } from 'react'
import { toast } from 'sonner'
import AgentDetail from './AgentDetail'

function Details({listingDetail}) {


    const handleShareClick = () => {
        const url = `${window.location.origin}/view-listing/21`; 
        navigator.clipboard.writeText(url)
          .then(() => {
            toast("Link copied to clipboard!");
          })
          .catch((err) => {
            // console.error("Failed to copy text: ", err);
          });
    };



    return listingDetail && (
        <div className='my-6 flex gap-2 flex-col'>
            <div className='flex justify-between items-center'>
                <div>
                    <h2 className='font-bold text-3xl'>₹ {listingDetail?.price}</h2>
                    <h2 className='text-gray-500 text-lg flex gap-2'>
                        <MapPin />
                        {listingDetail?.address}
                    </h2>
                </div>
                <Button className="flex gap-2" onClick={handleShareClick}> <Share /> Share</Button>
            </div>

            <hr></hr>

            <div className='mt-4 flex flex-col gap-3'>
                <h2 className=' font-bold text-2xl'>Key Features</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4 '>
                    <h2 className='flex gap-2 items-center bg-purple-100 
                    rounded-lg p-3 text-primary justify-center'>
                        <Home />
                        {listingDetail?.propertyType}
                    </h2>
                    <h2 className='flex gap-2 items-center justify-center bg-purple-100
                    rounded-lg p-3 text-primary'>
                        <Drill />
                        Built In {listingDetail?.builtIn} &nbsp;Sq.Ft. 
                    </h2>
                    <h2 className='flex gap-2 items-center justify-center bg-purple-100 rounded-lg p-3 text-primary'>
                        <LandPlot />
                        {listingDetail?.area} &nbsp;Sq.Ft.
                    </h2>
                    <h2 className='flex gap-2 items-center bg-purple-100 
                    rounded-lg p-3 text-primary justify-center'>
                        <BedDouble />
                        {listingDetail.bedroom} Bed
                    </h2>
                    <h2 className='flex gap-2 items-center justify-center bg-purple-100
                    rounded-lg p-3 text-primary'>
                        <Bath />
                        {listingDetail.bathroom} Bath
                    </h2>
                    <h2 className='flex gap-2 items-center justify-center bg-purple-100 rounded-lg p-3 text-primary'>
                        <CarFront />
                        {listingDetail.parking} Parking
                    </h2>
                </div>
            </div> 

            {/* Unit Converter Section */}
            <div className='mt-6 p-4 bg-purple-100 rounded-lg'>
                <h2 className='font-bold text-2xl mb-4'>Converted Area and Built-In Measurements</h2>
                <div className='flex flex-col gap-4'>
                    <div className='flex justify-between'>
                    <h3 className="text-lg font-semibold">Built-In: {listingDetail?.builtIn} Sq.Ft</h3>
                    <div className="flex gap-4">
                        <p>{((listingDetail?.builtIn || 0) * 0.0000229568).toFixed(4)} Acre</p> {/* 1 Sq.Ft = 0.0000229568 Acre */}
                        <p>{((listingDetail?.builtIn || 0) * 0.0000092903).toFixed(4)} Hectare</p> {/* 1 Sq.Ft = 0.0000092903 Hectare */}
                        <p>{((listingDetail?.builtIn || 0) * 0.092903).toFixed(2)} Sq.Meter</p> {/* 1 Sq.Ft = 0.092903 Sq.Meter */}
                        <p>{((listingDetail?.builtIn || 0) * 0.002296).toFixed(4)} Decimal</p> {/* 1 Sq.Ft = 0.002296 Decimal */}
                        <p>{((listingDetail?.builtIn || 0) * 0.0000929).toFixed(4)} Bigha</p> {/* 1 Sq.Ft = 0.0000929 Bigha */}
                    </div>

                    </div>
                    <div className='flex justify-between'>
                    <h3 className="text-lg font-semibold">Land Area: {listingDetail?.area} Sq.Ft</h3>
                        <div className="flex gap-4">
                            <p>{((listingDetail?.area || 0) * 0.0000229568).toFixed(4)} Acre</p> {/* 1 Sq.Ft = 0.0000229568 Acre */}
                            <p>{((listingDetail?.area || 0) * 0.0000092903).toFixed(4)} Hectare</p> {/* 1 Sq.Ft = 0.0000092903 Hectare */}
                            <p>{((listingDetail?.area || 0) * 0.092903).toFixed(2)} Sq.Meter</p> {/* 1 Sq.Ft = 0.092903 Sq.Meter */}
                            <p>{((listingDetail?.area || 0) * 0.002296).toFixed(4)} Decimal</p> {/* 1 Sq.Ft = 0.002296 Decimal */}
                            <p>{((listingDetail?.area || 0) * 0.0000929).toFixed(4)} Bigha</p> {/* 1 Sq.Ft = 0.0000929 Bigha */}
                        </div>

                    </div>
                </div>
            </div>

            <div className='mt-4'>
                <h2 className='font-bold text-2xl '>What's Special</h2>
                <p className='text-gray-600 '>{listingDetail?.description}</p>
            </div>

            <div>
                <h2 className='font-bold text-2xl '>Want More Details</h2>
                <p className='text-gray-600 '>Interested and want more details? Contact us to get different more information like layout, naksha, etc. Kindly contact and do give the shareable link of this post</p>
            </div>
            <div>
                <h2 className='font-bold text-2xl '>Contact us at:</h2>
                <AgentDetail listingDetail={listingDetail} />
            </div>
        </div>
    );
}

export default Details;

