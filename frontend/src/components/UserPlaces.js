import React, {useState, useEffect} from 'react';
import Place from './Place';
import axios from 'axios';
const UserPlaces = () =>{
    const [places, setPlaces] = useState([{}]);
    const listPlaces =places.map((place)=> 
        <Place withMap={true}
         title={place.title} 
         description={place.description} 
         address={place.address}
        location = {place.location}
         />
            )
    useEffect(()=>{
        axios.get('http://localhost:5000/places/user/5e2b4f7c10f37b5f0013a3be')
        .then(function (response) {
         setPlaces(response.data.places);
        console.log(places[0].location.lng);
        console.log(places[0].location.lat);
        })
        .catch(function (error) {
          console.log(error);
        });

       
      /*
       fetch(
        'http://localhost:5000/places/5e7ebba88f7b6e4674396f16',
        {   method: 'GET',
            mode: 'no-cors',
         }
       ).then( response => { console.log(response.json);})
        .catch(err => console.log(err))
*/
    })
    return(
        <div>
            {listPlaces}
</div>
    )
}

export default UserPlaces;