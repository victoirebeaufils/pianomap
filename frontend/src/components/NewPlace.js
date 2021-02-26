import React, { useState } from "react"

import Layout from "./layout"
import MapContainer from "./MapContainer"

function onSubmit (){
//Do the things with the axios request

}
const NewPlace = ( props ) =>{
  const [location, setLocation] = useState({lat:0, lng:0});
  const [type, setType] = useState("");
  const [condition, setCondition] = useState("ok");
  const [hours, setHours] = useState({opening: 0, closing: 0});
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
        <MapContainer width="70wh" height="70vh"/>
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
export default NewPlace;