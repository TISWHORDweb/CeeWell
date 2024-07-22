import React from 'react'
import Img1 from '../Assets/Images/Company Logo (1).png'
import Img2 from '../Assets/Images/Company Logo (2).png'
import Img3 from '../Assets/Images/Company Logo (3).png'
import Img4 from '../Assets/Images/Company Logo (4).png'
import Img5 from '../Assets/Images/Company Logo (5).png'
import Img6 from '../Assets/Images/Company Logo.png'

function Clients() {
    return (
        <div>
            <div className="container">
                <center>
                    <div className="Clients py-5">
                        <h2 className='fb'>World-class clients</h2>
                        <ul>
                            <li><img src={Img6} alt="" /></li>
                            <li><img src={Img1} alt="" /></li>
                            <li><img src={Img2} alt="" /></li>
                            <li><img src={Img3} alt="" /></li>
                            <li><img src={Img4} alt="" /></li>
                            <li><img src={Img5} alt="" /></li>
                        </ul>
                    </div>
                </center>
            </div>
        </div>
    )
}

export default Clients