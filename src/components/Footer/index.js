
import React from 'react';
import {Container} from './styled'
import avatar from '../../assets/avatar.png'
import home from '../../assets/homepage.png'
import cart from '../../assets/cart.png'
import { goToHome, goToCart, goToProfile } from 'routes/coordinator';
import { useHistory } from 'react-router-dom';
const Footer = () => {
    const history = useHistory();
    return (
      <Container>
        <div>
        <img src={home} onClick={() => goToHome(history)}/>
        <img src={cart} onClick={() => goToCart(history)}/>
        <img  src={avatar} onClick={() => goToProfile(history)}/>
        </div>
      </Container>
    )
};

export default Footer;