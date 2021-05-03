import React from 'react'

function RegisterAdressPage() {
    return (
      <div>
        <h1>RegisterAdressPage</h1>
        <form>
          <input name="logradouro" type="text" placeholder="logradouro" required/>
          <input name="numero" type="number" placeholder="número" required/>
          <input name="complemento" type="text" placeholder="complemento" required/>
          <input name="bairro" type="text" placeholder="bairro" required/>
          <input name="cidade" type="text" placeholder="cidade" required/>
          <input name="estado" type="text" placeholder="estado" required/>
          <button>Salvar</button>
        </form>
      </div>
    )
  }
  
  export default RegisterAdressPage;