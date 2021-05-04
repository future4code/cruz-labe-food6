import React, { useEffect, useState } from 'react'
import labefood from 'services/labefood';

const CardHistoric = () => {

    const [historic, setHistoric] = useState([])
    const token = window.localStorage.getItem("token")

    useEffect(() => {
        getHistoric()
    },[])
    
    const getHistoric = () => {
            labefood.ordersHistory(token)
            .then((res) => {
                setHistoric(res.orders)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const data =(timestamp) => {

        const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
         "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

        const data = new Date(timestamp)
        const dia  = data.getDate().toString().padStart(2, '0')
        const mes  = month[data.getMonth()]
        const ano  = data.getFullYear()
        return `${dia} ${mes} ${ano}`
    }
    
    return(<div>
        {historic && historic.length > 0 && historic.map(order => {
            return(<div
            key={order.createdAt}>
                <h1>{order.restaurantName}</h1>
                <h2>{data(order.createdAt)}</h2>
                <h2>{order.totalPrice}</h2><hr/>
                </div>)
        })}
        {historic && historic.length === 0 && <h1>Você não realizou nenhum pedido</h1>}
    </div>)
}

export default CardHistoric;