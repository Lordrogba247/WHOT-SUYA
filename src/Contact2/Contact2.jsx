import React, { useState } from 'react';
import './Contact2.css';

const Contact2 = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        emailAddress: '',
        message: ''
    });

    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formDataToSend = new FormData(event.target);
        formDataToSend.append("access_key", "10abf712-35b1-415b-8985-6d266bea68cd");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formDataToSend
        });

        const data = await response.json();

        if (data.success) {
            setResult("Thank you for your feedback!.");
            // Reset form
            setFormData({
                firstName: '',
                lastName: '',
                phoneNumber: '',
                emailAddress: '',
                message: ''
            });
            event.target.reset();
        } else {
            setResult("Oops! Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Reservation Form */}
                <div className="reservation-form-container">
                    <div className="reservation-header">
                        <h3 className="reservation-subtitle">Feedback</h3>
                        <h2 className="reservation-title">
                            How was your experience with Whot Foods? <br />
                            Your feedback helps us serve you better. Share what you loved or what we can improve — every review matters to us.
                        </h2>
                    </div>

                    <form className="reservation-form" onSubmit={onSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Type here..."
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Type here..."
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Type here..."
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="emailAddress">Email Address</label>
                                <input
                                    type="email"
                                    id="emailAddress"
                                    name="emailAddress"
                                    placeholder="Type here..."
                                    value={formData.emailAddress}
                                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Type here..."
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        {result && (
                            <div className={`submit-message ${result.includes('success') || result.includes('Thank you') ? 'success' : result.includes('Error') || result.includes('wrong') ? 'error' : 'sending'}`}>
                                {result}
                            </div>
                        )}

                        <button type="submit" className="reserve-btn">
                            Submit Feedback
                            <span className="reserve-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.5em" viewBox="0 0 24 15">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
                                </svg>
                            </span>
                        </button>
                    </form>
                </div>

                {/* Open Days */}
                {/* <div className="open-days-section">
                    <h2 className="open-days-title">Open Days</h2>
                    <div className="open-days-cards">
                        <div className="day-card">
                            <p className="day-name">TUESDAYS &<br />WEDNESDAYS</p>
                            <p className="day-time">2pm to 10pm</p>
                        </div>
                        <div className="day-card">
                            <p className="day-name">THURSDAYS TO<br />SATURDAYS</p>
                            <p className="day-time">2pm to 3am</p>
                        </div>
                        <div className="day-card">
                            <p className="day-name">Sundays</p>
                            <p className="day-time">4pm to 3am</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default Contact2;