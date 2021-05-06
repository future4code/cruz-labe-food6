import { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';
import React from 'react';

export default function GlobalState(props) {
  const [carrinho, setCarrinho] = useState({});
  const [products, setProducts] = useState([]);

  const checaCarrinho = (restaurant) => {
    if (carrinho && Object.keys(carrinho).length === 0) {
      setCarrinho({
        ...restaurant,
      });
      return true;
    } else if (carrinho?.name === restaurant?.name) {
      return true;
    } else {
      const excludeCart = window.confirm(
        'Não é possivel adicionar comidas de diferentes restaurantes, você deseja excluir os items que estão no carrinho e adicionar esse?'
      );
      if (excludeCart) {
        setCarrinho({
          ...restaurant,
        });
        setProducts([]);
        alert(
          'Concluido! agora você pode adicionar os itens deste restaurante.'
        );
        return false;
      } else {
        return false;
      }
    }
  };

  const adicionarAoCarrinho = (item, restaurant) => {
    if (checaCarrinho(restaurant)) {
      const quantidade = Number(prompt('Qual a quantidade desejada?'));
      if (quantidade) {
        const novaLista = [...products, { ...item, quantity: quantidade }];
        setProducts(novaLista);
      }
    }
  };

  const removerDoCarrinho = (id) => {
    const carItem = products?.find((product) => product.id === id);
    if (!carItem) {
      return;
    }
    let novaLista;
    if (carItem.quantity < 2) {
      novaLista = products.filter((product) => {
        return product.id !== id;
      });
    } else {
      novaLista = products.map((product) => {
        if (product.id === id) {
          const newProduct = {
            ...product,
            quantity: product.quantity - 1,
          };
          return newProduct;
        }
        return product;
      });
    }
    setProducts(novaLista);
  };

  const alterarCarrinho = (id, quantidade) => {
    const novaLista = products.map((product) => {
      if (product.id === id) {
        const newProduct = {
          ...product,
          quantity: quantidade,
        };
        return newProduct;
      }
      return product;
    });
    setProducts(novaLista);
  };

  const context = {
    carrinho,
    products,
    adicionarAoCarrinho,
    removerDoCarrinho,
    alterarCarrinho,
  };

  return (
    <GlobalStateContext.Provider value={context}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
