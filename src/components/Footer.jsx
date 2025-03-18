import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <p>© {currentYear} Rebaixado da gama. Todos direitos reservados.</p>
        </div>
    );
};

export default Footer;
