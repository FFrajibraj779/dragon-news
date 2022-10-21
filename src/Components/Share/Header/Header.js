
import { useContext } from 'react';
import { Image, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Context/AuthProvider/AuthProvider';
import LeftsideNav from '../../LeftsideNav/LeftsideNav';


const Header = () => {
  const { user, LogOut  } = useContext(authContext);
  console.log(user);
  const handleLogOut = () =>{

    LogOut()
    .then(() =>{})
    .catch(error => console.error(error))
  }

  return (
    <div>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link to='/'>Dragon News</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>

            </Nav>
           <div className='d-flex  gap-4'>
           { user?.uid  ?
             <>
              {user?.displayName}
              <Button onClick={handleLogOut} variant='light'>Log Out</Button>
             </>
             :
             <>
              <Link to='/login'>Log In</Link>
              <Link to='/register'>Register </Link>
             </>
            }

            {
              user?.photoURL ? <Image referrerPolicy='no-referrer'  src={user.photoURL} style={{height:'40px'}} roundedCircle></Image> : <FaUser></FaUser>
            }
           </div>
            <div className='d-lg-none'>
              <LeftsideNav></LeftsideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;