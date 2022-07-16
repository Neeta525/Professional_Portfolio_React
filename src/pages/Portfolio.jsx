import React from 'react'
import movieApp from '../images/movieApp.png';
import keepitNoted from '../images/keepitNoted.png';
import passwordGen from '../images/passwordGen.png'
import socialNetwork from '../images/socialNetwork.png';
import teacup from '../images/teacup.png';
import workday from '../images/workday.png';

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
                    <div className="card shadow">
                      <img src={movieApp} className="w-100 border-bottom" alt="movie app" />
                      <div className="card-body"></div>
                      <h6>The Movie App</h6>
                      <div className="underline"></div>
                      <p>This application can be used to find the ratings and a description of a movie.</p>
                      <a href="https://walkerjezek.github.io/Project1/" className="btn btn-link">Deployed Link</a>
                      <a href="https://github.com/walkerjezek/Project1" className="btn btn-link">GitHub Link</a>
                      
                </div>
              </div>
              <div className="col-md-4">
                    <div className="card shadow">
                      <img src={workday} className="w-100 border-bottom" alt="movie app" />
                      <div className="card-body"></div>
                      <h6>Day Calendar</h6>
                      <div className="underline"></div>
                      <p>This application can be used to find the ratings and a description of a movie.</p>
                      {/* <Link to="/movieApp" className="btn btn-link">Deployed Link</Link>
                      <Link to="/movieApp" className="btn btn-link">GitHub Link</Link> */}
                      
                </div>
              </div>
              <div className="col-md-4">
                    <div className="card shadow">
                      <img src={keepitNoted} className="w-100 border-bottom" alt="movie app" />
                      <div className="card-body"></div>
                      <h6>Keep It Noted</h6>
                      <div className="underline"></div>
                      <p>This application can be used to find the ratings and a description of a movie.</p>
                      {/* <Link to="/movieApp" className="btn btn-link">Deployed Link</Link>
                      <Link to="/movieApp" className="btn btn-link">GitHub Link</Link> */}
                      
                </div>
              </div>
              <div className="col-md-4">
                    <div className="card shadow">
                      <img src={socialNetwork} className="w-100 border-bottom" alt="movie app" />
                      <div className="card-body"></div>
                      <h6>Social Network API</h6>
                      <div className="underline"></div>
                      <p>This application can be used to...</p>
                      {/* <Link to="/movieApp" className="btn btn-link">Deployed Link</Link>
                      <Link to="/movieApp" className="btn btn-link">GitHub Link</Link> */}
                      
                </div>
              </div>
              <div className="col-md-4">
                    <div className="card shadow">
                      <img src={teacup} className="w-100 border-bottom" alt="movie app" />
                      <div className="card-body"></div>
                      <h6>Teacup Yorkies</h6>
                      <div className="underline"></div>
                      <p>This application can be used to find pets and their humans.</p>
                      {/* <Link to="/movieApp" className="btn btn-link">Deployed Link</Link>
                      <Link to="/movieApp" className="btn btn-link">GitHub Link</Link> */}
                      
                </div>
              </div>
              <div className="col-md-4">
                    <div className="card shadow">
                      <img src={passwordGen} className="w-100 border-bottom" alt="movie app" />
                      <div className="card-body"></div>
                      <h6>Day Calendar</h6>
                      <div className="underline"></div>
                      <p>This application can be used to find the ratings and a description of a movie.</p>
                      {/* <Link to="/movieApp" className="btn btn-link">Deployed Link</Link>
                      <Link to="/movieApp" className="btn btn-link">GitHub Link</Link> */}
                      
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Portfolio