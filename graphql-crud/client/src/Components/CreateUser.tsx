import React, { useState } from "react";
import { CREATE_USER } from '../Graphql/Mutation';
import {useMutation} from '@apollo/client'; 

function CreateUser() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
     
    // Name of function when making the mutation
    const [createUser, {error}] = useMutation(CREATE_USER);

    return (
        <div className='createUser'>
            <input type="text" placeholder='Name'
            onChange={(e)=>{setName(e.target.value);}}
            />
            <input type="text" placeholder='Username'
            onChange={(e)=>{setUsername(e.target.value);}}
            />
            <input type="text" placeholder='Password'
            onChange={(e)=>{setPassword(e.target.value);}}
            />
            <button onClick={() => {
                createUser({
                    variables: {
                        name:name, 
                        username: username, 
                        password: password 
                    },
                });
            }}>Create User</button>
        </div>
    );
}

export default CreateUser;