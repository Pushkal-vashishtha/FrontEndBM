import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Style.css";

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-items">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Bill Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add">Add a Bill</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/chart">Billing Cycle</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>  
        );
    }  
}

export default NavBar;