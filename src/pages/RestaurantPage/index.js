import React, { useState, useEffect, useContext } from 'react';
import useProtectedPage from 'hooks/useProtectedPage';
import Footer from 'components/Footer';
import labefood from 'services/labefood';
import { useParams } from 'react-router';
import { GlobalStateContext } from 'global/GlobalStateContext';
import { Container, Header, P, Subtitle, Restaurant, Img, Name, Category, Delivery, Shipping, Address, Product, PdtImg, PdtName, PdtPrice, PdtDescription, Button, Qtd } from './styled'
import arrow from '../../assets/arrow.png'

function RestaurantPage() {
  // useProtectedPage();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const {
    carrinho,
    products,
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarCarrinho,
  } = useContext(GlobalStateContext);

  useEffect(() => {
    const token = localStorage.getItem('token');
    labefood
      .getRestaurantDetail(token, id)
      .then((response) => {
        setDetails(response.restaurant);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  const filteredProducts = details?.products?.map((product) => {
    const cartProduct = products?.find((item) => {
      return item.id === product.id;
    });
    if (cartProduct) {
      return cartProduct;
    }
    return product;
  });

  return (
    <Container>
      <Header>
        <img src={arrow}/>
        <P>Restaurante</P>
      </Header>
      <Restaurant>
        <Img width="200" src={details.logoUrl} />
        <Name>{details.name}</Name>
        <Category>{details.category}</Category>
        <Delivery>
          {details.deliveryTime - 5} - {details.deliveryTime + 5} min
        </Delivery>
        <Shipping>Frete R${details.shipping.toFixed(2)}</Shipping>
        <Address>{details.address}</Address>
      </Restaurant>
      <Subtitle>Principais</Subtitle>
      {filteredProducts
        .filter((product) => {
          return product.category === 'Lanche';
        })
        .map((product) => {
          return (
            <Product key={product.id}>
              <PdtImg width="300" src={product.photoUrl} alt="product" />
              <PdtName>{product.name}</PdtName>
              <PdtPrice>{`R$${product.price.toFixed(2)}`}</PdtPrice>
              <PdtDescription>{product.description}</PdtDescription>
              {product.quantity ? (
                <>
                  <Button onClick={() => removerDoCarrinho(product.id)}>
                    Remover
                  </Button>
                  <Qtd onClick={() => alterarCarrinhoAux(product.id)}>
                    <p>{product.quantity}</p>
                  </Qtd>
                </>
              ) : (
                <Button onClick={() => adicionarAoCarrinho(product, details)}>
                  Adicionar
                </Button>
              )}
            </Product>
          );
        })}
      <Subtitle>Acompanhamentos</Subtitle>
      {filteredProducts
        .filter((product) => {
          return product.category !== 'Lanche';
        })
        .map((product) => {
          return (
            <Product key={product.id}>
              <PdtImg width="300" src={product.photoUrl} alt="product" />
              <PdtName>{product.name}</PdtName>
              <PdtPrice>{`R$${product.price.toFixed(2)}`}</PdtPrice>
              {product.quantity > 0 ? (
                <>
                  <Button onClick={() => removerDoCarrinho(product.id)}>
                    Remover
                  </Button>
                  <Qtd onClick={() => alterarCarrinhoAux(product.id)}>
                    <p>{product.quantity}</p>
                  </Qtd>
                </>
              ) : (
                <Button onClick={() => adicionarAoCarrinho(product, details)}>
                  Adicionar
                </Button>
              )}
            </Product>
          );
        })}
      <Footer />
    </Container>
  );
}

export default RestaurantPage;
