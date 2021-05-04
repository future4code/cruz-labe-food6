import React from 'react'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, P, ButtonEats} from './styled'
import useProtectedPage from 'hooks/useProtectedPage';


function AdressEditPage() {
    useProtectedPage()

    return (
      <Container>
      <P>Endereço</P>
      <InputContainer>
          <form  //onSubmit={onSubmitForm}
          >
              <TextField
                  name={'logradouro'}
                  //value={}
                  //onChange={onChange}
                  label={"Logradouro"}
                  placeholder={'Rua / AV'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  autoFocus
                  required
                  type={'text'}
              />

              <TextField
                  name={'numero'}
                  //value={}
                  //onChange={onChange}
                  label={"Número"}
                  placeholder={'Número'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'number'}
              />

                  <TextField
                  name={'complemento'}
                  //value={}
                  //onChange={onChange}
                  label={"Complemento"}
                  placeholder={'Apto / Bloco'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
              <TextField
                  name={'bairro'}
                  //value={}
                  //onChange={onChange}
                  label={"Bairro"}
                  placeholder={'Bairro'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
              <TextField
                  name={'cidade'}
                  //value={}
                  //onChange={onChange}
                  label={"Cidade"}
                  placeholder={'Cidade'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
              <TextField
                  name={'estado'}
                  //value={}
                  //onChange={onChange}
                  label={"Estado"}
                  placeholder={'Estado'}
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
  
  export default AdressEditPage;