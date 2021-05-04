import React from 'react'

import {Container, P, Header} from './styled'

import useProtectedPage from 'hooks/useProtectedPage';


function CartPage() {
    useProtectedPage()

    return (
      <Container>
      <Header>
          <P>Meu Carrinho</P>
      </Header>
      
    </Container>
    )
  }
  
  export default CartPage;