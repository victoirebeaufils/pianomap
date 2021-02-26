import React, { lazy, useState, useContext } from 'react';
import Layout from './layout';
import Axios from 'axios';
import {useHttpClient} from '../hooks/http-hook'
import ErrorModal from '../components/ErrorModal';
import {useHistory} from 'react-router-dom';
import { AuthContext } from '../context/auth-context';

const Login = (props) => {
    const auth = useContext(AuthContext);
    const [passwordState,setPasswordState] = useState("password");
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')
    const [name, setName] = useState('');
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const history = useHistory();
function togglePassword(){
if(passwordState == "text"){
    
setPasswordState("password");
}
else{
    setPasswordState("text");
    console.log("Text");
}

}
const handleSubmit = () => {
    console.log("Submission detected");
   console.log("email: " + email);
   console.log("password: " + password);
        //login
        Axios.post('http://localhost:5000/users/login', {
            email: email,
            password:password,
        })
        .then((response) => {
            //console.log("id: " + response.data.userId);
            auth.login(response.data.userId);

        }, (error) => {
            console.log(error);
        }
        )
        
        let path = `/`;
        history.push(path);
        
  
}
    return (
        <Layout>
      <ErrorModal error={error} onClear={clearError} />
            <div className="card">
                <nav>
                    <ul className="nav nav-pills nav-fill" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link" id="login-tab"href="#login" data-toggle="tab" role="tab"
                            aria-controls="login" aria-selected="true">Login</a>
                        </li>

                    </ul>
                </nav>
                <div className="card-body">
                    <div class="tab-pane fade show active"id="login" role="tabpanel" aria-labelledby="login-tab">
                        <a>email address</a>
                        <div className="input-group">
                            <input type="text" 
                                   className="form-control" 
                                   aria-label="" 
                                   placeholder="test@test.com"
                                   value = {email}
                                   onInput={e=>setEmail(e.target.value)} />
                        </div>
                        <a>Password</a>
                        <div className="input-group">
                            <input type={passwordState} 
                                   className="form-control" 
                                   aria-label="" 
                                   placeholder="password1234"
                                   value={password}
                                   onInput={e=>setPassword(e.target.value)} />
                        </div>
                    </div>
                  
                        <button type="submit" class="btn submit-button" onClick={handleSubmit}>Submit</button>
                    </div>
                   
                </div>
        </Layout>
    )

}
export default Login;