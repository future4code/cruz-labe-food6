import React from 'react'

function AdressEditPage() {
    return (
      <div>
        <h1>AdressEditPage</h1>
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
  
  export default AdressEditPage;