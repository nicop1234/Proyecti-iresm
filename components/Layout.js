import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'


const Layout = ({children}) => {
    return(
      <>
      <Navbar collapseOnSelect expand="lg"  className='bg-white'>
          <Container>
            <Nav.Link ><Image alt='Iresm' src='/assets/logo.png'  width={105} height={152} layout='intrinsic'/></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
              <Nav className="me-auto  d-flex  ">
              </Nav>
              <Nav>
                <Nav.Link href='#inicio' ><p className=' text-center'>Inicio</p></Nav.Link>
                <Nav.Link href='#sagas' ><p className=' text-center'>Poble-maticos</p></Nav.Link>
                <Nav.Link href='#ver'><p className=' text-center'>Mati-creed</p></Nav.Link>
                <Nav.Link href='#ver'><p className=' text-center'>Notis</p></Nav.Link>
                <Nav.Link href='#ver'><p className=' text-center'>Tutorias</p></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
      {children}
      <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-ligth'>
          <Container>
            <Nav.Link ><Image alt='Iresm' src='/assets/logo.png'  width={105} height={152} layout='intrinsic'/></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
              <Nav className="me-auto ms-auto d-flex  ">
                <Nav.Link className='text-dark'> © Derechos reservados</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href='#inicio' ><p className=' text-center'>Inicio</p></Nav.Link>
                <Nav.Link href='#sagas' ><p className=' text-center'>Poble-maticos</p></Nav.Link>
                <Nav.Link href='#ver'><p className=' text-center'>Mati-creed</p></Nav.Link>
                <Nav.Link href='#ver'><p className=' text-center'>Notis</p></Nav.Link>
                <Nav.Link href='#ver'><p className=' text-center'>Tutorias</p></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </>
    )
}
export default Layout;