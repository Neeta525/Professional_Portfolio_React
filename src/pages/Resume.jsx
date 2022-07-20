import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from '@fortawesome/free-solid-svg-icons';


function Resume() {
  return (
    <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-heading">My Resume</h1>
                <div className="underline mx-auto">
                <a href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:7de1f0a7-dd2f-4717-894c-50cfd30b822c"
        target='_blank' 
        rel='noreferrer noreopener' 
        className='icons file'>
        <FontAwesomeIcon icon={faFile} />
        </a>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}

export default Resume;
