import React, {useEffect} from 'react'
import labefood from 'services/labefood'
import useProtectedPage from 'hooks/useProtectedPage';

function HomePage() {

    useProtectedPage()

    useEffect(() => {
      const token = window.localStorage.getItem('token')
      console.log(token);
      labefood.getRestaurants(token)
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err.response.data.message)
      })

    }, [])    
    return (
      <div>
        <h1>HomePage</h1>
        <input />
      </div>
    )
  }

  export default HomePage;