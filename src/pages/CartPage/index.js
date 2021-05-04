import React from 'react'
import useProtectedPage from 'hooks/useProtectedPage';

function CartPage() {
    useProtectedPage()

    return (
      <h1>CartPage</h1>
    )
  }
  
  export default CartPage;