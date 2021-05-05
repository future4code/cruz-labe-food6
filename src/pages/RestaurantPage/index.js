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
  const [carrinho, adicionarAoCarrinho, removerDoCarrinho] = useContext(GlobalStateContext)

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

  if (loading) {
    return <h1>Loading...</h1>;
  }

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
      {details.products
        .filter((product) => {
          return product.category === 'Lanche';
        })
        .map((product) => {
          return (
            <div>
              <h3>{product.name}</h3>
              <img width="300" src={product.photoUrl} alt="product" />
              <button onClick={() => adicionarAoCarrinho(product)}>Adicionar</button>
            </div>
          );
        })}
      <h2>Acompanhamentos</h2>
      {details.products
        .filter((product) => {
          return product.category !== 'Lanche';
        })
        .map((product) => {
          return (
            <div>
              <h3>{product.name}</h3>
              <img width="300" src={product.photoUrl} alt="product" />
              <button onClick={() => adicionarAoCarrinho(product)}>Adicionar</button>
            </div>
          );
        })}
    </div>
  );
}

export default RestaurantPage;
