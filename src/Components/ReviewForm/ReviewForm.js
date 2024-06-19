import React, { useState } from 'react';
import "./ReviewForm.css"

function ReviewForm() {
    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        review: '',
        rating: 0
    });

    const handleButtonClick = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: name === 'rating' ? parseInt(value, 10) : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.review && formData.rating > 0) {
            setShowWarning(false);
            setSubmittedMessage(formData);
            setFormData({ name: '', review: '', rating: 0 });
        } else {
            setShowWarning(true);
        }
    };

    return (
        <div className="ReviewFormContainer">
            <div style={{ backgroundColor: "#ddd", padding: "1rem", width: "600px", height: "430px" }}>
                {!showForm ? (
                    <button onClick={handleButtonClick}>Open Form</button>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <h2 style={{ textAlign: "center" }}>Give Your Review</h2>
                        {showWarning && <p className="warning">Please fill out all fields.</p>}
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="review">Review:</label>
                            <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="rating">Rating:</label>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        <input
                                            type="radio"
                                            id={`star${i + 1}`}
                                            name="rating"
                                            value={i + 1}
                                            checked={formData.rating === i + 1}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor={`star${i + 1}`}>
                                            {i < formData.rating ? '★' : '☆'}
                                        </label>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                )}
                {submittedMessage && (
                    <div className="submitted-message">
                        <h3>Submitted Message:</h3>
                        <p>Name: {submittedMessage.name}</p>
                        <p>Review: {submittedMessage.review}</p>
                        <p>Rating: {submittedMessage.rating} stars</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReviewForm;