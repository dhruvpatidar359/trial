

import React from 'react';
import { MapPin } from 'lucide-react';

function SimpleAddressInput({ setSelectedAddress, setCoordinates }) {
  const handleInputChange = (event) => {
    const address = event.target.value;
    setSelectedAddress(address);
    setCoordinates({ lat: 0, lng: 0 });
  };

  return (
    <div className="flex items-center w-full">
      <MapPin className="h-10 w-10 p-2 rounded-l-lg text-primary bg-purple-200" />
      <input
        type="text"
        placeholder="Enter Property Address"
        onChange={handleInputChange}
        className="w-full p-3 border rounded-r-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
    </div>
  );
}

export default SimpleAddressInput;





// import { MapPin } from 'lucide-react';
// import React from 'react'
// import GooglePlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete'

// function GoogleAddressSearch({selectedAddress,setCoordinates}) {
//   return (
//     <div className='flex items-center w-full'>
//         <MapPin className='h-10 w-10 p-2 rounded-l-lg text-primary bg-purple-200'/>
//           <GooglePlacesAutocomplete
//                 apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
//             selectProps={{
//                 placeholder:'Search Property Address',
//                 isClearable:true,
//                 className:'w-full',
//                 onChange:(place)=>{
//                     console.log(place);
//                     selectedAddress(place);
//                     geocodeByAddress(place.label)
//                     .then(result=>getLatLng(result[0]))
//                     .then(({lat,lng})=>{
                       
//                         setCoordinates({lat,lng})
//                     })
//                 }
//             }}
        
//           />
//     </div>
//   )
// }

// export default GoogleAddressSearch
