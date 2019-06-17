import React, { Component } from 'react';
import axios from 'axios';

const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
    token = 'EKM3ASZWQNIMGRZHDLNB';
    order = 'date';

    state = {
        events: []
    };

    /**
     * Get Event's data from API
     */
    getEvets = async search => {
        const URL = `https://www.eventbriteapi.com/v3/events/search/?q=${search.name}&categories=${
            search.category
        }&sort_by=${this.order}&token=${this.token}&locale=es_ES`;

        //Consul API with URL
        const events = await axios.get(URL);
        this.setState({
            events: events.data.events
        });
    };

    render() {
        return (
            <EventsContext.Provider value={{ events: this.state.events, getEvents: this.getEvets }}>
                {this.props.children}
            </EventsContext.Provider>
        );
    }
}

export default EventsProvider;
