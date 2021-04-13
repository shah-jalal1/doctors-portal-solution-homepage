import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddDoctor = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                
            </div>
        </section>
    );
};

export default AddDoctor;