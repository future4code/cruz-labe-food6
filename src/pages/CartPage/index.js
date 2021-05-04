import React from 'react'

import {Container, P, Header} from './styled'

import useProtectedPage from 'hooks/useProtectedPage';
import Footer from 'components/Footer';


function CartPage() {
    useProtectedPage()

    return (
      <Container>
      <Header>
          <P>Meu Carrinho</P>
      </Header>
      <Footer/>
    </Container>
    )
  }
  
  export default CartPage;