import React, { useState } from 'react';
import Cards from './Cards.js';
import './dashboard.css'
import Reports from './Reports.js';

const Dashboard = () => {
    const [cards, setCards] = useState(
        [
        {
            "_id":1,
            "name":"sales",
            "icon":"bi bi-cart",
            "amount":145,
            "percentage":0.12,
            "active":true
        },
        {
            "_id":2,
            "name":"Revenue",
            "icon":"bi bi-cart",
            "amount":145,
            "percentage":0.12,
            "active":true
        },
        {
            "_id":3,
            "name":"sales",
            "icon":"bi bi-cart",
            "amount":145,
            "percentage":0.12,
            "active":true
        },
    
    ])

    // const fetchData = () => {
    //     fetch('http://localhost:4000/cards')
    //     .then(res => res.json())
    //     .then(data => {
    //         setCards(data);
    //     })
    //     .catch(e => console.log(e.message))
    // }

    
    return (
        <section className='dashboard section'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 &&
                            cards.map(card => <Cards key={card._id} card = {card}/>)
                        }
                        <div className="col-12">
                            <Reports/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </section>
    );
}

export default Dashboard;
