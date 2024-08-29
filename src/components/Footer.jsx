import React from 'react'
import USA from '../assets/USA-Flag.png'
import pay1 from '../assets/GPay.png'
import pay2 from '../assets/MasterCard.png'
import pay3 from '../assets/Paypal.png'
import pay4 from '../assets/Amex.png'
import pay5 from '../assets/ApplePay.png'
import pay6 from '../assets/Opay.png'
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <section>
                <div>
                    <ul>
                        <h5>Be the first to know</h5>
                        <li>Sign up for updates from mettā muse.</li>
                        <li>
                            <input type="text" placeholder='Enter your e-mail...' />
                            <button>Subscribe</button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h5>Currency</h5>
                        <li>+44 221 133 5360</li>
                        <li>customercare@mettamuse.com</li>
                    </ul>
                    <ul>
                        <h5>CONTACT US</h5>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <img src={USA} alt="USA Img" />+USD
                        </li>
                        <li>Transactions will be completed in Euros and a currency reference is available on hover.</li>
                    </ul>
                </div>
            </section>
            <hr />
            <section id='last-section'>
                <div>
                    <ul>
                        <h5>mettā muse</h5>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h5>Quick Links</h5>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div style={{ borderBottom: '0' }}>
                    <ul>
                        <h5>Follow Us</h5>
                        <div>
                            <li><PiInstagramLogoFill size={20} /></li>
                            <li><FaLinkedin size={20} /></li>
                        </div>
                        <div>
                            <ul>
                                <h5 style={{ textTransform: 'lowercase' }}>mettā muse Accepts</h5>
                                <div>
                                    <li><img src={pay1} alt="img1" /></li>
                                    <li><img src={pay2} alt="img2" /></li>
                                    <li><img src={pay3} alt="img3" /></li>
                                    <li><img src={pay4} alt="img4" /></li>
                                    <li><img src={pay5} alt="img5" /></li>
                                    <li><img src={pay6} alt="img6" /></li>
                                </div>
                            </ul>
                        </div>
                    </ul>
                </div>
            </section>
            <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </footer>
    )
}
