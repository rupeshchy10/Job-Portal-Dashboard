import React, { useState, useEffect } from 'react';
import './recentJobs.css';
import CardFilter from './CardFilter';
import RecentJobsTable from './RecentJobsTable';

function RecentJobs() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:4000/RecentJobs')
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);
    
    return (
        <div className="card recent-sales overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Jobs<span> | {filter}</span>
                </h5>
                <RecentJobsTable items={items} />
            </div>
        </div>
    );
}

export default RecentJobs;