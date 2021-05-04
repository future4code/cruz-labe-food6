import useProtectedPage from 'hooks/useProtectedPage';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import labefood from 'services/labefood';

function SearchPage() {
  useProtectedPage();
  const [restaurants, setRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    labefood
      .getRestaurants(token)
      .then((response) => {
        setRestaurants(response.restaurants);
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

  const filteredRestaurants = restaurants
    ?.filter((restaurant) => {
      return restaurant.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    ?.map((restaurant) => {
      return (
        <div key={restaurant.id} style={mystyle} title={restaurant.description}>
          <img width="300" src={restaurant.logoUrl} alt="restaurant" />
          <p>{restaurant.name}</p>
          <p>{restaurant.deliveryTime} min</p>
          <p>Frete R${restaurant.shipping}</p>
        </div>
      );
    });

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>SearchPage</h1>
      <input
        name="search"
        type="text"
        value={searchQuery}
        placeholder="Restaurante"
        onChange={handleSearchChange}
      />

      {searchQuery ? (
        filteredRestaurants
      ) : (
        <p>Busque por nomes de restaurante</p>
      )}
    </div>
  );
}

export default SearchPage;
