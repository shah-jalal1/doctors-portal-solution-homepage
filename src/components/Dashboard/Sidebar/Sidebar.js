import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { FaGripHorizontal, FaCalendarDay, FaUsers, FaFileAlt, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        {/* <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>  */}
                        <span> <FaGripHorizontal /> Dashboard </span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-white">
                        {/* <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>  */}
                        <span> <FaCalendarDay /> Appointment </span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-white">
                        {/* <FontAwesomeIcon icon={faUsers} /> <span>Patients</span> */}
                        <span> <FaUsers /> Patients </span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        {/* <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span> */}
                        <span> <FaFileAlt /> Prescriptions </span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      {/* <FontAwesomeIcon icon={faCog} /> <span>Setting</span> */}
                      <span> <FaUserCog /> Setting </span>
                    </Link>
                </li>
            </ul>
            <div>
                {/* <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link> */}
                <Link to="/" className="text-white"><FaSignOutAlt />  <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;