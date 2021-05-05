import React, {useState} from "react";
import { TextField, InputAdornment } from '@material-ui/core'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import labefood from '../../services/labefood'
import useForm from '../../hooks/useForm'
import {Container, InputContainer, Header, P, Img, ButtonEats} from './styled'
import { goToRegisterAdress } from 'routes/coordinator';
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow.png'
import {useHistory} from 'react-router-dom'
import useUnprotectedPage from 'hooks/useUnprotectedPage';


function RegisterProfilePage() {

    useUnprotectedPage()

    const registerProfileForm = {
      name: "",
      email: "",
      cpf: "",
      password: "",
      confirmPassWord: ""
    }
    const [showPassword, setShowPassword] = useState(false)
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

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
    }
    return (
      <Container>
         <Header>
        <img src={arrow}/>
        </Header>
      <Img src={logo}/>
      <P>Cadastrar</P>
      <InputContainer>
          <form onSubmit={createProfile}>
              <TextField
                  name={'name'}
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
                  onChange={handleInputChange}
                  label={"CPF"}
                  placeholder={'000.000.000-00'}
                  variant={'outlined'}
                  fullWidth
                  margin={'normal'}
                  required
                  type={'text'}
              />
             <TextField 
            name={'password'}
            onChange={handleInputChange}
            label="Senha"
            placeholder="Mínimo 6 caracteres"
            type={showPassword ? "text" : "password" }
            variant="outlined"
            margin="normal"
            fullWidth
            required
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 {showPassword ? <VisibilityIcon onClick={handleClickShowPassword}/> : <VisibilityOffIcon onClick={handleClickShowPassword}/>}
                </InputAdornment>
              ),
            }}         
          />
          <TextField 
            name={'confirmPassWord'}
            onChange={handleInputChange}
            label="Confirmar senha"
            placeholder="Confirmar senha"
            type={showPassword ? "text" : "password" }
            variant="outlined"
            margin="normal"
            fullWidth
            required
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                 {showPassword ? <VisibilityIcon onClick={handleClickShowPassword}/> : <VisibilityOffIcon onClick={handleClickShowPassword}/>}
                </InputAdornment>
              ),
            }}     
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