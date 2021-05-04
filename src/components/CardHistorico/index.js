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
    return(<div>
        {historic && historic.map(order => {
            return(<div
            key={order.createdAt}>
                <h1>{order.restaurantName}</h1>
                <h2>** de novembro de ****</h2>
                <h2>{order.totalPrice}</h2><hr/>
                </div>)
        })}
    </div>)
}

export default CardHistoric;