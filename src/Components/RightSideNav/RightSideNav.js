import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import './RightsideNav.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../image/g-1.jpg'
import img2 from '../../image/gig-3_1140x640.jpg';
import img3 from '../../image/gig1.jpg';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import {useContext} from 'react'
import { GoogleAuthProvider } from 'firebase/auth';



const RightSideNav = () => {
  const {userLogin} = useContext(authContext);

 const handleSign = () =>{
  const googleProvider = new GoogleAuthProvider() ;
   
  userLogin(googleProvider)
  .then(result =>{
    const user = result.user;
   
  })
  .catch(error =>{
  
  })
 }

    return (
        <div>
            <h1>Rightside nav </h1>
            <div>
                <ButtonGroup vertical className='btn-group'>
                    <Button onClick={handleSign} className='google-btn' variant="outline-primary"> <FaGoogle></FaGoogle>Sign In With Google </Button>
                    <Button className='git-btn' variant="outline-dark"> <FaGithub></FaGithub> Sign In  Github</Button>
                </ButtonGroup>
            </div>
            <p></p>
            <div>
                <ListGroup>
                    <ListGroup.Item className='mb-2 icon'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2 icon'> <FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2 icon'><FaWhatsapp/> WhatsUp</ListGroup.Item>
                    <ListGroup.Item className='mb-2 icon'><FaYoutube/> You Tube </ListGroup.Item>
                </ListGroup>
            </div>

            <div>
            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </div>

        </div>
    );
};

export default RightSideNav;