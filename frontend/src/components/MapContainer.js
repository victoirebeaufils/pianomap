import React, {useState} from 'react';
import WrappedMap from "./WrappedMap"
import LocationSearchInput from "./LocationSearchInput"
const MapContainer = () => {
    const [mapLat,setMapLat] = useState(0);
    const [mapLng, setMapLng] = useState(0);
    var count = 0;
    const parks = [
      {
          id: 1,
          name: "Park 1",
          description :"Desc 1",
          lat: -15,
          lng:12,
      },
      {
          id: 2,
          name:"Park 2",
          description: "Desc 2",
          lat: -16,
          lng:13,
      },
  ]
    function handleMapChange(lat,lng){
    setMapLat(lat);
    setMapLng(lng);
    }
function addMarker(){
    const newMarker = {
      id: count++,
       name: "",
       description: "",
       lat: mapLat,
       lng: mapLng,
    }
    parks.push(newMarker);
    console.log(parks);
    return (
     console.log("New marker added")
    )
}
return(
<div>
<div className="container">
    <div className="row">
        <div className="col-lg-4 col-sm-10 col-md-8 ">
    <LocationSearchInput onChange={handleMapChange} addMarker =  {addMarker}/>
    
    </div>
    </div>
    </div>
  
    <div style={{width:'70vw',height:'70vh'}}>
    <WrappedMap 
    loadingElement = {<div style={{height:"100%"}}/>}
    containerElement ={<div style={{height:"100%"}}/>}
    mapElement={<div style={{height:"100%"}}/>}
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${env.process.GOOGLE_API_KEY}`}
    mapLat={mapLat} 
    mapLng={mapLng}
    parks = {parks}
    className = "map"/>
    </div>
    </div>);
}
export default MapContainer;