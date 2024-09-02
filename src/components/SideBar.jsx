import React from 'react';
import './sideBar.css';
import navList from '../data/navItem';
import NavItem from './NavItem';

function SideBar() {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="bi bi-grid"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#components-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-menu-button-wide"></i>
                        <span>Members</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="components-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Recruiters</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Job Seekers</span>
                            </a>
                        </li>
                     </ul>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#forms-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-journal-text"></i>
                        <span>Applications</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="forms-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Recruiters</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Job Seekers</span>
                            </a>
                        </li>
                     </ul>
                </li>

                <li className="nav-item">
                    <a
                        className="nav-link collapsed"
                        data-bs-target="#charts-nav"
                        data-bs-toggle="collapse"
                        href="#"
                    >
                        <i className="bi bi-bar-chart"></i>
                        <span>Analytics</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                    </a>
                    <ul
                        id="charts-nav"
                        className="nav-content collapse "
                        data-bs-parent="#sidebar-nav"
                    >
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Graphs</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>Pie Charts</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-circle"></i>
                                <span>ECharts</span>
                            </a>
                        </li>
                    </ul>
                </li>

                <li className="nav-heading">Pages</li>
                {navList.map(nav => (
                    <NavItem key={nav._id} nav={nav} />
                ))}
            </ul>
        </aside >
    );
}

export default SideBar;