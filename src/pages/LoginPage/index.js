import React from 'react'
import labefood from '../../services/labefood'
import useForm from '../../hooks/useForm'

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
      <div>
        <h1>LoginPage</h1>
        <form>
          <input name="email" type="email" placeholder="email" value={form.email} onChange={handleInputChange} required/>
          <input name="password" type="password" placeholder="senha" value={form.password} onChange={handleInputChange} required/>
          <button onClick={login}>Entrar</button>
        </form>
      </div>
    )
  }
  
  export default LoginPage;