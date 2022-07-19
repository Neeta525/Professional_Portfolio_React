import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faTwitterSquare } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div ClassName="footer">
      <footer ClassName="footer flex flex-wrap items-center justify-center px-2 py-3 bg-dark-800">
        <a href="https://twitter.com/AnitaGChavez1" 
        target='_blank' 
        rel='noreferrer noreopener' 
        className='icons'>
        <FontAwesomeIcon icon= {['fab', 'twitter']}/></a>
      </footer>
    </div>
  )
}

export default Footer
