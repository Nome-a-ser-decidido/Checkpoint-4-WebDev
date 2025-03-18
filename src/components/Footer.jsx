import React from 'react';
import '../css/home.css';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>© {currentYear} Rebaixado da gama. Todos direitos reservados.</p>
        </footer>
    );
};

export default Footer;
