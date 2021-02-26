import React, { useState } from "react"

import Layout from "./layout"
import MapContainer from "./MapContainer"
import LocationSearchInput from './LocationSearchInput';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
function onSubmit (){
//Do the things with the axios request



}
class NewPlace extends React.Component{
    constructor(props){
        super();
this.state = {
        lat:0,
        lng:0,
        type:"",
        condition: "ok"
}
this.handleLocation = this.handleLocation.bind(this);
    }
handleLocation = (location) => {
    console.log("location: " + location);
  /*  geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(results =>  
        this.setState({
        lat: results.lat,
        lng: results.lng,
    }))
    console.log(this.state.lat);
    console.log(this.state.lng);*/
}
render(){
return(
<Layout>
<div class="step">
    <div>
        <div class="circle">1</div>
        <div class="line"></div>
    </div>
    <div>
        <div class="title">Add location</div>
        <LocationSearchInput handle={this.handleLocation}/>
    </div>
    
</div>
<div class="step">
<div>
        <div class="circle">2</div>
        <div class="line"></div>
    </div>
    <div>
        <div class="title">Characteristics</div>
        <div class="body">
            <div class="row">
                <p class="d-inline col-3">Type</p>
        <input type="text" class="form-control d-inline col-8" placeholder="Steinway grand piano..." aria-label="Steinway grand piano" aria-describedby="basic-addon1"/>
        </div>
        <div class="row">
                <p class="d-inline col-3">Condition (Optional)</p>
        <input type="text" class="form-control d-inline col-8 " placeholder="Used, new..." aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        

        </div>
      </div>
      </div>

    
      <div class="step">
    <div>
        <div class="circle">3</div>
        <div class="line"></div>
    </div>
    <div>
        <div class="title"><form>
           <button onSubmit={onSubmit}type="submit" class="btn btn-primary submit-button">Submit</button>
           </form></div>
        </div>
           
    </div>
    </Layout>

)
}
}
export default NewPlace;