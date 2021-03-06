import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <p>React.js calculator <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />2018</p>
                <a href="https://github.com/DanSimonson/calculator-with-react" target="_blank" aria-label="Facebook">
                    <i className="fab fa-github fa-lg">&nbsp; See Code In GitHub Repository</i>
                </a>
                <h4>
                    made with
        <i className="fas fa-heart fa-sm"></i>
                    <a href="https://mariposaweb.net" target="_blank">@mariposaweb.net</a>
                </h4>
            </div>
        </div>

    )
}

export default Footer;