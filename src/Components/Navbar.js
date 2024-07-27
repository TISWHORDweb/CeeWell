import React from 'react'
import Logo from '../Assets/Logo&Icon/Frame 2085662383.png'
import Right from '../Assets/Logo&Icon/Group (1).png'
import Icon1 from '../Assets/Logo&Icon/Group 38204.png'
import Icon2 from '../Assets/Logo&Icon/Group 38207.png'
import Icon3 from '../Assets/Logo&Icon/Group 38209.png'
import Icon4 from '../Assets/Logo&Icon/Vector.png'
import Icon5 from '../Assets/Logo&Icon/Group.png'
import Icon6 from '../Assets/Logo&Icon/Vector (1).png'
import Icon7 from '../Assets/Logo&Icon/formkit_instagram.png'
import Icon8 from '../Assets/Logo&Icon/mage_x.png'
import Icon9 from '../Assets/Logo&Icon/mingcute_facebook-fill.png'
import Dropdown from './Dropdown'

function Navbar() {
    return (
        <div>

            <div class="offcanvas offcanvas-end p-4" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-body ">
                    <div className="close" data-bs-dismiss="offcanvas" >
                        <img src={Icon6} alt="" />
                    </div>
                    <div className="links mt100">
                        <ul>
                            <li role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-expanded="false">CFO Services</li>
                            <li>Book Keeping & accounting</li>
                            <li>Insight</li>
                            <li>Careers</li>
                            <li className='b-none'><button className='dark-button'>Hire a CFO</button></li>
                        </ul>

                    </div>
                    <div className="social mt100">
                        <ul>
                            <li><img src={Icon9} alt="" /></li>
                            <li><img src={Icon8} alt="" /></li>
                            <li><img src={Icon7} alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="modal fade modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog ">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="drop">
                                        <div className="image">
                                            <img src={Icon3} alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Fundrasing Services <img src={Right} alt="" /></h4>
                                            <p>Improve IT operations </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="drop">
                                        <div className="image">
                                            <img src={Icon2} alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Cash Flow Budgeting & Management <img src={Right} alt="" /></h4>
                                            <p>Accelerate innovation faster </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="drop">
                                        <div className="image">
                                            <img src={Icon3} alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Financial Strategy and Planning <img src={Right} alt="" /></h4>
                                            <p>Improve IT operations </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="drop">
                                        <div className="image">
                                            <img src={Icon1} alt="" />
                                        </div>
                                        <div className="text">
                                            <h4>Business Valuations<img src={Right} alt="" /></h4>
                                            <p>Drive Marketing outcomes </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="/" className='logo'>
                        <img src={Logo} alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav m-auto mt-0 mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" aria-expanded="false">
                                    CFO Services
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
                                    Book Keeping & Account
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">
                                    Insight
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Careers</a>
                            </li>
                        </ul>
                        <ul className='nav-right mt-2'>
                            <li><img src={Icon5} alt="" className='globe' /></li>
                            <a href="#contact"><li><button className='dark-button'>Hire a CFO</button></li></a>
                            {/* <li><button className='line-button'>Get in Touch</button></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar