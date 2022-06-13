import React from 'react'
import { BsSearch, BsPerson } from "react-icons/bs"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'
import '../sass/navbar.scss'


const Navbar = () => {
    /* Sabri: */
    /* Los tag a van a ser reemplazados por Link en futuro */
    /* Seguro haya que ajustar las cosas por el contador del carrito */










    

    return (
        <div>
            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>
                        <img src={logo} height={50} alt="logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className="container">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to={'/products'} class="nav-link text">                 Productos
                                    </Link>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categorias
                                    </a>
                                    <ul className="dropdown-menu menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="container md-auto">
                            <form className="d-flex  search" role="search">
                                <input className="form-control me-2 input-search" type="search" placeholder="Search..." aria-label="Search" />
                                <button type="button" className="btn btn-danger btn-search">  <BsSearch /></button>
                            </form>

                        </div>

                        <div className="nav-item dropdown user ms-auto d-flex">
                            <a className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <button type="button" className="btn btn-danger btn-search"><BsPerson /></button>
                            </a>
                            <ul className="dropdown-menu menu" aria-labelledby="navbarDropdown">
                                <li><Link to={'/register'} className="dropdown-item">Sign Up</Link></li>
                                <li><Link to={'/login'} className="dropdown-item" href="#">Log In</Link></li>
                            </ul>
                        </div>

                        <div className='carrito  ms-auto d-flex'> <Link to={'/shopping'}>
                            <button type="button" className="btn btn-danger btn-search "><AiOutlineShoppingCart /></button>
                        </Link>
                        </div>

                    </div>
                </div>
            </nav >

            <nav className=''>
                <div className="container-fluid">
                    <div className="container">
                        <ul className="nav justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link text" href="#">Not loging</a>
                            </li>
                            <li>
                                <a className="nav-link text" href="#">¡Hi name!</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    )


}

export default Navbar;