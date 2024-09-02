import React from 'react';

function RecentJobsTable({ items }) {
    const handleStatus = status => {
        switch (status) {
            case 'Approved':
                return 'success';
                break;
            case 'Pending':
                return 'warning';
                break;
            case 'Rejected':
                return 'danger';
                break;
            default:
                return 'success';
        }
    };

    return (
        <table className="table table-borderless datatable">
            <thead className="table-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Company</th>
                    <th scope="col">Job</th>
                    <th scope="col">Seats</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {items &&
                    items.length > 0 &&
                    items.map(item => (
                        <tr key={item._id}>
                            <th scope="row">
                                <a href="#">{item.number}</a>
                            </th>
                            <td>{item.company}</td>
                            <td>
                                <a href="#" className="text-primary">
                                    {item.job}
                                </a>
                            </td>
                            <td>{item.seat}</td>
                            <td>
                                <span className={`badge bg-${handleStatus(item.status)}`}>
                                    {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}

export default RecentJobsTable;