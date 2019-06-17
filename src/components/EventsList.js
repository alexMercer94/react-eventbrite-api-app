import React from 'react';
import { EventsConsumer } from '../context/EventsContext';
import Event from './Event';

const EventsList = props => {
    return (
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <h1>Resultados</h1>
            <EventsConsumer>
                {value => {
                    return value.events.map(event => <Event key={event.id} event={event} />);
                }}
            </EventsConsumer>
        </div>
    );
};

export default EventsList;
