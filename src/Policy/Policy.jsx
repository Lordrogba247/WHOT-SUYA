import React from "react";
import "./Policy.css";

export default function Policy() {
    return (
        <div className="policy">
            <div className="policy-container">

                <h1 className="policy-title">PRIVACY POLICY</h1>
                <p className="policy-effective">Effective Date: May 15, 2026</p>

                <p className="policy-para">
                    WHOT FOODS ("we," "our," or "us") respects your privacy and is committed to protecting
                    your personal information. This Privacy Policy explains how we collect, use, disclose,
                    and safeguard your information when you use our website, online ordering system, and
                    related services.
                </p>
                <p className="policy-para">
                    By using our services, you agree to the practices described in this Privacy Policy.
                </p>

                {/* 1 */}
                <h2 className="policy-section-title">1. Company Information</h2>
                <p className="policy-para">
                    WHOT FOODS; A Product of Whot Restaurant & Lounge, 7694 Islington Ave, Woodbridge,
                    Ontario L4L 1W3, Canada. Phone: +1 905-266-0331 &nbsp; Email: info@whotfoods.ca
                </p>

                {/* 2 */}
                <h2 className="policy-section-title">2. Information We Collect</h2>
                <p className="policy-para">We may collect the following categories of information:</p>

                <p className="policy-sub-title">Personal Information</p>
                <ul className="policy-list">
                    <li>Full name;</li>
                    <li>Email address;</li>
                    <li>Phone number;</li>
                    <li>Delivery or billing address;</li>
                    <li>Order details;</li>
                </ul>

                <p className="policy-sub-title">Payment Information</p>
                <p className="policy-para">
                    Payments are processed securely through SquareUp payment services. WHOT FOODS does
                    not directly store complete debit or credit card information on its servers.
                </p>

                <p className="policy-sub-title">Device and Usage Information</p>
                <p className="policy-para">We may automatically collect:</p>
                <ul className="policy-list">
                    <li>IP address;</li>
                    <li>Browser type;</li>
                    <li>Device information;</li>
                    <li>Operating system;</li>
                    <li>Website activity and usage patterns.</li>
                </ul>

                <p className="policy-sub-title">Cookies and Tracking Technologies</p>
                <p className="policy-para">We may use cookies and similar technologies to:</p>
                <ul className="policy-list">
                    <li>Improve website functionality;</li>
                    <li>Remember user preferences;</li>
                    <li>Analyze website traffic;</li>
                    <li>Enhance user experience.</li>
                </ul>
                <p className="policy-para">
                    Users may disable cookies through browser settings, though some website features may
                    not function properly.
                </p>

                {/* 3 */}
                <h2 className="policy-section-title">3. How We Use Your Information</h2>
                <p className="policy-para">We use collected information to:</p>
                <ul className="policy-list">
                    <li>Process and fulfill orders;</li>
                    <li>Facilitate payments;</li>
                    <li>Coordinate deliveries and pickups;</li>
                    <li>Provide customer support;</li>
                    <li>Send order confirmations and updates;</li>
                    <li>Improve website functionality and services;</li>
                    <li>Prevent fraud and unauthorized activity;</li>
                    <li>Comply with legal obligations.</li>
                </ul>
                <p className="policy-para">
                    We may also use contact information to send promotional communications where permitted
                    by law. Users may opt out at any time.
                </p>

                {/* 4 */}
                <h2 className="policy-section-title">4. Sharing of Information</h2>
                <p className="policy-para">We may share information with:</p>

                <p className="policy-sub-title">Service Providers</p>
                <p className="policy-para">Third-party providers assisting with:</p>
                <ul className="policy-list">
                    <li>Payment processing;</li>
                    <li>Website hosting;</li>
                    <li>Delivery services;</li>
                    <li>Analytics;</li>
                    <li>Customer support.</li>
                </ul>

                <p className="policy-sub-title">Legal Compliance</p>
                <p className="policy-para">We may disclose information when required to:</p>
                <ul className="policy-list">
                    <li>Comply with legal obligations;</li>
                    <li>Respond to lawful requests;</li>
                    <li>Protect our rights, customers, or operations.</li>
                </ul>

                <p className="policy-sub-title">Business Transfers</p>
                <p className="policy-para">
                    In the event of a merger, acquisition, or sale of assets, customer information may be
                    transferred as part of the transaction. We do not sell personal information to third
                    parties.
                </p>

                {/* 5 */}
                <h2 className="policy-section-title">5. Data Security</h2>
                <p className="policy-para">
                    We implement reasonable administrative, technical, and physical safeguards to protect
                    personal information.
                </p>
                <p className="policy-para">
                    However, no electronic transmission or storage system can be guaranteed completely
                    secure. Users provide information at their own risk.
                </p>

                {/* 6 */}
                <h2 className="policy-section-title">6. Data Retention</h2>
                <p className="policy-para">
                    We retain personal information only for as long as necessary to:
                </p>
                <ul className="policy-list">
                    <li>Provide services;</li>
                    <li>Maintain business records;</li>
                    <li>Resolve disputes;</li>
                    <li>Comply with legal and regulatory requirements.</li>
                </ul>
                <p className="policy-para">
                    When information is no longer required, we will securely delete or anonymize it where
                    appropriate.
                </p>

                {/* 7 */}
                <h2 className="policy-section-title">7. Your Privacy Rights</h2>
                <p className="policy-para">
                    Subject to applicable laws, users may have the right to:
                </p>
                <ul className="policy-list">
                    <li>Access personal information;</li>
                    <li>Correct inaccurate information;</li>
                    <li>Request deletion of information;</li>
                    <li>Withdraw consent where applicable;</li>
                    <li>Opt out of marketing communications.</li>
                </ul>
                <p className="policy-para">
                    Requests may be submitted to{" "}
                    <a href="mailto:info@whotfoods.ca" className="policy-link">info@whotfoods.ca</a>.
                </p>

                {/* 8 */}
                <h2 className="policy-section-title">8. Children's Privacy</h2>
                <p className="policy-para">
                    Our services are not intended for children under the age of 13. We do not knowingly
                    collect personal information from children. If we become aware that information from a
                    child has been collected without appropriate consent, we will take steps to delete it.
                </p>

                {/* 9 */}
                <h2 className="policy-section-title">9. Third-Party Links</h2>
                <p className="policy-para">
                    Our website may contain links to third-party websites or services. WHOT FOODS is not
                    responsible for the privacy practices or content of external websites. Users should
                    review third-party privacy policies before providing personal information.
                </p>

                {/* 10 */}
                <h2 className="policy-section-title">10. International Users</h2>
                <p className="policy-para">
                    If users access our services from outside Canada, their information may be transferred
                    to and processed in Canada where privacy laws may differ from those in their
                    jurisdiction. By using our services, users consent to such transfer and processing.
                </p>

                {/* 11 */}
                <h2 className="policy-section-title">11. Changes to This Privacy Policy</h2>
                <p className="policy-para">
                    We may update this Privacy Policy periodically. Updated versions will be posted on our
                    website with a revised effective date. Continued use of the platform after updates
                    constitutes acceptance of the revised Privacy Policy.
                </p>

                {/* 12 */}
                <h2 className="policy-section-title">12. Contact Us</h2>
                <p className="policy-para">
                    For questions, concerns, or privacy requests, please contact:
                </p>
                <p className="policy-para">
                    WHOT FOODS, 7694 Islington Ave, Woodbridge, Ontario L4L 1W3, Canada
                </p>
                <p className="policy-para">
                    Phone:{" "}
                    <a href="tel:+19052660331" className="policy-link">+1 905-266-0331</a>
                </p>
                <p className="policy-para">
                    Email:{" "}
                    <a href="mailto:info@whotfoods.ca" className="policy-link">info@whotfoods.ca</a>
                </p>

            </div>
        </div>
    );
}