import React from 'react';

export const Header = ({ cartCount = 0, onNavigate, activeTab = 'home' }) => {
    return (
        <header className="header-container">
            <div className="header-title-box">
                <h1 className="header-title">HEADER / NAVBAR</h1>
            </div>
            <nav className="header-nav">
                <button 
                    className={`nav-btn ${activeTab === 'home' ? 'active' : ''}`}
                    onClick={() => onNavigate && onNavigate('home')}
                >
                    Home
                </button>
                <button 
                    className={`nav-btn ${activeTab === 'product' ? 'active' : ''}`}
                    onClick={() => onNavigate && onNavigate('product')}
                >
                    Product
                </button>
                <button 
                    className={`nav-btn ${activeTab === 'contact' ? 'active' : ''}`}
                    onClick={() => onNavigate && onNavigate('contact')}
                >
                    Contact
                </button>
                <button 
                    className={`nav-btn cart-btn ${activeTab === 'cart' ? 'active' : ''}`}
                    onClick={() => onNavigate && onNavigate('cart')}
                >
                    Cart ({cartCount})
                </button>
            </nav>
        </header>
    );
};

export default Header;