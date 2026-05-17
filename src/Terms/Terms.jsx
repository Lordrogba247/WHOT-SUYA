import React from "react";
import "./Terms.css";

export default function Terms() {
    return (
        <div className="terms">
            <div className="terms-container">

                <h1 className="terms-title">TERMS OF USE</h1>
                <p className="terms-effective">Effective Date: May 15, 2026</p>

                <p className="terms-para">
                    Welcome to WHOT FOODS, a product of Whot Restaurant & Lounge. These Terms of Use
                    ("Terms") govern your access to and use of the WHOT FOODS website, services, online
                    ordering platform, and related features.
                </p>
                <p className="terms-para">
                    By accessing or using our platform, you agree to comply with and be bound by these Terms.
                    If you do not agree with these Terms, please do not use our services.
                </p>

                {/* 1 */}
                <h2 className="terms-section-title">1. Company Information</h2>
                <p className="terms-para">
                    WHOT FOODS; A Product of Whot Restaurant & Lounge. 7694 Islington Ave, Woodbridge,
                    Ontario L4L 1W3, Canada. &nbsp; Phone: +1 905-266-0331 &nbsp; Email: info@whotfoods.ca
                </p>

                {/* 2 */}
                <h2 className="terms-section-title">2. Eligibility</h2>
                <p className="terms-para">To use our services, you must:</p>
                <ul className="terms-list">
                    <li>Be at least 18 years old or have parental/guardian consent;</li>
                    <li>Provide accurate and complete information when placing orders;</li>
                    <li>Use the platform in compliance with all applicable laws and regulations.</li>
                </ul>
                <p className="terms-para">
                    We reserve the right to refuse service, terminate accounts, or cancel orders at our
                    discretion if these Terms are violated.
                </p>

                {/* 3 */}
                <h2 className="terms-section-title">3. Food Ordering Services</h2>
                <p className="terms-para">
                    WHOT FOODS provides an online platform where customers can:
                </p>
                <ul className="terms-list">
                    <li>Browse restaurant menus;</li>
                    <li>Place food orders;</li>
                    <li>Make secure payments;</li>
                    <li>Request delivery or pickup services.</li>
                </ul>
                <p className="terms-para">
                    All orders are subject to availability and acceptance by WHOT FOODS. We reserve the
                    right to:
                </p>
                <ul className="terms-list">
                    <li>Modify menu items and pricing without prior notice;</li>
                    <li>Limit quantities;</li>
                    <li>Refuse or cancel orders when necessary.</li>
                </ul>

                {/* 4 */}
                <h2 className="terms-section-title">4. Pricing and Payments</h2>
                <p className="terms-para">
                    All prices displayed on the website are listed in Canadian Dollars (CAD) unless otherwise
                    stated. Payments are securely processed through SquareUp payment services using debit or
                    credit cards. By submitting payment information, you authorize WHOT FOODS and its payment
                    processor to charge the applicable amount for your order. WHOT FOODS does not store full
                    payment card details on its servers. Additional charges may apply for:
                </p>
                <ul className="terms-list">
                    <li>Delivery fees;</li>
                    <li>Taxes;</li>
                    <li>Service charges;</li>
                    <li>Special requests.</li>
                </ul>

                {/* 5 */}
                <h2 className="terms-section-title">5. Delivery and Pickup</h2>
                <p className="terms-para">
                    Estimated delivery or pickup times are provided for convenience only and are not
                    guaranteed. Delivery times may vary due to:
                </p>
                <ul className="terms-list">
                    <li>Traffic conditions;</li>
                    <li>Weather;</li>
                    <li>High order volumes;</li>
                    <li>Operational delays.</li>
                </ul>
                <p className="terms-para">
                    Customers are responsible for providing accurate delivery information. WHOT FOODS is not
                    responsible for failed deliveries resulting from incorrect addresses or unavailable
                    recipients. Risk in the ordered items passes to the customer upon successful delivery or
                    pickup.
                </p>

                {/* 6 */}
                <h2 className="terms-section-title">6. Refunds and Cancellations</h2>
                <p className="terms-para">
                    Orders may only be cancelled before preparation begins. Refund requests may be considered
                    in cases involving:
                </p>
                <ul className="terms-list">
                    <li>Incorrect orders;</li>
                    <li>Missing items;</li>
                    <li>Payment errors;</li>
                    <li>Quality concerns.</li>
                </ul>
                <p className="terms-para">
                    To request assistance, customers should contact us promptly at{" "}
                    <a href="mailto:info@whotfoods.ca" className="terms-link">info@whotfoods.ca</a>{" "}
                    or{" "}
                    <a href="tel:+19052660331" className="terms-link">+1 905-266-0331</a>.
                    Approved refunds will be processed through the original payment method.
                </p>

                {/* 7 */}
                <h2 className="terms-section-title">7. User Conduct</h2>
                <p className="terms-para">Users agree not to:</p>
                <ul className="terms-list">
                    <li>Use the platform for unlawful purposes;</li>
                    <li>Interfere with website security or operations;</li>
                    <li>Provide false or misleading information;</li>
                    <li>Attempt unauthorized access to accounts or systems;</li>
                    <li>Abuse staff, delivery personnel, or customer support.</li>
                </ul>
                <p className="terms-para">
                    We reserve the right to suspend or terminate access for any misuse of the platform.
                </p>

                {/* 8 */}
                <h2 className="terms-section-title">8. Intellectual Property</h2>
                <p className="terms-para">
                    All content on the WHOT FOODS website, including logos, designs, images, menus, text,
                    graphics, and software, is the property of WHOT FOODS or its licensors and is protected
                    by applicable intellectual property laws. You may not reproduce, distribute, modify, or
                    commercially exploit any content without prior written permission.
                </p>

                {/* 9 */}
                <h2 className="terms-section-title">9. Allergies and Dietary Information</h2>
                <p className="terms-para">
                    WHOT FOODS makes reasonable efforts to provide accurate ingredient and allergen
                    information. However:
                </p>
                <ul className="terms-list">
                    <li>Food may be prepared in shared kitchen environments;</li>
                    <li>Cross-contamination may occur;</li>
                    <li>Ingredient availability may change.</li>
                </ul>
                <p className="terms-para">
                    Customers with allergies or dietary restrictions should contact us before placing orders.
                    WHOT FOODS is not liable for allergic reactions or health issues arising from food
                    consumption.
                </p>

                {/* 10 */}
                <h2 className="terms-section-title">10. Limitation of Liability</h2>
                <p className="terms-para">
                    To the maximum extent permitted by law, WHOT FOODS shall not be liable for:
                </p>
                <ul className="terms-list">
                    <li>Indirect or consequential damages;</li>
                    <li>Delayed deliveries;</li>
                    <li>Technical interruptions;</li>
                    <li>Third-party payment processing issues;</li>
                    <li>Losses resulting from unauthorized account access.</li>
                </ul>
                <p className="terms-para">
                    Our total liability relating to any order shall not exceed the total amount paid for
                    that order.
                </p>

                {/* 11 */}
                <h2 className="terms-section-title">11. Third-Party Services</h2>
                <p className="terms-para">
                    Our platform may integrate with third-party providers, including payment processors and
                    delivery services. WHOT FOODS is not responsible for the policies, availability, or
                    actions of third-party services. Use of third-party services may also be subject to
                    their own terms and policies.
                </p>

                {/* 12 */}
                <h2 className="terms-section-title">12. Privacy</h2>
                <p className="terms-para">
                    Your use of the platform is also governed by our Privacy Policy below.
                </p>

                {/* 13 */}
                <h2 className="terms-section-title">13. Changes to Terms</h2>
                <p className="terms-para">
                    WHOT FOODS may update these Terms at any time without prior notice. Updated versions
                    will be posted on our website with a revised effective date. Continued use of the
                    platform after changes constitutes acceptance of the revised Terms.
                </p>

                {/* 14 */}
                <h2 className="terms-section-title">14. Governing Law</h2>
                <p className="terms-para">
                    These Terms shall be governed by and interpreted in accordance with the laws of the
                    Province of Ontario and the applicable laws of Canada. Any disputes arising from these
                    Terms shall be subject to the jurisdiction of the courts located in Ontario, Canada.
                </p>

                {/* 15 */}
                <h2 className="terms-section-title">15. Contact Information</h2>
                <p className="terms-para">
                    For questions regarding these Terms, please contact:
                </p>
                <p className="terms-para">WHOT FOODS, 7694 Islington Ave, Woodbridge, Ontario L4L 1W3, Canada</p>
                <p className="terms-para">
                    Phone:{" "}
                    <a href="tel:+19052660331" className="terms-link">+1 905-266-0331</a>
                </p>
                <p className="terms-para">
                    Email:{" "}
                    <a href="mailto:info@whotfoods.ca" className="terms-link">info@whotfoods.ca</a>
                </p>

            </div>
        </div>
    );
}