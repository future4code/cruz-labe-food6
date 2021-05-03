import React from 'react'
import labefood from '../../services/labefood'
import useForm from '../../hooks/useForm'
import { Button, TextField } from '@material-ui/core';
import {Container, InputContainer, RegisterButtonContainer, P, Img, ButtonEats} from './styled'
import { goToRegisterProfile } from 'routes/coordinator';
import logo from '../../assets/logo.png'


function LoginPage() {
    const [form, handleInputChange] = useForm({ email: '', password: ''})
  
    const login = (e) => {
      e.preventDefault()
      labefood.login(form)
      .then((response) => {
        console.log(response);
      }).catch((err) => {
        alert(err.response.data.message)
      })
    }

    return (
      <Container>
        <Img src={logo}/>
        <P>Entrar</P>
        <InputContainer>
            <form  //onSubmit={onSubmitForm}
            >
                <TextField
                    name={'email'}
                    value={form.email}
                    //onChange={onChange}
                    label={"E-mail"}
                    placeholder={'email@email.com'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    autoFocus
                    required
                    type={'email'}
                />

                <TextField
                    name={'password'}
                    value={form.password}
                    //onChange={onChange}
                    label={"Senha"}
                    placeholder={'Mínimo 6 caracteres'}
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
                    <P>Entrar</P>
                </ButtonEats>
            </form>
        </InputContainer>
        <RegisterButtonContainer>
            <Button
            onClick={() => goToRegisterProfile()}
            type={'submit'}
            fullWidth
            variant={'text'}
            color={'black'}
            margin={'normal'}
            >
             Não Possui Cadastro? Clique Aqui.  
            </Button>
        </RegisterButtonContainer>
    </Container>
    )
  }
  
  export default LoginPage;