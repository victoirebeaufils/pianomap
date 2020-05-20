import React, {useState} from 'react';
import {GoogleMap, withScriptjs,withGoogleMap, Marker, InfoWindow} from 'react-google-maps'


const Map = props =>{
    const [selectedPark, setSelectedPark] = useState(null);
return <GoogleMap style={{width:'70vw',height:'70vh'}}
defaultZoom={10} 
defaultCenter={{lat:-15, lng:12}}

center={ (props.mapLat && props.mapLng)?{lat:props.mapLat, lng:props.mapLng} : {lat:0, lng:0}}>
    {props.parks.map(park =>(
        <Marker key={park.id} position={{lat:park.lat,
            lng: park.lng}}
            onClick={()=>{
                setSelectedPark(park)
            }}
      />  
    )
    )}
    {selectedPark && (
        <InfoWindow
        position={{
            lat:selectedPark.lat,
            lng: selectedPark.lng
        }}
        onCloseClick={()=>{
            setSelectedPark(null)
        }}
            ><div>
                <h6>{selectedPark.name}</h6>
                <p>{selectedPark.description}</p>
                </div></InfoWindow>
    )}
</GoogleMap>

}
const WrappedMap = withScriptjs(withGoogleMap(Map))
export default WrappedMap;