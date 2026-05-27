import React from "react";
import { useNavigate } from "react-router-dom";
import "./OrderSuccess.css";

import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./OrderSuccess.css";

const OrderSuccess = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const isSuccess = searchParams.get("success") === "true";
    const isCanceled = searchParams.get("canceled") === "true";

    // Default to success view if no params (direct visit)
    const showFailure = isCanceled || (!isSuccess && !isCanceled ? false : !isSuccess);

    return (
        <div className="success-page">
            <div className="success-card">
                {showFailure ? (
                    <>
                        <div className="success-icon failure-icon">✕</div>
                        <h1 className="success-title">Payment unsuccessful</h1>
                        <p className="success-sub">
                            Something went wrong with your payment. Please try again or contact us if the issue persists.
                        </p>
                        <div className="success-actions">
                            <button className="success-btn" onClick={() => navigate("/")}>
                                Try again
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="success-icon">✓</div>
                        <h1 className="success-title">Thank you for placing an order.</h1>
                        <p className="success-sub">
                            Our team will reach out to you shortly to confirm your order details.
                        </p>
                        <button className="success-btn" onClick={() => navigate("/")}>
                            Click here to return to homepage
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default OrderSuccess;