import React, { useState } from "react";
import "./Order.css";

const UNIT_PRICE = 15.00;
const BULK_THRESHOLD = 20;
const BULK_PRICE = 13.00;

const Order = () => {
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    const unitPrice = qty >= BULK_THRESHOLD ? BULK_PRICE : UNIT_PRICE;
    const total = unitPrice * qty;

    const handleFormChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckout = async () => {
        // Basic empty field check
        if (!form.fullName || !form.email || !form.phone || !form.address) {
            alert("Please fill in all fields before checking out.");
            return;
        }

        // Phone must be at least 10 digits
        const digitsOnly = form.phone.replace(/\D/g, "");
        if (digitsOnly.length < 10) {
            alert("Please enter a valid phone number (at least 10 digits).");
            return;
        }

        // Address must be at least 10 characters
        if (form.address.trim().length < 10) {
            alert("Please enter a more detailed delivery address (at least 10 characters).");
            return;
        }

        // Quantity must be at least 1 (safety check)
        if (qty < 1) {
            alert("Quantity must be at least 1.");
            return;
        }

        const orderData = {
            fullName: form.fullName,
            email: form.email,
            phoneNumber: digitsOnly,
            deliveryAddress: form.address.trim(),
            quantity: Number(qty),
            itemPrice: unitPrice,
            totalAmount: total,
        };

        setLoading(true);
        try {
            const response = await fetch("https://whotfood-backend.vercel.app/api/orders", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Response data:", data);

                const redirectUrl = data.url || data.checkoutUrl || data.paymentUrl || data.redirectUrl;
                if (redirectUrl) {
                    window.location.href = redirectUrl;
                } else {
                    console.error("No redirect URL in response:", data);
                    alert("❌ Payment link not received. Please contact us at +1 905-266-0331 or whotfoodsinc@gmail.com.");
                }

                setQty(1);
                setForm({ fullName: "", email: "", phone: "", address: "" });
            } else {
                const errorData = await response.json().catch(() => null);
                console.error("Order error:", response.status, errorData);
                alert("❌ Error, please try again.");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            if (!navigator.onLine) {
                alert("❌ No internet connection. Please check your network and try again.");
            } else {
                alert("❌ Could not reach the server. Please try again or contact us at +1 905-266-0331 or whotfoodsinc@gmail.com.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="order" id="order">
            <div className="order-inner">
                <p className="order-label">Place your order</p>

                <div className="bulk-badge bulk-badge--mobile-top">
                    <p>For bulk orders ({BULK_THRESHOLD} units and above) enjoy wholesale price of</p>
                    <p className="bulk-price">${BULK_PRICE} Per Unit</p>
                </div>

                <div className="order-top">
                    <div className="order-qty-wrap">
                        <span className="qty-label">Quantity</span>
                        <div className="qty-controls">
                            <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))} disabled={loading}>−</button>
                            <span className="qty-value">{qty}</span>
                            <button className="qty-btn" onClick={() => setQty((q) => q + 1)} disabled={loading}>+</button>
                        </div>
                    </div>
                    <p className="order-unit-price">CAD$ {unitPrice.toFixed(2)}</p>
                </div>

                <div className="order-body">
                    <div className="order-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    name="fullName"
                                    placeholder="Type here..."
                                    value={form.fullName}
                                    onChange={handleFormChange}
                                    disabled={loading}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Type here..."
                                    value={form.email}
                                    onChange={handleFormChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Type here..."
                                    value={form.phone}
                                    onChange={handleFormChange}
                                    disabled={loading}
                                />
                            </div>
                            <div className="form-group">
                                <label>Delivery Address</label>
                                <input
                                    name="address"
                                    placeholder="Type here..."
                                    value={form.address}
                                    onChange={handleFormChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bulk-badge bulk-badge--desktop">
                        <p>For bulk orders ({BULK_THRESHOLD} units and above) enjoy wholesale price of</p>
                        <p className="bulk-price">${BULK_PRICE} Per Unit</p>
                    </div>

                    <div className="order-summary">
                        <div className="summary-rows">
                            <div className="delivery">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="3em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M5.73 18.27Q5 17.543 5 16.5H3.379q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.877q.271-.667.875-1.084Q6.735 14 7.5 14t1.37.416q.603.417.874 1.084h4.618L16.558 6H6.212q-.213 0-.357-.144t-.143-.357t.143-.356T6.212 5h10.577q.384 0 .626.308q.243.308.156.686L16.998 8.5h1.271q.384 0 .727.172q.344.171.566.474l1.797 2.398q.218.292.283.609q.066.316.01.664l-.598 3.037q-.056.292-.284.469t-.518.177h-.483q0 1.039-.728 1.77t-1.77.73t-1.771-.73q-.73-.728-.73-1.77H10q0 1.039-.728 1.77t-1.77.73t-1.771-.73m10.156-5.02h4.652l.177-.89l-2.139-2.86h-1.818zm-1.283 1.248l.13-.58q.13-.58.33-1.42q.113-.46.198-.85q.084-.39.134-.646l.13-.58q.13-.58.33-1.42t.33-1.42l.13-.58L16.558 6l-2.196 9.5zm-12.315-1.5q-.205 0-.343-.144t-.138-.356t.144-.357t.356-.143h3.48q.213 0 .357.144t.144.357t-.144.356t-.356.143zm2-3.496q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143h4.5q.212 0 .356.144t.144.357t-.144.356t-.356.143zM7.5 18q.617 0 1.059-.441Q9 17.117 9 16.5t-.441-1.059T7.5 15t-1.059.441Q6 15.883 6 16.5t.441 1.059Q6.883 18 7.5 18m9.77 0q.617 0 1.058-.441q.441-.442.441-1.059t-.441-1.059T17.269 15t-1.058.441q-.442.442-.442 1.059t.441 1.059q.442.441 1.06.441" />
                                </svg>
                                <p className="shipping-notice">
                                    Please note upon confirmation of order, you'll be contacted with details of the shipping fee
                                </p>
                            </div>
                            <div className="summary-row total-row">
                                <span>Total Order</span>
                                <span className="total-amount">CAD$ {total.toFixed(2)}</span>
                            </div>
                            <button className="btn-checkout" onClick={handleCheckout} disabled={loading}>
                                {loading ? "Please wait..." : (
                                    <>
                                        Checkout <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 24 20">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Order;