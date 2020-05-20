import React from 'react';
import Layout from './layout';
import MapContainer from './MapContainer';

const Place = (props) => {
    return(
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div class="row">
      <div class="col">
        <p>{props.title}</p>
        <p>{props.description}</p>
        <p>{props.address}</p>
        {console.log(props.location)}
        <p>Lat and lng:</p>
        <p>Piano type</p>
        <p>Piano condition</p>
        <p>Hours</p>
        <p>Place on the map</p>
        </div>
        
    { props.withMap?
 <div class="col"><MapContainer width="50wh" height="50vh" mapLat={props.mapLat? props.mapLat:null} mapLng={props.matLng? props.matLng: null}></MapContainer></div> : null
 
}
</div>
</div>
    </div>
    </div>
    )

}
export default Place;