import React from 'react';


const Contact: React.FunctionComponent = () => {
    return (
        <div>
            <h1
                className='display-4 px-3 pt-3'
                style={{ color: '#4c4f69' }}
            >Contatos</h1>
            <hr />

            <p className='mt-4 p-3 pb-0 text-body-secondary'>
                E-mail: <a href='mailto:myemail@gmail.com' style={{ textDecoration: 'none' }}>myemail@gmail.com</a>
            </p>
            <p className='mt-0 p-3 pt-0 text-body-secondary'>
                Tel.: <a href='tel:+5534999999999' style={{ textDecoration: 'none' }}>+55 34 9 9999-9999</a>
            </p>
        </div>
    );
};

export default Contact;
