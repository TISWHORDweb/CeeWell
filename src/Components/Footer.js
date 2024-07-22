import React from 'react'
import Logo from '../Assets/Logo&Icon/Frame 2085662383 (1).png'

function Footer() {
    return (
        <div>
            <div className="Footer">
                <div className="container mt-5">
                    <div className="row ">
                        <div className="col-md-9">
                            <div className="list">
                                <ul>
                                    <li className='big'>CFO services</li>
                                    <li>CFO Service Overview</li>
                                    <li>CFo Services Package</li>
                                    <li>Accounting & Audit Support</li>
                                    <li>Business valuations</li>
                                    <li>Final Decision-Making</li>
                                    <li>Implementing Management</li>
                                </ul>
                                <ul>
                                    <li className='big'>Book keeping and Accounting</li>
                                    <li>Accounting</li>
                                    <li>Annual Financial Statement</li>
                                    <li>Payroll Services</li>
                                    <li>Monthly Bookkeeping</li>
                                    <li>Reporting</li>
                                </ul>
                                <ul>
                                    <li className='big'>Insight</li>
                                    <li>About us</li>
                                    <li>Blogs</li>
                                    <li>Resources</li>
                                </ul>
                                <ul>
                                    <li className='big'>Careers</li>
                                    <li>Job Openings</li>
                                    <li>Get in Touch</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <p className='big'>Subscribe</p>
                            <div className="email">
                                <input type="email" placeholder='Email address' />
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </div>
                            <div className="IMG mt-4">
                            <img src={Logo} alt="" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="down">
                        <p>© 2024 cee & well</p>
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer