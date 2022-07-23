import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-bootstrap/Carousel";

function Resume() {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="main-heading">My Resume</h1>
              <div className="underline mx-auto">
                <h5>
                  Feel free to view my resume and download it and check out a
                  few skills I have developed.
                </h5>
                <div className="icon tooltips">
                  <div className="icons"><p>👉</p>
                    <a
                      href={
                        "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:7de1f0a7-dd2f-4717-894c-50cfd30b822c"
                      }
                      className="btn btn-link"
                    >
                      <FontAwesomeIcon
                        icon={faFileArrowDown}
                        className="file"
                      />
                    </a>
                  </div>
                  <Carousel fade>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>The Basics</h3>
                        <p>HTML, CSS, and JavaScript</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1508739826987-b79cd8b7da12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZnJvbnQlMjBlbmQlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                      />

                      <Carousel.Caption>
                        <h3>Coding with Caffeinated Tea</h3>
                        <p>A neccessary component.</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Third slide"
                      />

                      <Carousel.Caption>
                        <h3>Fullstack MERN</h3>
                        <p>MongoDB, Express, React and Node.js</p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
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
