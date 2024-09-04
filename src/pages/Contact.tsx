import React from 'react';


const Contact: React.FunctionComponent = () => {
    return (
        <div>
            <h1
                className='display-4 px-3 pt-3'
                style={{ color: '#4c4f69' }}
            >Contatos</h1>
            <hr />

            <p className='mt-2 p-3 pb-0 text-body-secondary'>E-mail: myemail@gmail.com</p>
            <p className='mt-0 p-3 pt-0 text-body-secondary'>Tel.: +55 34 9 9999-9999</p>
        </div>
    );
};

export default Contact;
