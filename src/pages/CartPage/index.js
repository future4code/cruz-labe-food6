import React, { useEffect, useState, useContext } from 'react';
import {
  Container,
  P,
  Header,
  Payment,
  CheckBoxContainer,
  LabelCheckBox,
  Button,
  InputCheck,
  PaymentMethod,
  BoxInfo,
  InfoAddress,
  Title,
} from './styled';
import FormControl from '@material-ui/core/FormControl';
import useProtectedPage from 'hooks/useProtectedPage';
import Footer from 'components/Footer';
import labefood from 'services/labefood';
import { GlobalStateContext } from 'global/GlobalStateContext';

function CartPage() {
  useProtectedPage();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const { carrinho, products, removerDoCarrinho, alterarCarrinho } = useContext(
    GlobalStateContext
  );

  useEffect(() => {
    const token = localStorage.getItem('token');
    labefood
      .getProfile(token)
      .then((response) => {
        setAddress(response.user.address);
      })
      .catch((err) => {
        alert('Falha ao adquirir seu endereço');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const sendOrder = (e) => {
    e.preventDefault();
    const productsList = products.map((produto) => {
      return {
        id: produto.id,
        quantity: produto.quantity,
      };
    });
    const token = localStorage.getItem('token');
    const order = {
      products: productsList,
      paymentMethod: paymentMethod,
    };
    labefood
      .placeOrder(order, token, 1)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const alterarCarrinhoAux = (id) => {
    const quantidade = Number(prompt('Digite a quantidade nova'));
    if (isNaN(quantidade)) {
      alert('Numero invalido');
      return;
    }
    alterarCarrinho(id, quantidade);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Header>
        <P>Meu Carrinho</P>
      </Header>
      <BoxInfo>
        <Title>Endereço de entrega</Title>
        <InfoAddress>{address}</InfoAddress>
      </BoxInfo>
      <div>
        {products?.length > 0 ? (
          <>
            <div>
              <p>{carrinho.name}</p>
              <p>{carrinho.address}</p>
              <p>
                {carrinho.deliveryTime - 5} - {carrinho.deliveryTime + 5} min
              </p>
            </div>
            <div>
              {products?.map((produto) => {
                return (
                  <article key={produto.id}>
                    <img height="100" src={produto.photoUrl} />
                    <span>{produto.name}</span>
                    <span>{produto.description}</span>
                    <span>R$ {produto.price * produto.quantity}</span>
                    <span onClick={() => alterarCarrinhoAux(produto.id)}>
                      Quantidade: {produto.quantity}
                    </span>
                    <button onClick={() => removerDoCarrinho(produto.id)}>
                      Remover
                    </button>
                  </article>
                );
              })}
            </div>
          </>
        ) : (
          <p>Carrinho Vazio</p>
        )}
        <div>
          <span>Subtotal </span>
          <span>Frete: R${products ? carrinho.shipping : 0}</span>
          <span>
            Valor: R$
            {products
              ? products.reduce((acc, currentValue) => {
                  let price = currentValue.price;
                  if (typeof price !== 'number') {
                    price = Number(currentValue.price.replace(',', '.'));
                  }
                  return acc + price * currentValue.quantity;
                }, 0)
              : 0}
          </span>
        </div>
      </div>
      <Payment>
        <PaymentMethod>Forma de Pagamento</PaymentMethod>
      </Payment>
      <FormControl>
        <CheckBoxContainer>
          <InputCheck
            type="radio"
            id="money"
            name="paymentMethod"
            value="money"
            onChange={handleInputChange}
            checked={paymentMethod === 'money'}
          />
          <LabelCheckBox>Dinheiro</LabelCheckBox> <br />
          <br />
          <InputCheck
            type="radio"
            id="creditcard"
            name="paymentMethod"
            value="creditcard"
            onChange={handleInputChange}
            checked={paymentMethod === 'creditcard'}
          />
          <LabelCheckBox>Cartão de crédito</LabelCheckBox>
          <Button type="submit" onClick={sendOrder}>
            Confirmar
          </Button>
        </CheckBoxContainer>
      </FormControl>
      <Footer />
    </Container>
  );
}

export default CartPage;
