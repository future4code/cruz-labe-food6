import {Container, P, Header, ContainerCard, DivDetail, DivPrice, ImgDiv} from './styled'
import React, { useEffect, useState } from 'react';
import labefood from 'services/labefood';
import useProtectedPage from 'hooks/useProtectedPage';
import { goToHome, goToCart, goToProfile } from 'routes/coordinator';
import { useHistory } from 'react-router-dom';
import Footer from 'components/Footer';

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
        
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
      setLoading(false);
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
    <Container>
        <Header>
        <P>FutureEats</P>
        </Header>
      <input placeholder={'Buscar'}/>
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
          <ContainerCard
            key={restaurant.id}
            title={restaurant.description}
          >
            <ImgDiv>
            <img src={restaurant.logoUrl} alt="restaurant" />
            </ImgDiv>
            <DivDetail>
            <p>{restaurant.name}</p>
            <DivPrice>
            <p>{restaurant.deliveryTime} min</p>
            <p>Frete R${restaurant.shipping}</p>
            </DivPrice>
            </DivDetail>
          </ContainerCard>
        );
      })}

      <Footer/>
    </Container>
  );
}

export default HomePage;
