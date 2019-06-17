import React, { Component } from 'react';
import { CategoriesConsumer } from '../context/CategoriesContext';
import { EventsConsumer } from '../context/EventsContext';

class Form extends Component {
    state = {
        name: '',
        category: ''
    };

    /**
     * Get Event's data from form and save it in the state
     */
    getDataEvent = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    render() {
        return (
            <EventsConsumer>
                {value => {
                    return (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                value.getEvents(this.state);
                            }}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center">
                                    Busca tu evento por Nombre o Categoria
                                </legend>
                            </fieldset>
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="name"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de evento o ciudad"
                                        onChange={this.getDataEvent}
                                    />
                                </div>
                                <div className="uk-input" uk-margin="true">
                                    <select className="uk-select" name="category" onChange={this.getDataEvent}>
                                        <option value="">Seleccione una categoria</option>
                                        <CategoriesConsumer>
                                            {value => {
                                                return value.categories.map(category => (
                                                    <option key={category.id} value={category.id} data-uk-form-select>
                                                        {category.name_localized}
                                                    </option>
                                                ));
                                            }}
                                        </CategoriesConsumer>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        className="uk-button uk-button-danger"
                                        value="Buscar Eventos"
                                    />
                                </div>
                            </div>
                        </form>
                    );
                }}
            </EventsConsumer>
        );
    }
}

export default Form;
