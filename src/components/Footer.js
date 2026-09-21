import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer" id="footer-section">
            <h3 className="footer-title">Footer</h3>
            <div className="footer-info">
                <div className="footer-item">
                    <strong>Student Name: </strong>
                    <span>Đặng Thế Trung</span>
                </div>
                <div className="footer-item">
                    <strong>Student ID: </strong>
                    <span>HE200255</span>
                </div>
                <div className="footer-item">
                    <strong>Class: </strong>
                    <span>FER202</span>
                </div>
                <div className="footer-item">
                    <strong>Email: </strong>
                    <a href="mailto:dangtrunv6@gmail.com">dangtrunv6@gmail.com</a>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2026 FER202 - Lab 1. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;