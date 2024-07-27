import React from 'react'

function Banner() {
  return (
    <div>
        <div className="container-fluid">
            <div className="Banner">
                <div className="row">
                    <div className="col-md-6 p-0">
                        <div className="text banPadding">
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
            </div>
        </div>
    </div>
  )
}

export default Banner