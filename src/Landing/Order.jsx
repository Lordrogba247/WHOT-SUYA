// import React, { useState } from "react";
// import "./Order.css";

// const UNIT_PRICE = 15.00;
// const DELIVERY_FEE = 5.99;
// const BULK_THRESHOLD = 20;
// const BULK_PRICE = 13.00;

// const Order = () => {
//     const [qty, setQty] = useState(1);
//     const [form, setForm] = useState({
//         fullName: "",
//         email: "",
//         phone: "",
//         address: "",
//     });

//     const unitPrice = qty >= BULK_THRESHOLD ? BULK_PRICE : UNIT_PRICE;
//     const total = unitPrice * qty + DELIVERY_FEE;

//     const handleFormChange = (e) => {
//         setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleCheckout = async () => {
//         // Basic validation
//         if (!form.fullName || !form.email || !form.phone || !form.address) {
//             alert("Please fill in all fields before checking out.");
//             return;
//         }

//         const orderData = {
//             quantity: qty,
//             unitPrice: unitPrice,
//             deliveryFee: DELIVERY_FEE,
//             total: total,
//             customer: {
//                 fullName: form.fullName,
//                 email: form.email,
//                 phone: form.phone,
//                 address: form.address,
//             },
//         };

//         try {
//             const response = await fetch("https://whotfood-backend.vercel.app/api/orders", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(orderData),
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 window.location.href = data.url;
//                 // alert("Order placed! Our team will reach out shortly.");
//                 // Reset form after successful order
//                 setQty(1);
//                 setForm({ fullName: "", email: "", phone: "", address: "" });
//             } else {
//                 alert("Something went wrong. Please try again or contact us directly.");
//             }
//         } catch (error) {
//             console.error("Checkout error:", error);
//             alert("Our ordering system is temporarily unavailable. Please contact us directly at +1 905-266-0331 or whotfoodsinc@gmail.com to place your order.");
//         }
//     };

//     return (
//         <section className="order" id="order">
//             <div className="order-inner">
//                 <p className="order-label">Place your order</p>

//                 {/* Bulk badge — mobile only, appears right below the label */}
//                 <div className="bulk-badge bulk-badge--mobile-top">
//                     <p>For Every {BULK_THRESHOLD} unit orders enjoy</p>
//                     <p className="bulk-price">${BULK_PRICE} Per Unit</p>
//                 </div>

//                 <div className="order-top">
//                     <div className="order-qty-wrap">
//                         <span className="qty-label">Quantity</span>
//                         <div className="qty-controls">
//                             <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
//                             <span className="qty-value">{qty}</span>
//                             <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
//                         </div>
//                     </div>
//                     <p className="order-unit-price">CAD$ {unitPrice.toFixed(2)}</p>
//                 </div>

//                 <div className="order-body">
//                     <div className="order-form">
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label>Full Name</label>
//                                 <input
//                                     name="fullName"
//                                     placeholder="Type here..."
//                                     value={form.fullName}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label>Email Address</label>
//                                 <input
//                                     name="email"
//                                     type="email"
//                                     placeholder="Type here..."
//                                     value={form.email}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label>Phone Number</label>
//                                 <input
//                                     name="phone"
//                                     type="tel"
//                                     placeholder="Type here..."
//                                     value={form.phone}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label>Delivery Address</label>
//                                 <input
//                                     name="address"
//                                     placeholder="Type here..."
//                                     value={form.address}
//                                     onChange={handleFormChange}
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bulk badge — desktop only, bottom-left of grid */}
//                     <div className="bulk-badge bulk-badge--desktop">
//                         <p>For Every {BULK_THRESHOLD} unit orders enjoy</p>
//                         <p className="bulk-price">${BULK_PRICE} Per Unit</p>
//                     </div>

//                     {/* Summary — right column, spans both rows */}
//                     <div className="order-summary">
//                         <div className="summary-rows">
//                             <div className="summary-row">
//                                 <span>Delivery Fee</span>
//                                 <span>CAD$ {DELIVERY_FEE.toFixed(2)}</span>
//                             </div>
//                             <div className="summary-row total-row">
//                                 <span>Total Order</span>
//                                 <span className="total-amount">CAD$ {total.toFixed(2)}</span>
//                             </div>
//                             <button className="btn-checkout" onClick={handleCheckout}>
//                                 Checkout <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1em" viewBox="0 0 24 20">
//                                     <path d="M0 0h24v24H0z" fill="none" />
//                                     <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Order;

import React, { useState } from "react";
import "./Order.css";

const UNIT_PRICE = 15.00;
const DELIVERY_FEE = 5.99;
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
    const total = unitPrice * qty + DELIVERY_FEE;

    const handleFormChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleCheckout = async () => {
        if (!form.fullName || !form.email || !form.phone || !form.address) {
            alert("Please fill in all fields before checking out.");
            return;
        }

        const orderData = {
            quantity: qty,
            unitPrice: unitPrice,
            deliveryFee: DELIVERY_FEE,
            total: total,
            customer: {
                fullName: form.fullName,
                email: form.email,
                phone: form.phone,
                address: form.address,
            },
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
                window.location.href = data.url;
                setQty(1);
                setForm({ fullName: "", email: "", phone: "", address: "" });
            } else {
                const errorData = await response.json().catch(() => null);
                // const message = errorData?.message || errorData?.error || "Something went wrong.";
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
                    <p>For Every {BULK_THRESHOLD} unit orders enjoy</p>
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
                        <p>For Every {BULK_THRESHOLD} unit orders enjoy</p>
                        <p className="bulk-price">${BULK_PRICE} Per Unit</p>
                    </div>

                    <div className="order-summary">
                        <div className="summary-rows">
                            <div className="summary-row">
                                <span>Delivery Fee</span>
                                <span>CAD$ {DELIVERY_FEE.toFixed(2)}</span>
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