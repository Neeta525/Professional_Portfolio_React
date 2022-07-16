import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <section className='section footer bg-dark text-white'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-4'>
        <div className ="socialMedia">
            <FontAwesomeIcon icon= {faCoffee}/>
        </div>
        </div>
        <div className='col-md-4'>
        <div className ="socialMedia">
            <FontAwesomeIcon icon= {faCoffee}/>
        </div>
        </div>
        <div className='col-md-4'>
        <div className ="socialMedia">
            <FontAwesomeIcon icon= {faCoffee}/>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
