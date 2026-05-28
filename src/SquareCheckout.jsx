import React, { useState } from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk";

const SquareCheckout = ({ amount = 2500, currency = "USD" }) => {
    const [paymentStatus, setPaymentStatus] = useState("");
    const [loading, setLoading] = useState(false);

    // Vite env variables (VITE_ prefix required)
    const appId = import.meta.env.VITE_SQUARE_APP_ID;
    const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const handleCardTokenization = async (tokenResult) => {
        if (!tokenResult || tokenResult.status !== "OK") {
            setPaymentStatus("❌ Failed to tokenize card details.");
            return;
        }

        setLoading(true);
        setPaymentStatus("Processing your transaction...");

        try {
            const response = await fetch(`${backendUrl}/api/pay`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sourceId: tokenResult.token,
                    amount,     // dynamic — passed as prop
                    currency,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setPaymentStatus("✅ Payment successful! Redirecting...");
                window.location.href = "/order-success?success=true";
            } else {
                setPaymentStatus(`❌ Error: ${data.message || "Transaction declined"}`);
                window.location.href = "/order-success?canceled=true";
            }
        } catch (error) {
            console.error("Network error during checkout:", error);
            setPaymentStatus("❌ Communication error with payment server.");
        } finally {
            setLoading(false);
        }
    };

    // Format amount for display e.g. 2500 → "$25.00"
    const displayAmount = `$${(amount / 100).toFixed(2)}`;

    return (
        <div style={{
            maxWidth: "400px",
            margin: "2rem auto",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px"
        }}>
            <h2>Whot Suya Checkout</h2>

            <PaymentForm
                applicationId={appId}
                locationId={locationId}
                cardTokenizeResponseReceived={(token) => handleCardTokenization(token)}
            >
                <CreditCard
                    buttonProps={{
                        style: {
                            backgroundColor: "#cc1111",
                            color: "white",
                            fontSize: "16px",
                            padding: "12px",
                        },
                    }}
                >
                    {loading ? "Processing..." : `Pay ${displayAmount}`}
                </CreditCard>
            </PaymentForm>

            {paymentStatus && (
                <p style={{ marginTop: "15px", textAlign: "center", fontWeight: "bold" }}>
                    {paymentStatus}
                </p>
            )}
        </div>
    );
};

export default SquareCheckout;