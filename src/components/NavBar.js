import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {

    const styles = {
        color: 'white',
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                        <CartWidget />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <span className='navbar-brand' style={styles}>TecShop</span>
                    </div>

                    <div className="btn-group mr-auto lg:btn-group-horizontal">
                        <button className="btn btn-glass"><Link className="nav-link" style={styles} to='/'>Inicio</Link></button>
                        <button className="btn btn-active"><Link className="nav-link" style={styles} to='/Productos'>Productos</Link></button>
                        <button className="btn btn-glass"><Link className="nav-link" style={styles} to='/Contacto'>Contacto</Link></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar