import React, { useState } from "react"

import Layout from "./layout"
import MapContainer from "./MapContainer"
const Home =()=>{

    return(
  <Layout>
    <div class="alert alert-info alert-dismissible fade show" role="alert">
  This website is still in beta mode. Not all features will be available
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
   <MapContainer width="70wh" height="70vh"/>
   {/*
    <h1>Check out last contributions</h1>
    <ul class="list-group">
  <li class="list-group-item list-group-item-action">June 5 - added piano in West Lafayette, IN</li>
  <li class="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-action">Morbi leo risus</li>
  <li class="list-group-item list-group-item-action">Porta ac consectetur ac</li>
  <li class="list-group-item list-group-item-action">Vestibulum at eros</li>
   </ul>*/}
  </Layout>
)
}
export default Home;
