import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import '../../style/navbar.css';



const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click) //actua como un toggle lo convierte en el opuesto de lo que tenga click
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, []);


    window.addEventListener('resize', showButton) //en el evento de resize escucha la funcion showButton que se basa en el tamaño de pantalla

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className='navbar glassnav'>
                    <div className="navbar-container  container">
                        <Link to='/' className='navbar-brand' onClick={closeMobileMenu}>
                            ARTIDOCHELONE
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active opacity-85' : 'nav-menu opacity-85'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/sign-up' className='btn-link' >
                                        <Button buttonStyle='btn--outline'>
                                            SIGN UP
                                        </Button>
                                    </Link>
                                ) : (
                                        <Link to='/sign-up' className='btn-link'>
                                            <Button buttonStyle='btn--outline'
                                                buttonSize='btn--mobile'
                                                onClick={closeMobileMenu}>
                                                SIGN UP
                                            </Button>
                                        </Link>
                                    )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar