import React from 'react';

export const Product = ({ name, price, status, image, onAddToCart }) => {
    return (
        <div className="product-card">
            <figure className="product-figure">
                <img src={image} alt={name} className="product-img" />
            </figure>
            <div className="product-details">
                <div className="product-row">
                    <strong>name: </strong>
                    <span>{name}</span>
                </div>
                <div className="product-row">
                    <strong>status: </strong>
                    <span className="product-status-tag">{status}</span>
                </div>
                <div className="product-row">
                    <strong>price: </strong>
                    <span className="product-price">{price ? price.toLocaleString('vi-VN') : 0} VND</span>
                </div>
                <button 
                    type="button" 
                    className="add-cart-btn"
                    onClick={() => onAddToCart && onAddToCart({ name, price, image })}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export const ProductCard = Product;
export default Product;