import React from 'react';
import styled from 'styled-components';

const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 7rem;
  background: #5cb646;
  margin-top: calc(100vh - 10rem);
  gap: 10px;

  & > p {
    margin: 0;
    padding: 0;
  }
`;

const ActiveOrderModal = (order) => {
  return (
    <OrderContainer>
      <p>Pedido em andamento</p>
      <p>{order.order.restaurantName}</p>
      <p>SUBTOTAL R${order.order.totalPrice}</p>
    </OrderContainer>
  );
};

export default ActiveOrderModal;
