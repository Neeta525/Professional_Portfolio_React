import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import AnitaChavezResume from "../images/AnitaChavezResume.pdf";
import { Link } from "react-router-dom";
// import { saveAs } from "file-saver"

function Resume() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="main-heading">My Resume</h1>
              <div className="underline mx-auto">
                <h5>Feel free to view my resume and download it.</h5>
                <div className="icons">
                  <a
                    href={"https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:7de1f0a7-dd2f-4717-894c-50cfd30b822c"}
                    className="btn btn-link">
                    <FontAwesomeIcon icon={faFileArrowDown} size='90px' />
                  </a>
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
