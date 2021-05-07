import React, { useEffect, useState } from 'react'
import useProtectedPage from 'hooks/useProtectedPage';
import labefood from 'services/labefood';
import CardHistoric from 'components/CardHistorico';
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import {ProfileContainer, IconEdit, Container, Header, P, P1, AddressContainer, Title, Address, WhiteDiv} from './styled'
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


  return (
  <Container>
      <Header>
        <P>Meu Perfil</P>
      </Header>
    {user && <div>
        <ProfileContainer>
          <IconEdit>
          <P1>{user.name}</P1>
          <CreateOutlinedIcon onClick={() => goToEditProfile(history)}/>
          </IconEdit>
          <P1>{user.email}</P1>
          <P1>{user.cpf}</P1>
          </ProfileContainer>
        
        <AddressContainer>
          <Title>Endereço Cadastrado</Title>
          <IconEdit>
          <Address>{user.address}</Address>
          <CreateOutlinedIcon onClick={() => goToEditAdress(history)}/>
          </IconEdit>
        </AddressContainer>

        <div>
          <P>Historico de Pedidos</P>
          <hr/>
          <CardHistoric/>
        </div>

      </div>
      }
      {}
      {!user && <h1>Loading</h1>}
      <WhiteDiv>
      </WhiteDiv>
      <Footer/>
    </Container>)
  }
  
  export default ProfilePage;