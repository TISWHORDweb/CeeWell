import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BannerImage from '../Assets/Images/1.png'
import TeamDiscussionImage from '../Assets/Images/2.jpg'
import { FiTarget, FiTrendingUp, FiPieChart, FiDollarSign, FiBarChart2 } from 'react-icons/fi'

function FractionalCFO() {
  return (
    <div className='FractionalCFO'>
      <Navbar />
      
      {/* Hero Banner */}
      <div className="container-fluid">
        <div className="Banner">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="text banPadding pt-5">
                <h1>Expert CFO Services to Fuel Your Business Growth</h1>
                <p className="lead">Struggling to align financial strategy with growth goals? Our fractional CFOs bring decades of cross-industry expertise to startups and SMEs, delivering actionable insights to improve profitability and secure your financial future.                </p>
                {/* <ul className="benefits-list">
                  <li>Strategic financial roadmaps</li>
                  <li>Data-driven decision making</li>
                  <li>Investor-ready financial modeling</li>
                  <li>Cash flow optimization</li>
                </ul> */}
                <a href="#contact"><button className='line-button'>Schedule a Free Consultation</button></a>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="img" style={{backgroundImage: `url(${BannerImage})`}}>
                {/* Professional team analyzing financial charts in modern office */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="container py-5">
        <div className="value-proposition text-center mb-5">
          <h2 className="fb mb-4">Why Choose Our Fractional CFO Services?</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="value-card p-4">
                <div className="icon-container mb-3">
                  <FiBarChart2 size={40} />
                </div>
                <h4>Senior-Level Expertise</h4>
                <p>Access Fortune 500 caliber financial leadership at a fraction of the cost</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card p-4">
                <div className="icon-container mb-3">
                  <FiTrendingUp size={40} />
                </div>
                <h4>Growth Focused</h4>
                <p>Strategies specifically designed for scaling businesses</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="value-card p-4">
                <div className="icon-container mb-3">
                  <FiDollarSign size={40} />
                </div>
                <h4>Cost Effective</h4>
                <p>Only pay for the strategic support you need, when you need it</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container py-5">
        <h2 className="text-center fb mb-5">Comprehensive Financial Leadership</h2>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4 mb-5">
            <div className="service-card p-4 h-100">
              <div className="service-icon mb-3">
                <FiTarget size={48} />
              </div>
              <h3 className='fb mb-3'>Strategic Goal Setting</h3>
              <p className='mb-4'>We transform your vision into an actionable financial roadmap with clear KPIs and milestones to track progress.</p>
              <ul className="service-features">
                <li>3-5 year financial modeling</li>
                <li>Departmental budgeting</li>
                <li>KPI dashboard development</li>
              </ul>
            </div>
          </div>

          {/* Service 2 */}
          <div className="col-md-4 mb-5">
            <div className="service-card p-4 h-100">
              <div className="service-icon mb-3">
                <FiTrendingUp size={48} />
              </div>
              <h3 className='fb mb-3'>Cashflow Forecasting</h3>
              <p className='mb-4'>Our rolling 12-month forecasts help you anticipate cash needs and avoid liquidity crises before they happen.</p>
              <ul className="service-features">
                <li>Weekly cash position reporting</li>
                <li>Scenario planning</li>
                <li>Working capital optimization</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-md-4 mb-5">
            <div className="service-card p-4 h-100">
              <div className="service-icon mb-3">
                <FiPieChart size={48} />
              </div>
              <h3 className='fb mb-3'>Financial Projections</h3>
              <p className='mb-4'>Investor-grade financial models that clearly communicate your growth trajectory and capital needs.</p>
              <ul className="service-features">
                <li>Cap table management</li>
                <li>Burn rate analysis</li>
                <li>Unit economics modeling</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="col-md-6 mb-5">
            <div className="service-card p-4 h-100 dark-bg">
              <div className="service-icon mb-3">
                <FiDollarSign size={48} />
              </div>
              <h3 className='fb mb-3'>Fundraising Strategy</h3>
              <p className='mb-4'>We prepare you for successful capital raises with institutional-quality materials and investor messaging.</p>
              <ul className="service-features">
                <li>Pitch deck development</li>
                <li>Investor due diligence prep</li>
                <li>Term sheet evaluation</li>
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div className="col-md-6 mb-5">
            <div className="service-card p-4 h-100 black-bg">
              <div className="service-icon mb-3 second">
                <FiBarChart2 size={48} className='second' style={{backgroundColor: 'var(--color-second)'}}/>
              </div>
              <h3 className='fb mb-3'>Investment Analysis</h3>
              <p className='mb-4 second'>Data-driven frameworks to evaluate growth opportunities and capital allocation decisions.</p>
              <ul className="service-features">
                <li className='second'>M&A due diligence</li>
                <li className='second'>ROI modeling</li>
                <li className='second'>Portfolio optimization</li>
              </ul>
              <button className='line-button white-btn'>
                Partner with a CFO Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container-fluid py-5" style={{backgroundColor: 'var(--color-second)'}}>
        <div className="container">
          <blockquote className="testimonial">
            <p>"The fractional CFO from Cee & Wells helped us secure $5M in Series A funding and implement financial controls that scaled with our growth."</p>
            <footer className="testimonial-footer">
              <div className="testimonial-author">— Sarah Chen, CEO of TechStart Inc.</div>
              <div className="testimonial-role">SaaS Platform (Raised $12M)</div>
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Full-width CTA Section */}
      <div className="container-fluid">
        <div className="BuildingSection">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="text banPadding light-bg">
                <h2>Ready to Transform Your Financial Strategy?</h2>
                <p className="lead">Our fractional CFO services include:</p>
                <ul className="cta-features mb-4">
                  <li>Weekly strategic sessions</li>
                  <li>Monthly financial reviews</li>
                  <li>Quarterly planning workshops</li>
                  <li>Annual budgeting process</li>
                </ul>
                <a href="#contact"><button className='line-button'>Schedule Consultation</button></a>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="img" style={{backgroundImage: `url(${TeamDiscussionImage})`}}>
                {/* Diverse team collaborating in modern workspace */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FractionalCFO