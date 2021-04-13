import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h1>Appoitment: {appointments.length}</h1>
            {
                appointments.map(app => <li key={app._id}>{app.name}</li>)
            }
            
        </div>
    );
};

export default AppointmentByDate;