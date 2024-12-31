import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../components/ui/select"
import { Bath, Bed, BedDouble, CarFront } from 'lucide-react'
  
function FilterSection({setBathCount,setBedCount,setParkingCount,setHomeType}) {
  return (
    <div className='px-3 py-2 grid grid-cols-2 
    md:flex gap-2'>

        <Select onValueChange={setBedCount}>
            {/* place holder for bed */}
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Bed" />
            </SelectTrigger>
            {/* dropdown */}
            <SelectContent>
                <SelectItem value="2">
                    <h2 className='flex gap-2'>
                        <BedDouble className='h-5 w-5 text-primary'/> 2+</h2>
                </SelectItem>
                <SelectItem value="3">
                    <h2 className='flex gap-2'>
                        <BedDouble className='h-5 w-5 text-primary'/> 3+</h2>
                </SelectItem>
                <SelectItem value="4">
                    <h2 className='flex gap-2'>
                        <BedDouble className='h-5 w-5 text-primary'/> 4+</h2>
                </SelectItem>
                <SelectItem value="5">
                    <h2 className='flex gap-2'>
                        <BedDouble className='h-5 w-5 text-primary'/> 5+</h2>
                </SelectItem>
            </SelectContent>
        </Select>

        <Select  onValueChange={setBathCount}>
            {/* placeholder for bath */}
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Bath" />
            </SelectTrigger>
            {/* dropdowns */}
            <SelectContent>
                <SelectItem value="2">
                    <h2 className='flex gap-2'>
                        <Bath className='h-5 w-5 text-primary'/> 2+</h2>
                </SelectItem>
                <SelectItem value="3">
                    <h2 className='flex gap-2'>
                        <Bath className='h-5 w-5 text-primary'/> 3+</h2>
                </SelectItem>
                <SelectItem value="4">
                    <h2 className='flex gap-2'>
                        <Bath className='h-5 w-5 text-primary'/> 4+</h2>
                </SelectItem>
                <SelectItem value="5">
                    <h2 className='flex gap-2'>
                        <Bath className='h-5 w-5 text-primary'/> 5+</h2>
                </SelectItem>
            </SelectContent>
        </Select>

        <Select  onValueChange={setParkingCount}>
            {/* Placeholder for parking */}
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Parking" />
            </SelectTrigger>
            {/* dropdowns */}
            <SelectContent>
                <SelectItem value="1+">
                        <h2 className='flex gap-2'>
                        <CarFront className='h-5 w-5 text-primary'/> 1+</h2>
                </SelectItem>
                <SelectItem value="2">
                    <h2 className='flex gap-2'>
                    <CarFront className='h-5 w-5 text-primary'/> 2+</h2>
                </SelectItem>
                <SelectItem value="3">
                    <h2 className='flex gap-2'>
                    <CarFront className='h-5 w-5 text-primary'/> 3+</h2>
                </SelectItem>
            </SelectContent>
        </Select>

        <Select  onValueChange={(value)=>value=='All'?
        setHomeType(null): setHomeType(value)}>
            {/* placeholder */}
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Home Type" />
            </SelectTrigger>
            {/* dropdown */}
            <SelectContent>
                <SelectItem value="All">
                    All
                </SelectItem>
                <SelectItem value="Flat">
                    Flat
                </SelectItem>
                <SelectItem value="Bungalow">
                    Bungalow
                </SelectItem>
                <SelectItem value="PG">
                    P.G.
                </SelectItem>
                <SelectItem value="Land">
                    Land
                </SelectItem>
            </SelectContent>
        </Select>
    </div>
  )
}

export default FilterSection