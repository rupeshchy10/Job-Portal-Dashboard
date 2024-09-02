import React from 'react';
import './dashboard.css';

import Cards from './Cards';
import Reports from './Reports';
import RecentSales from './RecentSales';
import TopSelling from './TopSelling';
import RecentActivity from './RecentActivity';
import E_Report from './E_Report';
import WebTraffic from './WebTraffic';
import News from './News';

function Dashboard() {
    return (
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        <Cards />
                        <div className="col-12">
                            <Reports />
                        </div>
                        <div className="col-12">
                            <RecentSales />
                        </div>
                        <div className="col-12">
                            <TopSelling />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                    <E_Report />
                    <WebTraffic />
                    <News />
                </div>
            </div>
        </section>
    );
}

export default Dashboard;