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
                        <input type="text" {...register('firstName')} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text"{...register('firstName')} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register('firstName')} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group row">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register('firstName')} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input {...register('firstName')} className="form-control" name="age" placeholder="Your Age" type="number" />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-4">
                            <input {...register('firstName')} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                    </div>

                    {/* <input {...register('firstName')} /> {/* register an input */}

                </form>



            </Modal>
        </div>
    );
};

export default AppointmentForm;


