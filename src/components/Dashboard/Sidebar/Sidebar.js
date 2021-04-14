import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { FaGripHorizontal, FaCalendarDay, FaUsers, FaFileAlt, FaUserCog, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);

    useEffect(() => {
        fetch('https://vast-atoll-44317.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])
        return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-white">
                        {/* <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>  */}
                        <span> <FaGripHorizontal /> Dashboard </span>
                    </Link>
                </li>
                
                {isDoctor && <div>
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
                    <Link to="/addDoctor" className="text-white">
                        {/* <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span> */}
                        <span> <FaUserPlus /> Add Doctor </span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/setting" className="text-white" >
                      {/* <FontAwesomeIcon icon={faCog} /> <span>Setting</span> */}
                      <span> <FaUserCog /> Setting </span>
                    </Link>
                </li>
                </div>}
            </ul>
            <div>
                {/* <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link> */}
                <Link to="/" className="text-white"><FaSignOutAlt />  <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;