import React, { useEffect, useState } from 'react'
import './Product.css'
import Productscard from '../../components/Productcard/Productscard'
function Product() {
    let [products, setproducts] = useState([])

    function fetchData() {
        fetch("https://fakestoreapi.com/products")
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data)
                setproducts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="product-container">
            {
                products.map((prod) => {
                    return (
                        <Productscard
                            key={prod.id}
                            title={prod.title}
                            image={prod.image}
                            price={prod.price}
                            description={prod.description}
                            rating={prod.rating.rate}
                        />
                    )
                })
            }
        </div>
    )
}

export default Product