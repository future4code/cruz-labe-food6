import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router'
import useForm from '../../hooks/useForm'
import { goToHome } from '../../routes/coordinator'
import labefood from '../../services/labefood'

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
    <div>
      <h1>RegisterAdressPage</h1>
      <form onSubmit={createAdress}>
        <input name="street" type="text" placeholder="logradouro" onChange={handleInputChange} required/>
        <input name="number" type="number" placeholder="número" onChange={handleInputChange} required/>
        <input name="complement" type="text" placeholder="complemento" onChange={handleInputChange} required/>
        <input name="neighbourhood" type="text" placeholder="bairro" onChange={handleInputChange} required/>
        <input name="city" type="text" placeholder="cidade" onChange={handleInputChange} required/>
        <input name="state" type="text" placeholder="estado" onChange={handleInputChange} required/>
        <button>Salvar</button>
      </form>
    </div>
  )
}
  
  export default RegisterAdressPage;