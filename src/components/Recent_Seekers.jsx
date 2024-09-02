import React, { useEffect, useState } from 'react';
import './recentSeekers.css';
import CardFilter from './CardFilter';
import Recent_Seekers_Item from './Recent_Seekers_Item';

function Recent_Seekers() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    };

    const fetchData = () => {
        fetch('http://localhost:4000/recentSeekers')
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
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className="card-title">
                    Recent Seekers<span> | {filter}</span>
                </h5>

                <table className="table table-borderless">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Photo</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Sold</th>
                            <th scope="col">Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items &&
                            items.length > 0 &&
                            items.map(item => <Recent_Seekers_Item key={item._id} item={item} />)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Recent_Seekers;