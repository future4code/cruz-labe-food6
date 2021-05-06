import React, { useEffect, useState } from 'react';
import { Container, P, Header } from './styled';
import useProtectedPage from 'hooks/useProtectedPage';
import Footer from 'components/Footer';
import labefood from 'services/labefood';

function CartPage() {
  useProtectedPage();
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const products = {
    products: [
      {
        id: '3vcYYSOEf8dKeTPd7vHe',
        quantity: 10,
      },
      {
        quantity: 1,
        id: '5omTFSOBYiTqeiDwhiBx',
      },
    ],
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    labefood
      .getProfile(token)
      .then((response) => {
        setAddress(response.user.address);
      })
      .catch((err) => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleInputChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const sendOrder = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const order = {
      ...products,
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Header>
        <P>Meu Carrinho</P>
      </Header>
      <div>
        <p>Endereço de entrega</p>
        <h4>{address}</h4>
      </div>
      <div>Conteudo</div>
      <form onSubmit={sendOrder}>
        <h3>Formas de pagamento</h3>
        <hr />
        <input
          type="radio"
          id="money"
          name="paymentMethod"
          value="money"
          onChange={handleInputChange}
          checked={paymentMethod === 'money'}
        ></input>
        <label htmlFor="money">Dinheiro</label>
        <br></br>
        <input
          type="radio"
          id="creditcard"
          name="paymentMethod"
          value="creditcard"
          onChange={handleInputChange}
          checked={paymentMethod === 'creditcard'}
        ></input>
        <label htmlFor="creditcard">Cartão de credito</label>
        <br></br>
        <button>Confirmar</button>
      </form>
      <Footer />
    </Container>
  );
}

export default CartPage;
