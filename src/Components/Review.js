import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { EffectCoverflow, Pagination } from 'swiper/modules';
import Img1 from '../Assets/Images/Quotes.png'
import Img2 from '../Assets/Images/card-header (1).png'
import Img3 from '../Assets/Images/card-header (2).png'
import Img4 from '../Assets/Images/card-header.png'
import Img5 from '../Assets/Images/Image.png'

function Review() {
    return (
        <div>
            <div className="Review">
                <div className="container">
                    <center> <h1 className="fb">
                        Our Client Review
                    </h1></center>
                    <div className="my-5">
                      <center>
                      <>
                            <Swiper
                                effect={'coverflow'}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={'auto'}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={true}
                                modules={[EffectCoverflow, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="swipeCard">
                                        <div className="cl">
                                        <img src={Img5} alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="img mb-3">
                                                <img src={Img1} alt="" />
                                            </div>
                                            <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                            <h4>Kyle Merwin</h4>
                                            <span>CO-owner</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swipeCard">
                                        <div className="cl">
                                        <img src={Img4} alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="img mb-3">
                                                <img src={Img1} alt="" />
                                            </div>
                                            <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                            <h4>Kyle Merwin</h4>
                                            <span>CO-owner</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swipeCard">
                                        <div className="cl">
                                        <img src={Img3} alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="img mb-3">
                                                <img src={Img1} alt="" />
                                            </div>
                                            <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                            <h4>Kyle Merwin</h4>
                                            <span>CO-owner</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swipeCard">
                                        <div className="cl">
                                        <img src={Img2} alt="" />
                                        </div>
                                        <div className="text">
                                            <div className="img mb-3">
                                                <img src={Img1} alt="" />
                                            </div>
                                            <p>Aut nihil mollitia deserunt quia sed rem. Quibusdam amet veniam rerum id rerum beatae. Quas rerum iste necessitatibus. At voluptates ad magnam blanditiis excepturi expedita aut. Aut repellat inventore qui minima illum est.</p>
                                            <h4>Kyle Merwin</h4>
                                            <span>CO-owner</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </>
                      </center>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Review