import React from 'react';

const Page404 = ({ location }) => {
    return (
        <div className='Page404'>
            <h1>Страницы '{location.pathname}' не существует</h1>
        </div>
    );
};

export default Page404;
