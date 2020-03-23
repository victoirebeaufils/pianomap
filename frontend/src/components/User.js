import React from 'react';
import Layout from './layout';
import ProfilePicture from '../images/profile-picture.jfif';
const User = (props)=>{

return(
    <Layout>
        <div class="container">
            <div class="card">
            <div class="card-header">
        <div class="image-circle " style ={ { backgroundImage: "url('https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')" } }>
        {/*Fix img size
        <img class="img-fluid" src={ProfilePicture}/>
        */}
        </div>
        <h2 class="card-title text-center">user_1234</h2>
        </div>
        </div>
       
        <ul class="list-group">
  <li class="list-group-item list-group-item-action">June 5 - added piano in West Lafayette, IN</li>
  <li class="list-group-item list-group-item-action">Dapibus ac facilisis in</li>
  <li class="list-group-item list-group-item-action">Morbi leo risus</li>
  <li class="list-group-item list-group-item-action">Porta ac consectetur ac</li>
  <li class="list-group-item list-group-item-action">Vestibulum at eros</li>
</ul>
        
        </div>
 
    </Layout>
);

}
export default User;