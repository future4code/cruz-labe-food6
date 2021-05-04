import React from 'react'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, P, ButtonEats} from './styled'
import useProtectedPage from 'hooks/useProtectedPage';


function ProfileEditPage() {

    useProtectedPage()

    // const formDefault = {
    //     "user": {
    //             "id": "De8UACSFgFySnKdXm5hI",
    //             "name": "Astrodev",
    //             "email": "astrodev@future4.com",
    //             "cpf": "111.111.111-11",
    //             "hasAddress": true,
    //             "address": "R. Afonso Braz, 177 - Vila N. Conceição" 
    //     }

    const [form, handleInputChange] = useForm({})

    return (
      <Container>
      <P>Editar</P>
      <InputContainer>
          <form  //onSubmit={onSubmitForm}
          >
              <TextField
                  name={'nome'}
                  value={form.name}
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
                  value={form.email}
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
                  value={form.cpf}
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