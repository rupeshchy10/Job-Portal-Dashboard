import React from 'react';

function Recent_Seekers_Item({ item }) {
    return (
        <tr>
            <th scope="row">
                <a href="#">
                    <img src={item.preview} alt="" />
                </a>
            </th>
            <td>
                <a href="#" className="text-primary fw-bold">
                    {item.name}
                </a>
            </td>
            <td>${item.price.toFixed(2)}</td>
            <td className="fw-bold">{item.sold}</td>
            <td>${(item.price * item.sold).toLocaleString('en-US')}</td>
        </tr >
    );
}

export default Recent_Seekers_Item;