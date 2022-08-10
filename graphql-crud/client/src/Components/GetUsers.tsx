import React from "react";
import {GET_ALL_USERS} from '../Graphql/Queries';
import {useQuery, useMutation} from '@apollo/client';
import { DELETE_USER } from "../Graphql/Mutation";

function GetUsers() {
    const {data} = useQuery(GET_ALL_USERS);
    
    const [deleteUser, {error}] = useMutation(DELETE_USER);
    return (
        <div>{data && 
            (data.getAllUsers.map((user: any) => {
            return (
                <div>
                    {user.name} - {user.username}
                    <button onClick={()=> {
                        deleteUser({
                            variables: {
                                id:user.id
                            }
                        })
                        }
                    }>
                    Delete
                    </button>
                </div>
            )
        }))}</div>
    )
}

export default GetUsers;