import React from 'react';
import '../css/footer.css';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>© {currentYear} Rebaixado da gama. Todos direitos reservados.</p>
            <div class="telefone-email">
                <div>Telefone: (11) 97057-3480</div>
                <div>Email: rebaixadosdagama@orkut.com</div>
            </div>
        </footer>
    );
};

export default Footer;
