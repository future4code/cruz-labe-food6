import React from 'react'

import {
  Container, 
  P, 
  Header,
  Payment,
  CheckBoxContainer,
  LabelCheckBox,
  Button,
  InputCheck,
  PaymentMethod,} from './styled'
import FormControl from "@material-ui/core/FormControl";
import useProtectedPage from 'hooks/useProtectedPage';
import Footer from 'components/Footer';

function CartPage() {
    useProtectedPage()
  
    return (
      <Container>
      <Header>
          <P>Meu Carrinho</P>
      </Header>
      <Payment>
        <PaymentMethod>Forma de Pagamento</PaymentMethod>
      </Payment>
        <FormControl //onSubmit={handleSubmit}
        >
        <CheckBoxContainer>
          <InputCheck
            type="radio"
            //onChange={}
            name="pagamento"
            value="money"
          />
          <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
          <br />
          <InputCheck
            type="radio"
            //onChange={}
            name="pagamento"
            value="creditcard"
          />
          <LabelCheckBox>Cartão de crédito</LabelCheckBox>
          
          <Button type="submit" //onClick={}
          >
            Confirmar
          </Button>
        </CheckBoxContainer>
      </FormControl>
      <Footer/>
    </Container>
    )
  }
  
  export default CartPage;