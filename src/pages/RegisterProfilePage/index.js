import React from 'react'
import labefood from '../../services/labefood'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, RegisterButtonContainer, P, Img, ButtonEats} from './styled'
import { goToRegisterProfile } from 'routes/coordinator';
import logo from '../../assets/logo.png'

function RegisterProfilePage() {
    return (
      <Container>
      <Img src={logo}/>
      <P>Cadastrar</P>
      <InputContainer>
          <form  //onSubmit={onSubmitForm}
          >
              <TextField
                  name={'nome'}
                  //value={}
                  //onChange={onChange}
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
                  //onChange={onChange}
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
                  //onChange={onChange}
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
                  name={'password'}
                  //value={}
                  //onChange={onChange}
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