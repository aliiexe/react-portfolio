import './Footer.css'; // Make sure to create this CSS file

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="icons-container">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/ali-bourak-business/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/bourakalii?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="mailto:alibusinessbourak@email.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a href="https://github.com/aliiexe" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="back-to-top">
                    <button onClick={scrollToTop}>Back to Top</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
