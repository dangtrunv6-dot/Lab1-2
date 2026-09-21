import React from 'react';
import products from '../data/products';
import { Product } from './ProductCard';

export const ProductList = ({ onAddToCart }) => {
    return (
        <section className="main-content" id="products-section">
            <h2 className="products-heading">Products</h2>
            <div className="product-list">
                {products.map((item) => {
                    return (
                        <Product
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            status={item.status}
                            image={item.image}
                            onAddToCart={onAddToCart}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default ProductList;