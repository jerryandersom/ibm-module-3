import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReviewTable.css';

const ReviewForm = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const appointmentData = JSON.parse(localStorage.getItem('appointmentData'));
    if (appointmentData) {
      setReviews([
        {
          serialNumber: 1,
          doctorName: appointmentData.doctorName,
          doctorSpeciality: appointmentData.doctorSpeciality,
        },
      ]);
    }
  }, []);

  const handleButtonClick = () => {
    navigate('/review-form');
  };

  return (
    <div className="review-form">
      <h2>Reviews</h2>
      <div className="review-form-header">
        <div>Serial Number</div>
        <div>Doctor Name</div>
        <div>Doctor Speciality</div>
        <div>Provide feedback</div>
        <div>Review Given</div>
      </div>
      {reviews.map((review) => (
        <div key={review.serialNumber} className="review-form-row">
          <div>{review.serialNumber}</div>
          <div>{review.doctorName}</div>
          <div>{review.doctorSpeciality}</div>
          <div>
            <button className="feedback-button" onClick={handleButtonClick}>Click Here</button>
          </div>
          <div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewForm;