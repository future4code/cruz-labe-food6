import useProtectedPage from 'hooks/useProtectedPage';
import React from 'react'

function SearchPage() {
  
    useProtectedPage()

    return (
      <div> 
        <h1>SearchPage</h1>
        <input name="pesquisar" type="text" placeholder="pesquisar" required/>
      </div>
    )
  }
  
  export default SearchPage;