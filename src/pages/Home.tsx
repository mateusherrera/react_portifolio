import React from 'react';


const Home: React.FunctionComponent = () => {
    return (
        <div>
            <h1
                className='display-4 px-3 pt-3'
                style={{ color: '#4c4f69' }}
            >Bem-vindo ao meu portifólio</h1>
            <hr />

            <p className='mt-2 p-3 text-body-secondary'>
                Este é um projeto de portifólio criado com React e TypeScript.
            </p>
        </div>
    );
};

export default Home;
