import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {

    const styles = {
        color: 'white'
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a href='/'>
                        <CartWidget/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="hrefggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <span style={styles}>TecShop</span>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" style={styles} href='/'>Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={styles} href='/Productos'>Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={styles} href='/Contacto'>Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar