import React from 'react'

function RegisterProfilePage() {
    return (
      <div>
      <h1>RegisterProfilePage</h1>
      <form>
        <input name="name" type="text" placeholder="name" required/>
        <input name="email" type="email" placeholder="email" required/>
        <input name="cpf" type="number" placeholder="cpf" required/>
        <input name="senha1" type="password" placeholder="senha" required/>
        <input name="senha2" type="password" placeholder="confirmar senha" required/>
        <button>Criar</button>
      </form>
    </div>
    )
  }
  
  export default RegisterProfilePage;