import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, idx) => idx !== indexToRemove));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleNavigate = (tab) => {
    setActiveTab(tab);
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (tab === 'product') {
      const productSection = document.getElementById('products-section');
      if (productSection) {
        productSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'contact') {
      const contactSection = document.getElementById('footer-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (tab === 'cart') {
      setIsCartOpen(true);
    }
  };

  const totalCartPrice = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <div className="App">
      <Header 
        cartCount={cartItems.length} 
        onNavigate={handleNavigate} 
        activeTab={activeTab} 
      />

      <main className="content-container">
        <Banner />
        <ProductList onAddToCart={handleAddToCart} />
      </main>

      <Footer />

      {/* Cart Modal Dialog (Monochrome / Black & White) */}
      {isCartOpen && (
        <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <div className="cart-modal-header">
              <h2>SHOPPING CART ({cartItems.length})</h2>
              <button 
                type="button" 
                className="close-btn" 
                onClick={() => setIsCartOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="cart-modal-body">
              {cartItems.length === 0 ? (
                <p className="empty-cart-text">Your cart is currently empty.</p>
              ) : (
                <ul className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <li key={index} className="cart-item-row">
                      <img src={item.image} alt={item.name} className="cart-item-thumb" />
                      <div className="cart-item-details">
                        <span className="cart-item-name">{item.name}</span>
                        <span className="cart-item-price">
                          {item.price ? item.price.toLocaleString('vi-VN') : 0} VND
                        </span>
                      </div>
                      <button 
                        type="button" 
                        className="remove-item-btn"
                        onClick={() => handleRemoveFromCart(index)}
                        title="Remove item"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cartItems.length > 0 && (
              <div className="cart-modal-footer">
                <div className="cart-total-row">
                  <strong>Total:</strong>
                  <span>{totalCartPrice.toLocaleString('vi-VN')} VND</span>
                </div>
                <div className="cart-actions">
                  <button 
                    type="button" 
                    className="clear-cart-btn" 
                    onClick={handleClearCart}
                  >
                    Clear All
                  </button>
                  <button 
                    type="button" 
                    className="checkout-btn" 
                    onClick={() => {
                      alert('Checkout successfully! Total: ' + totalCartPrice.toLocaleString('vi-VN') + ' VND');
                      handleClearCart();
                      setIsCartOpen(false);
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
