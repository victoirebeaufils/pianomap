import React, { useState } from "react"

import Layout from "./layout"
import MapContainer from "./MapContainer"

const NewPlace = ( props ) =>{
return(
<Layout>
<div class="step">
    <div>
        <div class="circle">1</div>
        <div class="line"></div>
    </div>
    <div>
        <div class="title">Add location</div>
        <div class="body">
        <MapContainer/>
      </div>
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
        <input type="text" class="form-control d-inline col-9" placeholder="Username" aria-label="Steinway grand piano" aria-describedby="basic-addon1"/>
        </div>
        <div class="row">
                <p class="d-inline col-3">Condition</p>
        <input type="text" class="form-control d-inline col-9" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        </div>
        <div class="row">
                <p class="d-inline col-3">Hours</p>
                <div class="form-group">
    <div className="opening-hours d-inline ">
    <select class="form-control  d-inline col-3" id="exampleFormControlSelect1">
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
    </div>
    <p className="d-inline col-1">AM</p>
    <div className="closing-hours d-inline col-3"></div>
    <select class="form-control  d-inline col-3" id="exampleFormControlSelect1">
      <option>01</option>
      <option>02</option>
      <option>03</option>
      <option>04</option>
      <option>05</option>
      <option>06</option>
      <option>07</option>
      <option>08</option>
      <option>09</option>
      <option>10</option>
      <option>11</option>
      <option>12</option>
    </select>
    <p className="d-inline col-1">PM</p>
  </div>
        </div>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
  <label class="form-check-label" for="defaultCheck1">
    Make public
  </label>
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
        <div class="title">Extra information</div>
        <div class="body">
           <form>
           <button type="submit" class="btn btn-primary submit-button">Submit</button>
           </form>
      </div>
    </div>
    </div>
    </Layout>

)
}
export default NewPlace;