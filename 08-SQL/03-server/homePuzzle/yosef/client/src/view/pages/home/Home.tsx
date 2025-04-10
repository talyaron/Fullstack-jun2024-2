import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
        <h1>Welcome to Yosef WebSite</h1>
        <h2><Link to="/register">Let's Register</Link></h2>
        <h2><Link to="/products">Let's Add Products</Link></h2>

    </div>
  )
}

export default Home