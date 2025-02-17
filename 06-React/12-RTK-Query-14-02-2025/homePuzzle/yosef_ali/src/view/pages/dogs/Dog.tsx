import React from 'react'
import { useParams } from 'react-router'
import { useGetDogsBreedQuery } from '../../../redux/servicses/dogService'
import {Link, Outlet} from "react-router";

const Dog = () => {
  const randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber); // מספר בין 0 ל-10

  const { dog } = useParams()
  if (!dog)
    return <div>Please provide a dog breed.</div>

  // Make a request to the Dog API to get the breed's details
  const {data, error, isLoading} = useGetDogsBreedQuery(dog)
  console.log(data)
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return (
    <div>
      <h2>Dog</h2>  
      <p>here details of {dog} dog: </p>  
      <img style={{width:"30vh"}}src={data?.message[randomNumber]} alt={dog} />
      <br />
      <Link to="/">Back to main</Link>
    </div>
  )
}

export default Dog