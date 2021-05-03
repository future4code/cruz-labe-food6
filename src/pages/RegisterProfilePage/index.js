import React from 'react'
import labefood from '../../services/labefood'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, RegisterButtonContainer, P, Img, ButtonEats} from './styled'
import { goToRegisterProfile } from 'routes/coordinator';
import logo from '../../assets/logo.png'


function RegisterProfilePage() {

    const registerProfileForm = {
      name: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassWord: ""
    }

    const history = useHistory()
    const [form, handleInputChange] = useForm(registerProfileForm)

    const createProfile = (event) => {
      event.preventDefault()
      if (form.password === form.confirmPassWord) {

        const body = {...form}
        delete body.confirmPassWord

        labefood.signup(body)
        .then(res => { 
          window.localStorage.setItem("token", res.token) 
          goToRegisterAdress(history)})
        .catch( err => {alert(err.response.data.message)})

      }
      else {
        alert("As senhas devem ser idênticas")
      }

    }

    return (
      <Container>
      <Img src={logo}/>
      <P>Cadastrar</P>
      <InputContainer>
          <form  //onSubmit={onSubmitForm}
          >
              <TextField
                  name={'name'}
                  //value={}
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
                  //value={}
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
                  //value={}
                  onChange={handleInputChange}
                  label={"CPF"}
                  placeholder={'000.000.000-00'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'number'}
              />
                     <TextField
                  name={'password'}
                  //value={}
                  //onChange={onChange}
                  label={"Senha"}
                  placeholder={'Mínimo 6 caracteres'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'password'}
              />
                     <TextField
                  name={'confirmPassWord'}
                  //value={}
                  onChange={handleInputChange}
                  label={"Confirmar senha"}
                  placeholder={'Confirme a senha anterior'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'password'}
              />

              <ButtonEats
              type={'submit'}
              fullWidth
              variant={'contained'}
              color={'primary'}
              margin={'normal'}
              >
                  <P>Criar</P>
              </ButtonEats>
          </form>
      </InputContainer>
  </Container>
    )
  }
  
  export default RegisterProfilePage;