import React, { useState } from 'react';
import CardFilter from './CardFilter'
import RecentSalesTable from './RecentSalesTable';

const RecentSales = () => {
    const [items, setItems] = useState([]);
    const [filter, setfilter ] = useState('Today');
    const handlefilterChange = filter => {
        setfilter(filter);
    }

    const fetchData = () => {
        fetch('')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
        .catch(e => console.log(e.message))
    }
    return (
        <div className='card recent-sales overflow-auto'>
            <CardFilter filterChange={handlefilterChange}/>

            <div className="card-body">
                <h5 className="card-title">
                    Recent Sales <span>|{filter}</span>
                </h5>
                <RecentSalesTable items={items}/>
            </div>
        </div>
    );
}

export default RecentSales;
