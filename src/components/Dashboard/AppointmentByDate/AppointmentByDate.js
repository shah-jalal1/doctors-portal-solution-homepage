import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import AppointmentShortList from '../../Appoitment/AppointmentShortList/AppointmentShortList';

const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h2 className="text-brand text-center">Appointments</h2>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments}></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
            
        </div>
    );
};

export default AppointmentByDate;