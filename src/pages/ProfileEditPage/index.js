import React from 'react'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';

import {Container, InputContainer, P, ButtonEats, Header} from './styled'
import arrow from '../../assets/arrow.png'

import useProtectedPage from 'hooks/useProtectedPage';

function ProfileEditPage() {

    useProtectedPage()

    return (
      <Container>
        <Header>
            <img src={arrow}/>
            <P>Editar</P>
        </Header>
      
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