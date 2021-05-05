import { useState, useEffect } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import React from 'react'

export default function GlobalState(props) {

    const carrinhoDetalhes = {
        name: 'Habbibs',
        address: "Rua das Margaridas, 110 - Jardim das Flores",
        shipping: '6',
        restaurantId: 0,
        produtos: [
            {
            "id": "q38byozxbUUidlVmpSXa",
            "name": "Pastel",
            "description": "",
            "category": "Pastel",
            "price": "3",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg",
            "quantity": '1',
            },
            {
            "id": "po7B72myMyfKhtEe0mxv",
            "name": "Kibe",
            "description": "",
            "category": "Salgado",
            "price": "5,50",
            "photoUrl": "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
            "quantity": '2',
            },
        ]
    }

    const [carrinho, setCarrinho] = useState(carrinhoDetalhes)

    const adicionarAoCarrinho = (item) => {
        const novaLista = [...carrinho.produtos, item]
        setCarrinho({...carrinho, produtos: novaLista})
        console.log(carrinho)
    }

    const removerDoCarrinho = (id) => {
        const novoCarrinho = carrinho?.produtos?.filter((carItem) => id !== carItem.id)
        setCarrinho(novoCarrinho)
    }

    const context = [carrinho, adicionarAoCarrinho, removerDoCarrinho]

    return <GlobalStateContext.Provider value={context}>
        {props.children}
    </GlobalStateContext.Provider>
}

//const [carrinho, adicionarAoCarrinho, removerDoCarrinho] = useContext(GlobalStateContext)