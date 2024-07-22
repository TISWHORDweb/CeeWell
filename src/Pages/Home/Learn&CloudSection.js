import React from 'react'

function LearnCloudSection() {
    return (
        <div>
            <div className="container-fluid">
                <div className="BuildingSection">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="text banPadding" style={{ background: "transparent" }}>
                                <h1>Learn more about our automation service</h1>
                                <p>Scaling up is complex. Simplify it with CFO, cloud accounting, and automation expertise.</p>
                                <button className='line-button'>Start Here</button>
                            </div>
                        </div>
                        <div className="col-md-6 p-0">
                            <div className="text banPadding" style={{ background: "var(--color-second)" }}>
                                <h1>Cloud Accounting services </h1>
                                <p>Scaling up is complex. Simplify it with CFO, cloud accounting, and automation expertise.</p>
                                <button className='line-button'>Cloud Accounting Services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnCloudSection