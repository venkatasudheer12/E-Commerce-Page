import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">

        <div className="hero-content">
          <p className="small-title">WELCOME TO E-COMMERCE</p>

          <h1>
            Shop Smart.
            <span> Live Better.</span>
          </h1>

          <p className="hero-text">
            Discover amazing products at great prices.
            Find everything you need in one place.
          </p>

          <Link to="/product" className="shop-btn">
            Shop Now →
          </Link>
        </div>

        <div className="hero-image">
          <div className="circle">
            🛍️
          </div>
        </div>

      </section>

      {/* Categories */}
      <section className="categories">

        <h2>Shop By Category</h2>
        <p className="section-text">
          Explore our popular categories
        </p>

        <div className="category-container">

          <div className="category-card blue">
            <div className="category-icon">👕</div>
            <h3>Men's Fashion</h3>
            <p>Trendy clothes and accessories</p>
          </div>

          <div className="category-card pink">
            <div className="category-icon">👗</div>
            <h3>Women's Fashion</h3>
            <p>Latest styles and collections</p>
          </div>

          <div className="category-card orange">
            <div className="category-icon">💎</div>
            <h3>Jewellery</h3>
            <p>Beautiful jewellery collections</p>
          </div>

          <div className="category-card green">
            <div className="category-icon">💻</div>
            <h3>Electronics</h3>
            <p>Smart gadgets and devices</p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="features">

        <div className="feature">
          <div>🚚</div>
          <h3>Free Delivery</h3>
          <p>Free delivery on selected orders</p>
        </div>

        <div className="feature">
          <div>🔒</div>
          <h3>Secure Payment</h3>
          <p>Safe and secure payment options</p>
        </div>

        <div className="feature">
          <div>↩️</div>
          <h3>Easy Returns</h3>
          <p>Simple and easy return process</p>
        </div>

        <div className="feature">
          <div>⭐</div>
          <h3>Quality Products</h3>
          <p>Products you can trust</p>
        </div>

      </section>

      {/* Offer */}
      <section className="offer">

        <div>
          <p>LIMITED TIME OFFER</p>

          <h2>
            Get Special Deals
          </h2>

          <p>
            Explore our products and find your
            favourite items today.
          </p>

          <Link to="/product" className="offer-btn">
            Explore Products
          </Link>
        </div>

        <div className="offer-shape">
          🛒
        </div>

      </section>

    </div>
  )
}

export default Home