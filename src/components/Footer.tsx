import { Link } from 'react-router-dom';
import React from 'react';


const Footer: React.FunctionComponent = () => {
    return (
        <footer className="footer d-flex flex-wrap justify-content-between align-items-center border-top">
            <div className='col-md-4 d-flex align-items-center p-4'>
                <Link
                    to='/'
                    className='mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1'
                />
                <span
                    className='mb-3 mb-md-0'
                    style={{
                        color: '#cdd6f4'
                    }}
                >
                    &copy; {new Date().getFullYear()} Mateus Herrera. All rights reserved.
                </span>
            </div>
            <ul className='d-flex nav col-md-4 justify-content-end list-unstyled p-4'>
                <li className="ms-3">
                    <a
                        className='text-body-secondary'
                        href='https://www.google.com.br/'
                    >
                        <span
                            className='bi bi-github'
                            style={{ color: '#cdd6f4' }}
                        />
                    </a>
                </li>
                <li className="ms-3">
                    <a
                        className='text-body-secondary'
                        href='https://www.google.com.br/'
                    >
                        <span
                            className='bi bi-linkedin'
                            style={{ color: '#cdd6f4' }}
                        />
                    </a>
                </li>
                <li className="ms-3">
                    <a
                        className='text-body-secondary'
                        href='https://www.google.com.br/'
                    >
                        <span
                            className='bi bi-instagram'
                            style={{ color: '#cdd6f4' }}
                        />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
