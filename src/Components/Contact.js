import React from 'react'
import Img1 from '../Assets/Images/Icons.png'
import Img2 from '../Assets/Images/Line 2.png'
import Img3 from '../Assets/Images/ArrowRight.png'

function Contact() {
    return (
        <div>
            <div className="Contact py-5" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 pe-0">
                            <div className="text banPadding">
                                <h1 className='fb'>Have a project idea! Drop me a line.</h1>
                                <p>Aenean vestibulum felis nec egestas fringilla. Duis non felis consequat, varius sapien convallis, tincidunt nisl. </p>
                                <div className="email mt-4">
                                    <img src={Img1} alt="" />
                                    <div className="ms-3">
                                        <small>EMAIL US</small>
                                        <p>info@golio.com</p>
                                    </div>
                                </div>
                                <div className="connect mt-4">
                                    <div className="">
                                        <img src={Img2} alt="" />
                                        <span className='ms-2'>Connect with us:</span>
                                    </div>
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                            </svg>
                                        </li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 16 16">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                        </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                            </svg>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dribbble" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 0C3.584 0 0 3.584 0 8s3.584 8 8 8c4.408 0 8-3.584 8-8s-3.592-8-8-8m5.284 3.688a6.8 6.8 0 0 1 1.545 4.251c-.226-.043-2.482-.503-4.755-.217-.052-.112-.096-.234-.148-.355-.139-.33-.295-.668-.451-.99 2.516-1.023 3.662-2.498 3.81-2.69zM8 1.18c1.735 0 3.323.65 4.53 1.718-.122.174-1.155 1.553-3.584 2.464-1.12-2.056-2.36-3.74-2.551-4A7 7 0 0 1 8 1.18m-2.907.642A43 43 0 0 1 7.627 5.77c-3.193.85-6.013.833-6.317.833a6.87 6.87 0 0 1 3.783-4.78zM1.163 8.01V7.8c.295.01 3.61.053 7.02-.971.199.381.381.772.555 1.162l-.27.078c-3.522 1.137-5.396 4.243-5.553 4.504a6.82 6.82 0 0 1-1.752-4.564zM8 14.837a6.8 6.8 0 0 1-4.19-1.44c.12-.252 1.509-2.924 5.361-4.269.018-.009.026-.009.044-.017a28.3 28.3 0 0 1 1.457 5.18A6.7 6.7 0 0 1 8 14.837m3.81-1.171c-.07-.417-.435-2.412-1.328-4.868 2.143-.338 4.017.217 4.251.295a6.77 6.77 0 0 1-2.924 4.573z" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 ps-0">
                            <div className="form">
                                <h4><b>Unlock Your Business’s Potential - Schedule your free Discovery Call</b></h4>
                                <p>Got a project? Drop me a line if you want to work together on something exciting. Or do you need our help? Feel free to contact us.</p>
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email">Name</label>
                                                <input type="text" placeholder='Full name' class="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email">Contact Number</label>
                                                <input type="number" placeholder='Number' class="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email">Company Location</label>
                                                <input type="text" placeholder='Location' class="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" placeholder='Email address' class="form-control" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email">Country/Region</label>
                                                <select class="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
                                                    <option selected>Select Country</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div class="form-group">
                                                <label for="email">Select Date and Time </label>
                                                <input type="date" placeholder='' class="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group  mb-3">
                                        <label for="email">Email</label>
                                        <input type="email" placeholder='Email address' class="form-control" />
                                    </div>
                                    <small>Is there something you will like to tell us about your business</small>
                                    <div class="form-floating mb-3">
                                        <textarea class="form-control" placeholder="Leave a comment here" style={{height:"100px"}}></textarea>
                                        <label for="floatingTextarea2Disabled">Tell us about your project...</label>
                                    </div>
                                    <small className='mb-3'>By proceeding to book an appointment, you agreed to the <span> Terms and Conditions</span> and <span>privacy Policy.</span></small> <br />
                                    <button type="submit" class="dark-button mt-3">Book An Appointment <img src={Img3} alt="" /></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Contact