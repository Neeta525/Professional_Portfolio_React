import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import AnitaChavezResume from '../images/AnitaChavezResume.pdf';
import { Link } from 'react-router-dom'
import { saveAs } from "file-saver"


function Resume() {
  return (
    <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-heading">My Resume</h1>
                <div className="underline mx-auto">
                  <div className="icons">
                <Link to={AnitaChavezResume} 
                  download='AnitaChavezResume.pdf'
                  target='_blank' 
                  rel='noreferrer noreopener'> 
                  {/* // className='icons file'> */}
                  <FontAwesomeIcon icon={faFileArrowDown} /> 
                  {/* <button onClick={saveFile}><FontAwesomeIcon icon={faFileArrowDown} /></button>  */}
                  {/* <button className='btn'><faFileArrowDown size={20} /></button> */}
                  </Link>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Resume;
