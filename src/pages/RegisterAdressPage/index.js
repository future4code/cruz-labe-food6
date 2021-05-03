import axios from 'axios'
import React from 'react'
import useForm from '../../hooks/useForm'

import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, P, ButtonEats} from './styled'

import { goToHome } from '../../routes/coordinator'

function RegisterAdressPage() {
  const registerAdressForm = {
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: ""
  }

  const history = useHistory()
  const [form, handleInputChange] = useForm(registerAdressForm)

  const createAdress = (event) => {

    event.preventDefault()

    const token = window.localStorage.getItem("token")
    
    labefood.addAddress(form, token)
    .then(res => {
      window.localStorage.setItem("token", res.token)
      goToHome(history)
    })
    .catch( err => {
      console.log(err)
    })
  }
  
    return (
      <Container>
      <P>Meu Endereço</P>
      <InputContainer>
          <form  onSubmit={createAdress}
              <TextField
                  name={'street'}
                  //value={}
                  onChange={handleInputChange}
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
                  name={'number'}
                  //value={}
                  onChange={handleInputChange}
                  label={"Número"}
                  placeholder={'Número'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'number'}
              />

                  <TextField
                  name={'complement'}
                  //value={}
                  onChange={handleInputChange}
                  label={"Complemento"}
                  placeholder={'Apto / Bloco'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
    
              <TextField
                  name={'neighbourhood'}
                  //value={}
                  onChange={handleInputChange}
                  label={"Bairro"}
                  placeholder={'Bairro'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
     
              <TextField
                  name={'city'}
                  //value={}
                  onChange={handleInputChange}
                  label={"Cidade"}
                  placeholder={'Cidade'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
              <TextField
                  name={'state'}
                  //value={}
                  onChange={handleInputChange}
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
  
export default RegisterAdressPage;