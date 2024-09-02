import React, { useState } from 'react';
import CardFilter from './CardFilter';
import E_Chart from './E_Chart';

function E_Report() {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className="card-title">
                    EChart<span> | {filter}</span>
                </h5>
                <E_Chart />
            </div>
        </div>
    );
}

export default E_Report;