import React, { useState } from 'react';
import CardFilter from './CardFilter';
import ReportCharts from './ReportCharts';

const Reports = () => {
    const [filter, setFilter] = useState('today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }
    return (
        <div className='card'>
            <CardFilter filterChange={handleFilterChange}/>
            <div className="crad-body">
                <h5 className="crad-title">
                    Reports <span>/{filter}</span>
                </h5>
                <ReportCharts/>
            </div>

        </div>
    );
}

export default Reports;
