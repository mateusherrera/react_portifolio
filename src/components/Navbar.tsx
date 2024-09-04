import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FunctionComponent = () => {
    return (
        <nav
            className='navbar'
            style={{ backgroundColor: '#11111b' }}
        >
            <ul className='nav'>
                <li className='nav-item'>
                    <Link
                        to='/'
                        className='nav-link'
                        style={{ color: '#cdd6f4' }}
                    >Home</Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/projects'
                        className='nav-link'
                        style={{ color: '#cdd6f4' }}
                    >Projetos</Link>
                </li>
                <li className='nav-item'>
                    <Link
                        to='/contact'
                        className='nav-link'
                        style={{ color: '#cdd6f4' }}
                    >Contatos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
