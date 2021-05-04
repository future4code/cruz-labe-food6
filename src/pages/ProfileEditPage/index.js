import React, { useEffect } from 'react'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, P, ButtonEats, Header} from './styled'
import arrow from '../../assets/arrow.png'
import useProtectedPage from 'hooks/useProtectedPage';
import labefood from 'services/labefood';
import { goToProfile } from 'routes/coordinator';
import { useHistory } from 'react-router';

function ProfileEditPage() {
    
    useProtectedPage()
    
    const formDefault = {
        name: "",
        email: "",
        cpf: "",
    }

    const history = useHistory()
    const token = window.localStorage.getItem("token")
    const [form, handleInputChange, resetForm, setForm] = useForm(formDefault)

    useEffect(() => {
        requestProfile()
    }, [])

    const requestProfile = () => {
        labefood.getProfile(token)
        .then(res => {
            setForm({name: res.user.name, email: res.user.email, cpf: res.user.cpf})
        })
        .catch( err => {
            console.log(err)
        })
    }

    const editProfile = (event) => {
        event.preventDefault()
        labefood.updateProfile(form, token)
        .then((res) => {
            alert("Modificado com sucesso!")
            console.log(res)
            goToProfile(history)
        })
        .catch((err) => {
            alert("Erro ao modificar")
            console.log(err)
        })
    }

    return (
      <Container>
        <Header>
            <img src={arrow}/>
            <P>Editar</P>
        </Header>
      
      <InputContainer>
          <form onSubmit={editProfile}>
              <TextField
                  name={'name'}
                  value={form.name}
                  onChange={handleInputChange}
                  label={"Nome"}
                  placeholder={'Nome Completo'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  autoFocus
                  required
                  type={'text'}
              />

              <TextField
                  name={'email'}
                  value={form.email}
                  onChange={handleInputChange}
                  label={"E-mail"}
                  placeholder={'email@email.com'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'email'}
              />
                     <TextField
                  name={'cpf'}
                  value={form.cpf}
                  onChange={handleInputChange}
                  label={"CPF"}
                  placeholder={'000.000.000-00'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
                     
              <ButtonEats
              type={'submit'}
              fullWidth
              variant={'contained'}
              color={'primary'}
              margin={'normal'}
              >
                  <P>Salvar</P>
              </ButtonEats>
          </form>
      </InputContainer>
  </Container>
    )
  }
  
  export default ProfileEditPage;