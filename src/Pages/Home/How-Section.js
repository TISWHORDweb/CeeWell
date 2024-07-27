import React from 'react'
import Img1 from '../../Assets/Images/Hero image.png'
import Img2 from '../../Assets/Images/Star (1).png'
import Img3 from '../../Assets/Images/Stroke and borderline.png'

function HowSection() {
  return (
    <div>
        <div className="container">
            <div className="HowSection py-5">
                <h1 className='fb'>How it works . . .</h1>
                <div className="row mt-3">
                    <div className="col-md-6 mb-3">
                        <div className="one">
                            <img src={Img2} alt="" className='img2 mb-3'/>
                            <img src={Img3} alt=""  className='img3' />
                            <p>Cee & Wells Ltd, we specialize in creating impactful brand activations that engage and excite your target audience. Our services are designed to bring your brand to life and achieve your strategic goals.</p>
                            <a href="#contact"><button className='line-button'> Book an Appointment</button></a>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-5 mb-3">
                        <div className="two"></div>
                    </div>
                </div>
                <div className="down mt-5">
                    <div className="h5 fb">What we Offer</div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <p><b>Experiential Marketing</b></p>
                            <p>We create immersive experiences like pop-up events and live demonstrations that leave lasting impression</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <p><b>Product Launches</b></p>
                            <p>Our comprehensive product launch services ensure your new product makes a big impact</p>
                        </div>
                        <div className="col-md-3 mb-3">
                            <p><b>Brand Activation Campaign</b></p>
                            <p>We design campaigns that amplify your brand’s message through social media, influencer partnerships, and more</p>
                        </div>
                        <div className="col-md-3 mb33">
                            <p><b>Community Engagement</b></p>
                            <p>We build strong brand communities through grassroots campaigns and large-scale events</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowSection