import React from 'react'
import useProtectedPage from 'hooks/useProtectedPage';

function ProfilePage() {
  
  useProtectedPage()

    return (
      <h1>ProfilePage</h1>
    )
  }
  
  export default ProfilePage;