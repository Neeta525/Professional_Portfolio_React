import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div>
        <div className = "socialMedia">
            <FontAwesomeIcon icon= {faCoffee}/>
        </div>
    </div>
  )
}

export default Footer
