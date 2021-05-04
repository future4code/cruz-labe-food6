import React, { useEffect, useState } from 'react'
import useProtectedPage from 'hooks/useProtectedPage';
import labefood from 'services/labefood';
import CardHistoric from 'components/CardHistorico';
import { goToEditAdress, goToEditProfile } from 'routes/coordinator';
import { useHistory } from 'react-router';
import Footer from 'components/Footer';

function ProfilePage() {
  
  useProtectedPage()

  const history = useHistory()
  const [user, setUser] = useState({})

  const getProfile = (token) => {
    
    labefood.getProfile(token)
    .then((res) => {
      setUser(res.user)
    })
    .catch((err) => {
      alert(err.response.data.message)
    })
  }

  useEffect(() => {

    const token = window.localStorage.getItem("token")
    getProfile(token)
    }, [])


  return (<div>
    {user && <div>
        <div>
          <h1>Perfil</h1>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
          <h1>{user.cpf}</h1>
          <button onClick={() => goToEditProfile(history)}>Editar perfil</button>
        </div>
        
        <div>
          <h3>Endereço Cadastrado</h3>
          <h2>{user.address}</h2>
        <button onClick={() => goToEditAdress(history)}>Editar Endereço</button>
        </div>
      
        <div>
          <h3>Historico de Pedidos</h3>
          <hr/>
          <CardHistoric/>
        </div>

      </div>
      }
      {}
      {!user && <h1>Loading</h1>}
      <Footer/>
    </div>)
  }
  
  export default ProfilePage;