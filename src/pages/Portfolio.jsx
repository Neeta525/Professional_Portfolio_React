// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import movieApp from '../images/movieApp.png';
// import keepitNoted from '../images/keepitNoted.png';
// import passwordGen from '../images/passwordGen.png'
// import socialNetwork from '../images/socialNetwork.png';
// import teacup from '../images/teacup.png';
// import workday from '../images/workday.png';

// const Portfolio = () => {
//   const portfolioInfo = [
//     { 
//       image: {movieApp}, 
//       title: 'The Movie App', 
//       text: 'The best movie app you will encounter', 
//       // button: 'https://walkerjezek.github.io/Project1/'
//     },
//     { 
//       image: {keepitNoted}, 
//       title: 'Keep it Noted', 
//       text: ''
//     },
//     { 
//       image: {passwordGen}, 
//       title: 'Password Generator', 
//       text: ''
//     },
//     { 
//       image: {socialNetwork}, 
//       title: 'Social Media Network', 
//       text: ''},
//     { 
//       image: {teacup}, 
//       title: 'Teacup Yorkies', 
//       text: ''
//     },
//     { 
//       image: {workday}, 
//       title: 'Work Day Calendar', 
//       text: ''
//     },
//   ]

// const renderCard = (card, index) => {
//   return (
//     <Card style={{ width: '18rem' }} key={index} className="box">
//       <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
//       <Card.Body>
//         <Card.Title>{card.title}</Card.Title>
//         <Card.Text>{card.text}</Card.Text>
//           <Card.Link href="#">Card Link</Card.Link>
//           <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// };


// return <div className='grid'>{portfolioInfo.map(renderCard)}</div>;
// };
// export default Portfolio;