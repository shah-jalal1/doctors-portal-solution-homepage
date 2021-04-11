import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand">{appointmentOn}</h2>



                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                   <input type="text" {...register('name') }  name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>} 
                       <input {...register('firstName') } className="form-control" /> 
                        {errors.name && <p className="text-danger">Please enter number for age.</p>}
                        {errors.name && <span className="text-danger">This field is required</span>}
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <input type="text" {...register('email') } name="email" placeholder="Email" className="form-control" />

                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>

                    {/* <input {...register('firstName')} /> {/* register an input */}
                    {/* <input {...register('lastName', { required: true })} />
                    {errors.lastName && <p>Last name is required.</p>}
                    <input {...register('age', { pattern: /\d+/ })} />
                    {errors.age && <p>Please enter number for age.</p>}
                    <input type="submit" /> */}
                </form>



            </Modal>
        </div>
    );
};

export default AppointmentForm;
