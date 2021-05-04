import React from 'react'
import useProtectedPage from 'hooks/useProtectedPage';

function RestaurantPage() {

  useProtectedPage()

  return (
      <h1>RestaurantPage</h1>
    )
  }
  
  export default RestaurantPage;