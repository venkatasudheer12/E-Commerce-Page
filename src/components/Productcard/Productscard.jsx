import React from 'react'
import "./Productscard.css"
function Productscard({ title, image, price, description, rating }) {
    return (
        <div className="product-card">

            <div className="image-box">
                <img src={image} alt={title} />
            </div>

            <div className="product-content">

                <h2>{title}</h2>

                <p className="description">
                    {description}
                </p>

                <div className="product-bottom">

                    <h3>${price}</h3>

                    <span className="rating">
                        ⭐ {rating}
                    </span>

                </div>

                <button>View Product</button>

            </div>

        </div>
    )
}

export default Productscard