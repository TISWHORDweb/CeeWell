import React from 'react'

function BuildingSection() {
    return (
        <div>
            <div className="container-fluid">
                <div className="BuildingSection">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="text banPadding" style={{background:"transparent"}}>
                                <h1>Building a world-class finance </h1>
                                <p>Scaling up is complex. Simplify it with CFO, cloud accounting, and automation expertise.</p>
                                <a href="#contact"><button className='line-button'> Book an Appointment</button></a>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="img">
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="img2">
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="text banPadding" style={{background:"white"}}>
                                <h1>Building a world-class finance </h1>
                                <p>Scaling up is complex. Simplify it with CFO, cloud accounting, and automation expertise.</p>
                                <a href="#contact"><button className='line-button'> Book an Appointment</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildingSection