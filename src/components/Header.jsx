import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
         <Navbar className="bg-info">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{textDecoration:"none",fontSize:"30px",color:"black"}}>
            <i className="fa-solid fa-play fa-beat-fade me-2 " style={{color:"black"}}></i>
            Media Player
            </Link>
         
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header