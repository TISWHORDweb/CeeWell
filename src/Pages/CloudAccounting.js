import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BannerImage from '../Assets/Images/3.png'
import DashboardImage1 from '../Assets/Images/5.jpg'
import DashboardImage2 from '../Assets/Images/6.jpg'
import DashboardImage3 from '../Assets/Images/4.jpg'
import { FiCloud, FiBarChart2, FiBook, FiClock, FiUsers, FiLayers, FiTrendingUp, FiDollarSign } from 'react-icons/fi'

function CloudAccounting() {
  return (
    <div className='CloudAccounting'>
      <Navbar />
      
      {/* Hero Banner with Gradient Overlay */}
      <div className="container-fluid">
        <div className="Banner with-overlay">
          <div className="row">
            <div className="col-md-6 p-0">
              <div className="text banPadding">
                <h1>Simplify Finance, Focus on Growth</h1>
                <p className="lead">Tired of manual processes and outdated systems? Our cloud accounting services automate workflows, deliver real-time insights, and scale with your business.</p>
                <div className="cta-group">
                  <a href="#contact"><button className='line-button'>Get a Free Workflow Audit</button></a>
                  <a href="#contact" className="secondary-cta">Scale Seamlessly →</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="img" style={{backgroundImage: `url(${BannerImage})`}}>
                {/* Image: Modern office with team reviewing financial dashboards */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Showcase */}
      <div className="container-fluid platform-showcase py-5">
        <div className="container">
          <h2 className="text-center fb mb-5">Integrated With Leading Platforms</h2>
          <div className="platform-grid">
            <div className="platform-item">QuickBooks Online</div>
            <div className="platform-item">Xero</div>
            <div className="platform-item">NetSuite</div>
            <div className="platform-item">Bill.com</div>
            <div className="platform-item">Expensify</div>
            <div className="platform-item">Stripe</div>
          </div>
        </div>
      </div>

      {/* Services Stack */}
      <div className="container-fluid services-stack">
        <div className="row g-0">
          {/* Service 1 */}
          <div className="col-lg-6 service-block">
            <div className="service-content">
              <div className="service-icon"><FiLayers size={36} /></div>
              <h3>Controller Services & Financial Management</h3>
              <p>Your virtual finance department handling oversight, compliance, and reporting with GAAP/IFRS adherence.</p>
              <ul>
                <li>Financial controls implementation</li>
                <li>Process optimization</li>
                <li>Regulatory compliance</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 service-image" style={{backgroundImage: `url(${DashboardImage1})`}}></div>

          {/* Service 2 */}
          <div className="col-lg-6 service-image order-lg-2" style={{backgroundImage: `url(${DashboardImage2})`}}></div>
          <div className="col-lg-6 service-block order-lg-1">
            <div className="service-content">
              <div className="service-icon"><FiBook size={36} /></div>
              <h3>Bookkeeping & Accounting</h3>
              <p>End-to-day transaction management with accuracy and efficiency.</p>
              <ul>
                <li>Payroll processing</li>
                <li>Bank reconciliations</li>
                <li>Chart of accounts management</li>
              </ul>
            </div>
          </div>

          {/* Service 3 */}
          <div className="col-lg-6 service-block">
            <div className="service-content">
              <div className="service-icon"><FiClock size={36} /></div>
              <h3>Month-End Close & Reporting</h3>
              <p>Timely financial statements and variance analysis to keep stakeholders informed.</p>
              <ul>
                <li>5-day close process</li>
                <li>Management dashboards</li>
                <li>KPI tracking</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 service-image" style={{backgroundImage: `url(${DashboardImage3})`}}></div>
        </div>
      </div>

      {/* Additional Services Cards */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card service-card-alt h-100">
              <div className="card-body">
                <div className="service-icon"><FiUsers size={36} /></div>
                <h3>Back-Office Support</h3>
                <p>Comprehensive AP/AR management and expense tracking to streamline operations.</p>
                <ul>
                  <li>Invoice processing</li>
                  <li>Expense management</li>
                  <li>Document organization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card service-card-alt h-100">
              <div className="card-body">
                <div className="service-icon"><FiBarChart2 size={36} /></div>
                <h3>Finance Staffing & Recruitment</h3>
                <p>Pre-vetted financial experts tailored to your specific needs.</p>
                <ul>
                  <li>Part-time bookkeepers</li>
                  <li>Full-time controllers</li>
                  <li>Specialized accountants</li>
                </ul>
                <button className='line-button mt-3'>Hire Talent</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container-fluid benefits-section py-5">
        <div className="container">
          <h2 className="text-center fb mb-5">The Cloud Accounting Advantage</h2>
          <div className="row">
            <div className="col-md-4 benefit-item">
              <div className="benefit-icon"><FiCloud size={32} /></div>
              <h4>Real-Time Visibility</h4>
              <p>Access financial data anytime, anywhere with secure cloud platforms</p>
            </div>
            <div className="col-md-4 benefit-item">
              <div className="benefit-icon"><FiTrendingUp size={32} /></div>
              <h4>Scalable Solutions</h4>
              <p>Grow your finance function seamlessly with your business</p>
            </div>
            <div className="col-md-4 benefit-item">
              <div className="benefit-icon"><FiDollarSign size={32} /></div>
              <h4>Cost Efficiency</h4>
              <p>Reduce overhead with pay-as-you-go cloud services</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container-fluid cta-section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Modernize Your Accounting?</h2>
            <p>Get a free assessment of your current workflow and discover automation opportunities.</p>
            <button className='line-button dark'>Get Your Free Audit</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CloudAccounting