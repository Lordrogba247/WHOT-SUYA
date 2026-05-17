import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./Menu.css";

// ── Placeholder images — swap with your real assets ──
import foodImg from "../assets/fish-and-chips.png";
import burgerImg from "../assets/burger.png";
import soupImg from "../assets/pepper-soup.png";

const menuData = [
    {
        category: "ENTREES",
        items: [
            { id: 1, name: "Jollof Rice", price: 15.00, img: foodImg },
            { id: 2, name: "Fried Rice", price: 19.00, img: foodImg },
            { id: 3, name: "Fully Loaded Jollof Rice", price: 25.00, img: foodImg },
            { id: 4, name: "Jollof Linguine", price: 25.00, img: foodImg },
            { id: 5, name: "Fried Yam & Smoked Turkey", price: 25.00, img: foodImg },
            { id: 6, name: "Fried Yam & Tilapia", price: 30.00, img: foodImg },
            { id: 7, name: "Fried Plantain & Tilapia", price: 28.00, img: foodImg },
            { id: 8, name: "Steak & Fries", price: 35.00, img: foodImg },
        ],
    },
    {
        category: "APPETIZERS",
        items: [
            { id: 9, name: "Pesto Grilled Prawns", price: 25.00, img: foodImg },
            { id: 10, name: "Chicken Wings", price: 20.00, img: foodImg },
            { id: 11, name: "Smoked Turkey Bites", price: 20.00, img: foodImg },
            { id: 12, name: "Gizzard & Fried Plantain (Gizdodo)", price: 20.00, img: foodImg },
            { id: 13, name: "Stewed Beef/Goat", price: 20.00, img: foodImg },
            { id: 14, name: "Peppered Snails", price: 35.00, img: foodImg },
            { id: 15, name: "Nkwobi (Cowfeet)", price: 30.00, img: foodImg },
            { id: 16, name: "Isi-Ewu (Goat Head)", price: 35.00, img: foodImg },
        ],
    },
    {
        category: "HANDHELDS",
        items: [
            { id: 17, name: "Chicken Club", price: 20.00, img: burgerImg },
            { id: 18, name: "What-A-Burger (80z Beef+Fries+more)", price: 20.00, img: burgerImg },
            { id: 19, name: "Chicken Burger", price: 18.00, img: burgerImg },
            { id: 20, name: "Bacon, Lettuce/Tomato Sandwich", price: 15.00, img: burgerImg },
            { id: 21, name: "Steak Sandwich", price: 30.00, img: burgerImg },
            { id: 22, name: "Chicken Fingers", price: 25.00, img: burgerImg },
        ],
    },
    {
        category: "SOUP",
        items: [
            { id: 23, name: "Cowfoot Peppersoup", price: 25.00, img: soupImg },
            { id: 24, name: "Tilapia Fish Peppersoup", price: 25.00, img: soupImg },
            { id: 25, name: "Catfish Peppersoup", price: 35.00, img: soupImg },
            { id: 26, name: "Goat Meat Peppersoup", price: 24.00, img: soupImg },
            { id: 27, name: "Turkey Peppersoup", price: 25.00, img: soupImg },
        ],
    },
    {
        category: "SIDES/EXTRAS",
        items: [
            { id: 28, name: "Beef Suya", price: 29.99, img: foodImg },
            { id: 29, name: "Ram Suya", price: 34.99, img: foodImg },
            { id: 30, name: "Asun", price: 29.99, img: foodImg },
            { id: 31, name: "Fried Whole Tilapia", price: 29.99, img: foodImg },
            { id: 32, name: "Foil Grilled Tilapia", price: 29.99, img: foodImg },
            { id: 33, name: "Grilled Catfish", price: 34.99, img: foodImg },
            { id: 34, name: "Short Ribs", price: 24.99, img: foodImg },
            { id: 35, name: "Yam Chips", price: 11.99, img: foodImg },
            { id: 36, name: "French Fries", price: 8.99, img: foodImg },
            { id: 37, name: "Sweet Potato Fries", price: 9.99, img: foodImg },
            { id: 38, name: "Fried Plantain", price: 6.99, img: foodImg },
            { id: 39, name: "Poutine", price: 10.99, img: foodImg },
            { id: 40, name: "House Sauce", price: 4.99, img: foodImg },
        ],
    },
];

const platter = {
    id: 99,
    name: "WHOT-A-PLATTER",
    description: "Chicken wings, Suya Kebabs, Pesto Grilled Prawns, Yam Chips & Fried Plantain",
    price: 60.00,
    img: foodImg,
};

const closeModal = (setContactOpen) => {
    setContactOpen(false);
    document.body.style.overflow = "";
};

export default function Menu({ cart, setCart }) {
    console.log("cart in menu:", cart);
    const [contactOpen, setContactOpen] = useState(false);
    const [addedId, setAddedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    // Pick up search term passed from Navbar
    useEffect(() => {
        if (location.state?.search) {
            setSearchTerm(location.state.search.toLowerCase());
        } else {
            setSearchTerm("");
        }
    }, [location.state]);

    // Clean up body overflow on unmount
    useEffect(() => {
        return () => { document.body.style.overflow = ""; };
    }, []);

    // Filter menu based on search term
    const filteredData = searchTerm
        ? menuData
            .map((section) => ({
                ...section,
                items: section.items.filter((item) =>
                    item.name.toLowerCase().includes(searchTerm)
                ),
            }))
            .filter((section) => section.items.length > 0)
        : menuData;

    const handleAddToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find((c) => c.id === item.id);
            if (existing) {
                return prev.map((c) =>
                    c.id === item.id ? { ...c, qty: c.qty + 1 } : c
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
        setAddedId(item.id);
        setTimeout(() => setAddedId(null), 1000);
    };

    return (
        <div className="menu-page">

            {/* ── Header ── */}
            <div className="menu-header">
                <h1 className="menu-title">MENU</h1>
                <p className="menu-subtitle">
                    Explore our menu to order variety of mouthwatering dishes for your pleasure and satisfaction
                </p>
            </div>

            {/* ── Cart shortcut ── */}
            {cart.length > 0 && (
                <button className="cart-float-btn" onClick={() => navigate("/cart")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 15 21">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
                    </svg>
                    View Cart ({cart.reduce((s, i) => s + i.qty, 0)})
                </button>
            )}

            <div className="menu-content">

                {/* ── Search indicator ── */}
                {searchTerm && (
                    <div className="search-indicator">
                        Showing results for: <strong>"{searchTerm}"</strong>
                        <button className="clear-search" onClick={() => setSearchTerm("")}>✕ Clear</button>
                    </div>
                )}

                {/* ── No results ── */}
                {filteredData.length === 0 && (
                    <div className="no-results">
                        <p>No items found for "<strong>{searchTerm}</strong>"</p>
                        <button className="clear-search" onClick={() => setSearchTerm("")}>Show all menu</button>
                    </div>
                )}

                {/* ── Categories ── */}
                {filteredData.map((section) => (
                    <div className="menu-category" key={section.category}>
                        <h2 className="category-title">{section.category}</h2>
                        <div className="menu-grid">
                            {section.items.map((item) => (
                                <div className="menu-card" key={item.id}>
                                    <div className="menu-card-img-wrap">
                                        <img src={item.img} alt={item.name} className="menu-card-img" />
                                    </div>
                                    <h3 className="menu-card-name">{item.name}</h3>
                                    <p className="menu-card-price">CAD${item.price.toFixed(2)}</p>
                                    <button
                                        className={`btn-add-cart ${addedId === item.id ? "btn-add-cart--added" : ""}`}
                                        onClick={() => handleAddToCart(item)}
                                    >
                                        {addedId === item.id ? "✓ Added!" : "Add to Cart"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                {/* ── Bottom row: Platter + Custom Order ── */}
                <div className="menu-bottom-row">

                    {/* Whot-a-Platter */}
                    <div className="menu-category platter-card">
                        <h2 className="category-title">{platter.name}</h2>
                        <div className="platter-inner">
                            <img src={platter.img} alt={platter.name} className="platter-img" />
                            <p className="menu-card-price">CAD${platter.price.toFixed(2)}</p>
                            <p className="platter-desc">{platter.description}</p>
                            <button
                                className={`btn-add-cart ${addedId === platter.id ? "btn-add-cart--added" : ""}`}
                                onClick={() => handleAddToCart(platter)}
                            >
                                {addedId === platter.id ? "✓ Added!" : "Add to Cart"}
                            </button>
                        </div>
                    </div>

                    {/* Custom Order */}
                    <div className="menu-category custom-order-card">
                        <h2 className="category-title">CUSTOM ORDER/<br />CHOOSE YOUR OWN MEAL</h2>
                        <p className="custom-order-text">
                            To make a custom order, kindly reach out to us by mail or Phone call
                        </p>
                        <button className="btn-contact" onClick={() => {
                            setContactOpen(true);
                            document.body.style.overflow = "hidden";
                        }}>
                            CONTACT US
                        </button>
                    </div>

                </div>
            </div>

            {/* ── Contact Modal — rendered via portal directly into document.body ── */}
            {contactOpen && ReactDOM.createPortal(
                <div className="modal-overlay" onClick={() => closeModal(setContactOpen)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => closeModal(setContactOpen)}>✕</button>
                        <h3 className="modal-title">Contact Us</h3>
                        <p className="modal-sub">Reach out to place a custom order or ask any question</p>
                        <div className="modal-item">
                            <span className="modal-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3" />
                                </svg>
                                Phone
                            </span>
                            <a href="tel:+19052660331" className="modal-link">+1 905-266-0331</a>
                        </div>
                        <div className="modal-item">
                            <span className="modal-label">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 4.99L4 6zm0 12H4V8l8 5l8-5z" />
                                </svg>
                                Email
                            </span>
                            <a href="mailto:info@whotfoods.ca" className="modal-link">info@whotfoods.ca</a>
                        </div>
                    </div>
                </div>,
                document.body
            )}

        </div>
    );
}