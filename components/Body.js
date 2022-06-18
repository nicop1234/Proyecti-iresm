
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'

const Bodys= () => {
    return(
        <main>
            {/* Inicio*/}
            <Container className='mt-4 mb-4' id='inicio' >
                <Row >
                    <div className='col-lg-6 col-12 d-flex align-items-center '>
                        <div className=''>
                            <div className='d-flex justify-content-center'>
                                <h1>INICIO</h1>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <p className='text-center'>Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995. Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 d-flex justify-content-center d-flex align-items-center'>
                        <div>
                            <Image  src='/assets/primer-imagen.png'  width={450} height={250} layout='intrinsic'/>
                        </div>
                    </div>
                </Row>
            </Container>
            {/* Sagas*/}
            <Container className='mb-4' id='sagas' >
                <Row >
                    <div className='d-flex justify-content-center' >
                        <h1 className='text-center'>Todas las sagas</h1>
                    </div>
                </Row>
            </Container>
            <div >
                <div className='d-flex flex-wrap'>
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex justify-content-center'>
                            <Link href='/Saga1.js'>
                            <Image  src='/assets/1-saga.png'  width={300} height={450} layout='intrinsic'/>
                            </Link>
                        </div>
                        <p className='text-center'>Dragon ball</p>
                    </div>
                    <div className='col-lg-4 col-12 justify-content-center'>
                        <div className='d-flex justify-content-center'>
                            <a>
                                <Image  src='/assets/2-saga.png'  width={400} height={300} layout='intrinsic'/>
                            </a>
                        </div>
                        <p className='text-center'>Dragonball z</p>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex justify-content-center'>
                            <a>
                                <Image  src='/assets/3-saga.png'  width={300} height={450} layout='intrinsic'/>
                            </a>
                        </div>
                        <p className='text-center'>Dragonball Kai</p>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex justify-content-center'>
                            <a>
                                <Image  src='/assets/4-saga.png'  width={300} height={450} layout='intrinsic'/>
                            </a>
                        </div>
                        <p className='text-center'>Dragonball super</p>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex justify-content-center'>
                            <a>
                                <Image  src='/assets/5-saga.png'  width={300} height={450} layout='intrinsic'/>
                            </a>
                        </div>
                        <p className='text-center'>Dragonball Heroes</p>
                    </div>
                    <div className='col-lg-4 col-12'>
                        <div className='d-flex justify-content-center'>
                            <a>
                                <Image  src='/assets/6-saga.png'  width={300} height={450} layout='intrinsic'/>
                            </a>
                        </div>
                        <p className='text-center'>Dragonball GT</p>
                    </div>
                </div>
            </div>
            {/* Ultimos Episodios*/}
            <Container className='mb-4' id='ver'>
                <Row>
                    <div className='d-flex justify-content-center' >
                        <h1 className='text-center'> Ultimos Episodios </h1>
                    </div>
                </Row>
            </Container>
            <Row className='m-0'>
                <div className='d-flex flex-wrap mb-4 p-0 col-12  justify-content-center'>
                    <div className=' col-lg-3 col-11 mb-4'>
                        <div >
                            <Card >
                                <Card.Img variant="top" src="/assets/capitulo84.png" />
                                <Card.Body>
                                    <Card.Title><p className='text-center'> capitulo84</p></Card.Title>
                                    <Card.Text>
                                        <p className='text-center'> Capitulo 84 del manga de Dragon Ball</p>
                                    </Card.Text>
                                    <div className='d-flex justify-content-center'>
                                        <Button variant="dark">Ir a ver</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className=' col-lg-3 col-11 mb-4 ms-3 me-3'>
                        <div >
                            <Card >
                                <Card.Img variant="top" src="/assets/capitulo83.png" />
                                <Card.Body>
                                    <Card.Title><p className='text-center'> capitulo83</p></Card.Title>
                                    <Card.Text>
                                        <p className='text-center'> Capitulo 83 del manga de Dragon Ball</p>
                                    </Card.Text>
                                    <div className='d-flex justify-content-center'>
                                        <Button variant="dark">Ir a ver</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className=' col-lg-3 col-11 mb-4'>
                        <div >
                            <Card >
                                <Card.Img variant="top" src="/assets/capitulo82.png" />
                                <Card.Body>
                                    <Card.Title><p className='text-center'> capitulo82</p></Card.Title>
                                    <Card.Text>
                                        <p className='text-center'> Capitulo 82 del manga de Dragon Ball</p>
                                    </Card.Text>
                                    <div className='d-flex justify-content-center'>
                                        <Button variant="dark">Ir a ver</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </Row>
        </main>
    )
}
export default Bodys;