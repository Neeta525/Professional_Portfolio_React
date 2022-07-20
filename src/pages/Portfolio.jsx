import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import movieApp from '../images/movieApp.png';
import keepitNoted from '../images/keepitNoted.png';
import passwordGen from '../images/passwordGen.png'
import socialNetwork from '../images/socialNetwork.png';
import teacup from '../images/teacup.png';
import workday from '../images/workday.png';
import '../styles/Pages.css'

const Portfolio = () => {
  const portfolioInfo = [
    { 
      image: movieApp, 
      title: 'The Movie App', 
      text: 'The best movie app give you a movie description and ratings', 
      deployLink: 'https://walkerjezek.github.io/Project1/',
      gitLink: 'https://github.com/walkerjezek/Project1'
    },
    { 
      image: keepitNoted, 
      title: 'Keep it Noted', 
      text: 'This applicaiton allows you to create and save notes.',
      deployLink: 'https://morning-stream-54406.herokuapp.com/',
      gitLink: 'https://github.com/Neeta525/KeepItNoted'
    },
    { 
      image: passwordGen, 
      title: 'Password Generator', 
      text: 'This application generates a random password using prompts.',
      deployLink: 'https://neeta525.github.io/PasswordGenerator_2/',
      gitLink: 'https://github.com/Neeta525/PasswordGenerator_2'
    },
    { 
      image: socialNetwork, 
      title: 'Social Media Network', 
      text: 'This is a backend application where you can add friends and thougts.',
      deployLink: 'https://youtu.be/cDiMSgSa1g8',
      gitLink: 'https://github.com/Neeta525/ubiquitous-octo-network'
    },
    { 
      image: teacup, 
      title: 'Teacup Yorkies', 
      text: 'This application is a Twitter-like application specifically for furry loving friends and their owners.',
      deployLink: 'https://howler-forpets.herokuapp.com/',
      gitLink: 'https://github.com/Boopdid/teacup-yorkies'
    },
    { 
      image: workday, 
      title: 'Work Day Calendar', 
      text: 'This workday calendar helps you plan out your day and changes color as the time of day passes.',
      deployLink: 'https://neeta525.github.io/WorkDay/',
      gitLink: 'https://github.com/Neeta525/WorkDay'
    },
  ]

  function renderCard (card, index) {
    return (
      <>
      <div className="g-4 row">
        {Array.from({ length: 1 }).map((_, index) => (
          <div className='col-4 m-3'>
             <Card style={{ width: '25rem', height:'20rem' }} key={index} className='box'> 
                <Card.Img className='img-fluid' variant="top" src={card.image} />
                  <Card.Body>
                  <Card.Title>{card.Title}</Card.Title>
                  <Card.Text>{card.Text}</Card.Text>
                  <a href={card.deployLink} className="btn btn-link">Deployed Link</a>
                  <a href={card.gitLink} className="btn btn-link">GitHub Link</a>
                </Card.Body>
              </Card>
          </div>
        ))}
      </div>
      </>
    );
  }


return (
<>
<h1 className="main-heading text-center">My Projects</h1>
<div className="underline mx-auto"></div>
<div className='grid'>

  {portfolioInfo.map(renderCard)}</div>;
</>
) 

};
export default Portfolio;