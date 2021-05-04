import React from 'react';
import useProtectedPage from 'hooks/useProtectedPage';
import labefood from 'services/labefood';

function RestaurantPage() {
  useProtectedPage();

  return <h1>RestaurantPage</h1>;
}

export default RestaurantPage;
