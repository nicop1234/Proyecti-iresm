import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Container, Row} from 'react-bootstrap';
import Image from 'next/image'
import { Navigation, Pagination, } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";



const Bodys= () => {
    return(
        <main>
            <Container>
                <Row className='mb-4'>
                    <div className='d-flex justify-content-center'>
                        <h1 className='text-info'>Matematica</h1>
                    </div>
                </Row>
                <Row className='mb-5' >
                    <div className='col-lg-6 col-12 d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center text-danger'>Problemas de la semana</h2>
                            </div>
                            <div>
                                <h5 className='text-center'>Estos son los problemas de la semana los cuales estan divididos en <span className='text-danger'>1-3</span> el problema A <span className='text-danger'>4-5</span> el problema B y <span className='text-danger'>6</span> el problema C</h5>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button style={{borderRadius:13, height:50, width:100}} variant="info"><a>Ir a ver</a></Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 d-flex justify-content-center'>
                        <div>
                            <div>
                                <h2 className='text-center text-danger'>Profesores de matematica</h2>
                            </div>
                            <div className='w-100 h-100'>
                            <Swiper slidesPerView={1} pagination={true} navigation={true}  modules={[Pagination, Navigation]} className="mySwiper" >
                            <SwiperSlide >
                                <Container className=''>
                                    <Row>
                                        <div className='d-flex justify-content-center'>
                                            <h2 className=' mb-3'>Laura Mayer</h2>
                                        </div>
                                    </Row>
                                    <div className=' d-flex justify-content-center text-center align-items-center  '>
                                        <div className='d-flex justify-content-center text-center align-items-center col-12 col-lg-5 '>
                                            <Image alt='Mayer' src='/assets/mayer.png'  width={300} height={300} layout='intrinsic'/>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                            <SwiperSlide >
                                <Container className=''>
                                    <Row>
                                        <div className='d-flex justify-content-center'>
                                            <h2 className=' mb-3'>Laura Mayer</h2>
                                        </div>
                                    </Row>
                                    <div className=' d-flex justify-content-center text-center align-items-center  '>
                                        <div className='d-flex justify-content-center text-center align-items-center col-12 col-lg-5 '>
                                            <Image alt='Mayer' src='/assets/mayer.png'  width={300} height={300} layout='intrinsic'/>
                                        </div>
                                    </div>
                                </Container>
                            </SwiperSlide>
                        </Swiper>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mb-3 mt-5'>
                    <div className='d-flex justify-content-center'>
                        <h2 className='text-danger'>Ultimos tema de 5°C</h2>
                    </div>
                </Row>
                <Row>
                    <div className='col-lg-6 col-12 d-flex justify-content-center bordes p-1 align-items-center' style={{height:400}}>
                        <Image alt='Bakara' src='/assets/Baskara.png'  width={400} height={350} layout='intrinsic'/>
                    </div>
                    <div className='col-lg-6 col-12 d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center '>Formula de Bhaskara</h2>
                            </div>
                            <div>
                                <h5 className='text-center'>fue un matemático y astrónomo indio. Conocido por ser el creador de la fórmula cuadrática o resolvente.</h5>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button style={{borderRadius:13, height:50, width:100}} variant="info"><a hreh>Ingresar</a></Button>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mt-5'>
                    <div className='col-lg-6 col-12 d-flex justify-content-center align-items-center'>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center '>Logaritmos</h2>
                            </div>
                            <div>
                                <h5 className='text-center'>Lorems lorem </h5>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button style={{borderRadius:13, height:50, width:100}} variant="info"><a>Ingresar</a></Button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-12 d-flex justify-content-center bordes p-3 align-items-center' style={{height:400}}>
                        <div>
                            <Image alt='Bakara' src='/assets/logaritmo.png'  width={500} height={250} layout='intrinsic'/>
                        </div>
                    </div>
                </Row>
                <Row className='mb-3 mt-5'>
                    <div className='d-flex justify-content-center'>
                        <h2 className='text-danger'>Tutorias</h2>
                    </div>
                </Row>
                <Row>
                    <div className='col-12  d-flex justify-content-center align-items-center'>
                        <div>
                        </div>
                    </div>
                </Row>
            </Container>
        </main>
    )
}
export default Bodys;