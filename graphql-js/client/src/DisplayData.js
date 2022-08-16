import React from 'react'
import {useQuery, gql} from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers {
        users {
            id
            name
            age
            username
            nationality
        }
    }
`
const QUERY_ALL_MOVIES = gql`
    query GetMovies {
        movies {
        id
        name  
        yearOfPublication
        }
    }
`
function DisplayData() {
    const {data, loading, error} = useQuery(QUERY_ALL_USERS);
    const {data: movieData} = useQuery(QUERY_ALL_MOVIES);
    if (loading) {
        return <h1>Loading...</h1>
    }
    if (data) {
        console.log(data);
    }
    if (error) {
        console.log(error);
    }
  return (
    <>
    <div>{data && data.users.map((user) => {
        return (
        <div>
            <p>Name:{user.name}</p>
            <p>Age:{user.age}</p>
            <p>Username:{user.username}</p>
            <p>Nationality:{user.nationality}</p>
        </div>
        )
    })}
    </div>
    <h2>List of Movies</h2>
    <div>{movieData && movieData.movies.map((movie) => {
        return (
        <div>
            <p>Movie Name: {movie.name}</p>
        </div>
        )
    })}
    </div>
    </>
   
    
  )
}

export default DisplayData