import React, { Component } from 'react';
import axios from 'axios';
import { async } from 'q';

// Create context
const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
    token = 'EKM3ASZWQNIMGRZHDLNB';

    state = {
        categories: []
    };

    componentDidMount() {
        this.getCategories();
    }

    getCategories = async () => {
        const URL = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
        const categories = await axios.get(URL);
        this.setState({
            categories: categories.data.categories
        });
    };

    render() {
        return (
            <CategoriesContext.Provider value={{ categories: this.state.categories }}>
                {this.props.children}
            </CategoriesContext.Provider>
        );
    }
}

export default CategoriesProvider;
