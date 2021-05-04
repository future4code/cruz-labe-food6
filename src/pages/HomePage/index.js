import React, { useEffect, useState } from 'react';
import labefood from 'services/labefood';
import useProtectedPage from 'hooks/useProtectedPage';
import { goToHome, goToCart, goToProfile } from 'routes/coordinator';
import { useHistory } from 'react-router-dom';

function HomePage() {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('Hamburguer');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const categorias = [
    'Hamburguer',
    'Asiática',
    'Massa',
    'Saudaveis',
    'Árabe',
    'Italiana',
    'Sorvetes',
    'Carnes',
    'Baiana',
    'Petiscos',
    'Mexicana',
  ];

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    labefood
      .getRestaurants(token)
      .then((response) => {
        setRestaurants(response.restaurants);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  const mystyle = {
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    margin: '10px',
    border: '1px solid black',
    width: '300px',
  };

  const filteredRestaurants = restaurants?.filter((restaurant) => {
    return restaurant.category === categoryFilter;
  });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>HomePage</h1>
      <input />
      <div>
        {categorias.map((categoria) => {
          return (
            <button
              key={categoria}
              onClick={() => setCategoryFilter(categoria)}
            >
              {categoria}
            </button>
          );
        })}
      </div>

      {filteredRestaurants?.map((restaurant) => {
        return (
          <div
            key={restaurant.id}
            style={mystyle}
            title={restaurant.description}
          >
            <img width="300" src={restaurant.logoUrl} alt="restaurant" />
            <p>{restaurant.name}</p>
            <p>{restaurant.deliveryTime} min</p>
            <p>Frete R${restaurant.shipping}</p>
          </div>
        );
      })}

      <nav>
        <button onClick={() => goToHome(history)}>Home</button>
        <button onClick={() => goToCart(history)}>Cart</button>
        <button onClick={() => goToProfile(history)}>Profile</button>
      </nav>
    </div>
  );
}

export default HomePage;
