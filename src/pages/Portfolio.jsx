import React from 'react'


function Portfolio() {
  return (
    <div>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="main-heading">My Portfolio</h1>
                <div className="underline mx-auto"></div>
                  </div>
                  <div className="col-md-4">
                    <div clasName="card shadow">
                      {/* <img src={MovieApp} className="w-100 border-bottom" alt="movie app" /> */}
                      <div className="card-body"></div>
                      <h6>The Movie App</h6>
                      <div className="underline"></div>
                      <p>This application can be used to find the ratings and a description of a movie.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Portfolio