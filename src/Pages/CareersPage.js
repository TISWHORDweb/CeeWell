import React, { useState } from 'react'
import { FiBriefcase, FiHome, FiDollarSign, FiUsers, FiUpload, FiMail } from 'react-icons/fi'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function CareersPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    message: '',
    cv: null
  })

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Fractional CFO",
      type: "Full-time",
      location: "Remote",
      category: "cfo",
      description: "Lead financial strategy for multiple startup clients, helping them scale efficiently."
    },
    {
      id: 2,
      title: "Cloud Accounting Specialist",
      type: "Full-time",
      location: "Remote",
      category: "accounting",
      description: "Implement and optimize cloud accounting systems for diverse SME clients."
    },
    {
      id: 3,
      title: "Finance Recruitment Coordinator",
      type: "Part-time",
      location: "Remote",
      category: "operations",
      description: "Connect top finance talent with growing businesses."
    }
  ]

  const filteredJobs = activeTab === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === activeTab)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cv: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
    alert('Application submitted successfully!')
  }

  return (
    <div className="CareersPage">
      <Navbar />
      
      {/* Hero Section */}
      <div className="careers-hero">
        <div className="container">
          <h1>Grow Your Career, Empower Businesses</h1>
          <p className="lead">We're always seeking passionate finance professionals to join our remote-first team.</p>
          <button className="line-button">View Open Roles</button>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="benefits-section">
        <div className="container">
          <h2 className="text-center">Why Join Cee & Wells?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FiBriefcase className="benefit-icon" />
              <h3>Diverse Clientele</h3>
              <p>Work with startups and SMEs across multiple industries</p>
            </div>
            <div className="benefit-card">
              <FiHome className="benefit-icon" />
              <h3>Flexible Work</h3>
              <p>Remote-first environment with async collaboration</p>
            </div>
            <div className="benefit-card">
              <FiDollarSign className="benefit-icon" />
              <h3>Competitive Pay</h3>
              <p>Compensation that matches your skills and experience</p>
            </div>
            <div className="benefit-card">
              <FiUsers className="benefit-icon" />
              <h3>Growth Focus</h3>
              <p>Continuous learning and leadership opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Open Roles */}
      <div className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2>Open Roles</h2>
            <div className="job-filters">
              <button 
                className={activeTab === 'all' ? 'active' : ''}
                onClick={() => setActiveTab('all')}
              >
                All Roles
              </button>
              <button 
                className={activeTab === 'cfo' ? 'active' : ''}
                onClick={() => setActiveTab('cfo')}
              >
                CFO Services
              </button>
              <button 
                className={activeTab === 'accounting' ? 'active' : ''}
                onClick={() => setActiveTab('accounting')}
              >
                Accounting
              </button>
              <button 
                className={activeTab === 'operations' ? 'active' : ''}
                onClick={() => setActiveTab('operations')}
              >
                Operations
              </button>
            </div>
          </div>

          <div className="jobs-list">
            {filteredJobs.length > 0 ? (
              filteredJobs.map(job => (
                <div className="job-card" key={job.id}>
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <div className="job-meta">
                      <span>{job.type}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                    <p>{job.description}</p>
                  </div>
                  <button 
                    className="line-button"
                    onClick={() => document.getElementById('apply-form').scrollIntoView()}
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <p>No current openings in this category. Check back soon or submit your CV below!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="apply-section" id="apply-form">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Ready to Make an Impact?</h2>
              <p>Submit your CV and we'll contact you about matching opportunities.</p>
              <div className="contact-alternative">
                <FiMail />
                <span>Prefer email? Send to careers@ceeandwells.com</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label>Role Interested In</label>
                <select 
                  name="role" 
                  value={formData.role}
                  onChange={handleInputChange}
                >
                  <option value="">Select a role</option>
                  {jobOpenings.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                  <option value="other">Other (Specify below)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>
              
              <div className="form-group file-upload">
                <label>
                  <FiUpload />
                  <span>Upload CV (PDF, max 5MB)</span>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    required
                  />
                </label>
                {formData.cv && <span className="file-name">{formData.cv.name}</span>}
              </div>
              
              <button type="submit" className="line-button">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default CareersPage