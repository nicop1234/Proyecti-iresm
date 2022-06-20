import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'
import Link from 'next/link'


const Nava2 = ({children}) => {
    return(
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-danger'>
                <Container>
                    <Nav.Link ><Image  src='/assets/logo.png' alt='logo'  width={230} height={120} layout='intrinsic'/></Nav.Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
                        <Nav className="me-auto  d-flex  ">
                        </Nav>
                        <Nav>
                            <Nav.Link href="/" ><p className='letras-nav text-center'>INICIO</p></Nav.Link>
                            <Nav.Link href='#historia' ><p className='letras-nav text-center'>Historia</p></Nav.Link>
                            <Nav.Link href='#manga'><p className='letras-nav text-center'>Manga</p></Nav.Link>
                            <Nav.Link href='#episodios'><p className='letras-nav text-center'>Episodios</p></Nav.Link>
                            <Nav.Link href='#endings'><p className='letras-nav text-center'>Endings</p></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
            <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-dark'>
                <Container>
                    <Nav.Link ><Image alt='logo'  src='/assets/logo-2.png'  width={130} height={130} layout='intrinsic'/></Nav.Link>
                    <Nav className="me-auto  d-flex  ">
                    </Nav>
                    <Nav>
                        <Nav.Link><h3 className=" text-light">© Derechos reservados </h3></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default Nava2;