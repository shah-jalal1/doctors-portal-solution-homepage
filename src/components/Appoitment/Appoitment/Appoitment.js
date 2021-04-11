import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppaointmentHeader from '../AppaointmentHeader/AppaointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appoitment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <div>
            <Navbar></Navbar>
            <AppaointmentHeader handleDateChange={handleDateChange}></AppaointmentHeader>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoitment;