import React, { useState } from 'react'
import { FiTrendingUp, FiPieChart, FiDollarSign, FiClock, FiBook, FiCloud, FiSearch } from 'react-icons/fi'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import BannerImage from '../Assets/Images/7.jpg'
import { useNavigate } from 'react-router-dom'

function InsightsPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  const insightsData = [
    {
      id: 'cash-flow-optimization',
      icon: <FiTrendingUp size={24} />,
      title: "Cash Flow Optimization",
      excerpt: "Three strategies to improve working capital efficiency",
      category: "Financial Strategy",
      readTime: "5 min"
    },
    {
      id: 'metrics-that-matter',
      icon: <FiPieChart size={24} />,
      title: "Metrics That Matter",
      excerpt: "The KPIs investors actually care about in 2024",
      category: "Analysis",
      readTime: "7 min"
    },
    {
      id: 'fundraising-prep',
      icon: <FiDollarSign size={24} />,
      title: "Fundraising Prep",
      excerpt: "Getting your books investor-ready in 90 days",
      category: "Funding",
      readTime: "8 min"
    },
    {
      id: 'faster-month-end-close',
      icon: <FiClock size={24} />,
      title: "Faster Month-End Close",
      excerpt: "Cut your closing process from 10 days to 5",
      category: "Accounting",
      readTime: "6 min"
    },
    {
      id: 'bookkeeping-best-practices',
      icon: <FiBook size={24} />,
      title: "Bookkeeping Best Practices",
      excerpt: "Maintaining clean records for scaling businesses",
      category: "Accounting",
      readTime: "4 min"
    },
    {
      id: 'cloud-migration-guide',
      icon: <FiCloud size={24} />,
      title: "Cloud Migration Guide",
      excerpt: "Transitioning from desktop to cloud accounting",
      category: "Technology",
      readTime: "10 min"
    }
  ]

  const featuredInsight = {
    id: '2024-financial-planning',
    title: "2024 Financial Planning Outlook",
    excerpt: "Key trends and strategies for navigating economic uncertainty while maintaining growth",
    readTime: "12 min",
    category: "Featured Report"
  }

  const filteredInsights = insightsData.filter(insight => {
    const matchesSearch = insight.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         insight.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All Categories' || 
                          insight.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleReadInsight = (id) => {
    navigate(`/insights/${id}`)
    // Alternatively, for external links:
    // window.location.href = `https://yourdomain.com/insights/${id}`
  }

  return (
    <div className="InsightsPage">
      <Navbar />
      
      {/* Hero Section */}
      <div className="insights-hero">
        <div className="container">
          <h1>Strategic Insights</h1>
          <p className="subtitle">Expert analysis to power your financial decisions</p>
          <div className="search-filter">
            <div className="search-box">
              <FiSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search insights..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option>All Categories</option>
              <option>Financial Strategy</option>
              <option>Cloud Accounting</option>
              <option>Funding</option>
              <option>Operations</option>
              <option>Accounting</option>
              <option>Technology</option>
              <option>Analysis</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Insight */}
      <div className="featured-insight container">
        <div className="featured-card">
          <div className="featured-content">
            <span className="category-badge">{featuredInsight.category}</span>
            <h2>{featuredInsight.title}</h2>
            <p>{featuredInsight.excerpt}</p>
            <div className="meta">
              <span>{featuredInsight.readTime} read</span>
              <a 
                href={`/insights/${featuredInsight.id}`} 
                className="read-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleReadInsight(featuredInsight.id)
                }}
              >
                Read Report →
              </a>
            </div>
          </div>
          <div className="featured-image">
            <div className="image-placeholder" style={{backgroundImage: `url(${BannerImage})`, backgroundSize:"cover"}}></div>
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="insights-grid container">
        <h2 className="section-title">Latest Insights</h2>
        {filteredInsights.length > 0 ? (
          <div className="grid">
            {filteredInsights.map((insight) => (
              <div className="insight-card" key={insight.id}>
                <div className="card-icon">{insight.icon}</div>
                <span className="category">{insight.category}</span>
                <h3>{insight.title}</h3>
                <p>{insight.excerpt}</p>
                <div className="card-footer">
                  <span>{insight.readTime} read</span>
                  <a 
                    href={`/insights/${insight.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleReadInsight(insight.id)
                    }}
                  >
                    Read →
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No insights found matching your criteria. Try adjusting your search or filters.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="insights-cta">
        <div className="container">
          <h2>Need Custom Insights for Your Business?</h2>
          <p>Our experts can analyze your specific situation and provide tailored recommendations</p>
          <button className="line-button">Request Consultation</button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default InsightsPage