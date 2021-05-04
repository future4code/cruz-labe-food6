import { Container, P, Header } from './styled';
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
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  const filterCategories = (array) => {
    let mappedCategories = array.map((restaurant) => restaurant.category);
    let categoriesSet = new Set(mappedCategories);
    return [...categoriesSet];
  };

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    labefood
      .getRestaurants(token)
      .then((response) => {
        const result = response.restaurants;
        setRestaurants(result);
        setCategories(filterCategories(result));
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
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
        {categories.map((category) => {
          return (
            <button key={category} onClick={() => setCategoryFilter(category)}>
              {category}
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
