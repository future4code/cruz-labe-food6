import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { goToRegisterAdress } from '../../routes/coordinator'
import labefood from '../../services/labefood'

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
      <div>
      <h1>RegisterProfilePage</h1>
      <form onSubmit={createProfile}>
        <input name="name" type="text" placeholder="name" onChange={handleInputChange} required/>
        <input name="email" type="email" placeholder="email" onChange={handleInputChange} required/>
        <input name="cpf" type="text" placeholder="cpf" onChange={handleInputChange} required/>
        <input name="password" type="password" placeholder="senha" onChange={handleInputChange} required/>
        <input name="confirmPassWord" type="password" placeholder="confirmar senha" onChange={handleInputChange} required/>
        <button>Criar</button>
      </form>
    </div>
    )
  }
  
  export default RegisterProfilePage;