import React from 'react';
import Navbar from '../components/Header';

const Error: React.FC = () => {
    return (
        <>
            <Navbar />
            <main>
                <h1>An error occurred!</h1>
                <p>Could not find the page!</p>
            </main>
        </>
    );
};

export default Error;
