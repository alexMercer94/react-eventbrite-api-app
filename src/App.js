import React, { Fragment } from 'react';
import Header from './components/Header';
import CategoriesProvider from './context/CategoriesContext';
import Form from './components/Form';

function App() {
    return (
        <CategoriesProvider>
            <Header />
            <div className="uk-container">
                <Form />
            </div>
        </CategoriesProvider>
    );
}

export default App;
