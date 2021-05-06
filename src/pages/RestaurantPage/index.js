import React, { useState, useEffect, useContext } from 'react';
import useProtectedPage from 'hooks/useProtectedPage';
import labefood from 'services/labefood';
import { useParams } from 'react-router';
import { GlobalStateContext } from 'global/GlobalStateContext';

function RestaurantPage() {
  useProtectedPage();
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [
    carrinho,
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarCarrinho,
  ] = useContext(GlobalStateContext);

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
    const cartProduct = carrinho?.produtos.find((item) => {
      return item.id === product.id;
    });
    if (cartProduct) {
      return cartProduct;
    }
    return product;
  });

  return (
    <div>
      <img width="200" src={details.logoUrl} />
      <h3>{details.name}</h3>
      <h4>{details.category}</h4>
      <h4>
        {details.deliveryTime - 5} - {details.deliveryTime + 5}
      </h4>
      <h4>Frete R${details.shipping}</h4>
      <p>{details.address}</p>
      <h2>Principais</h2>
      {filteredProducts
        .filter((product) => {
          return product.category === 'Lanche';
        })
        .map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <img width="300" src={product.photoUrl} alt="product" />
              {product.quantity ? (
                <>
                  <button onClick={() => removerDoCarrinho(product.id)}>
                    Remover
                  </button>
                  <span onClick={() => alterarCarrinhoAux(product.id)}>
                    {product.quantity}
                  </span>
                </>
              ) : (
                <button onClick={() => adicionarAoCarrinho(product)}>
                  Adicionar
                </button>
              )}
            </div>
          );
        })}
      <h2>Acompanhamentos</h2>
      {filteredProducts
        .filter((product) => {
          return product.category !== 'Lanche';
        })
        .map((product) => {
          return (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <img width="300" src={product.photoUrl} alt="product" />
              {product.quantity > 0 ? (
                <>
                  <button onClick={() => removerDoCarrinho(product.id)}>
                    Remover
                  </button>
                  <span onClick={() => alterarCarrinhoAux(product.id)}>
                    {product.quantity}
                  </span>
                </>
              ) : (
                <button onClick={() => adicionarAoCarrinho(product)}>
                  Adicionar
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantPage;
