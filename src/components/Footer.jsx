import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/Pages.css'


function Footer() {
  return (
    <div className="footer">
      <div className="icon">
      <footer className="icons">
        <a href="https://twitter.com/AnitaGChavez1" 
        target='_blank' 
        rel='noreferrer noreopener' 
        className='icon twitter'>
        <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/anita-chavez-341284231/" 
        target='_blank' 
        rel='noreferrer noreopener' 
        className='icon linkedin'>
        <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/Neeta525" 
        target='_blank' 
        rel='noreferrer noreopener' 
        className='icon github'>
        <FontAwesomeIcon icon={faGithub} />
        </a>
      </footer>
      </div>
    </div>
  )
}

export default Footer
