import React, { useEffect, useState } from 'eact';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }
    }, []);

    return (
        <div>
            <Navbar ></Navbar>
            {children}
            {isLoggedIn && appointmentData && (
                <>
                    <div className="appointment-card">
                        <div className="appointment-card__content">
                            <h3 className="appointment-card__title">Appointment Details</h3>
                            <p className="appointment-card__message">
                                <strong>Doctor:</strong> {doctorData.name}
                            </p>
                            <p className="appointment-card__message">
                                <strong>Speciality:</strong> {doctorData.speciality}
                            </p>
                            <p className="appointment-card__message">
                                <strong>Name:</strong> {appointmentData.patientName}
                            </p>
                            <p className="appointment-card__message">
                                <strong>Phone Number:</strong> {appointmentData.phoneNumber}
                            </p>
                            <p className="appointment-card__message">
                                <strong>Date of Appointment:</strong> {appointmentData.date}
                            </p>
                            <p className="appointment-card__message">
                                <strong>Time Slot:</strong> {appointmentData.time}
                            </p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Notification;