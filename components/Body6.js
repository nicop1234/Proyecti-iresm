import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';

const Body6= () => {
    return(
        <div>
            <main>
                <Container id='historia' className='mt-4 mb-4'>
                    <Row>
                        <div className='col-lg-6 col-12 d-flex align-items-center '>
                            <div >
                                <div className='d-flex justify-content-center'>
                                    <h1>Historia</h1>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-center'>Super Dragon ball heroes Trunks llega del futuro para entrenar con Goku y Vegeta, pero, de repente, desaparece sin dejar rastro. El chico está atrapado en un espacio entre los universos que se llama Planeta Prisión.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/6pag-1.png'  width={500} height={650} layout='intrinsic'/>  
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container id='manga' className='mb-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1>Manga</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <p className='text-center'>Esta saga no tuvo mangas</p>
                        </div>
                    </Row>
                </Container>
                <Container id='episodios'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1>Episodios</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/1episodio5.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la quinta saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2episodio5.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la quinta saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container className='mt-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1 className='text-center'>Peliculas </h1>
                        </div>
                    </Row>
                    <Row>
                        <div  className='d-flex justify-content-center'>
                            <p className='text-center'>Esta saga no tuvo peliculas </p>
                        </div>
                    </Row>
                </Container>
                <Container className='mt-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1 className='text-center'>Especiales </h1>
                        </div>
                    </Row>
                    <Row>
                        <div  className='d-flex justify-content-center'>
                            <p className='text-center'>Esta saga no tuvo especiales</p>
                        </div>
                    </Row>
                </Container>
                <Container className='mt-4 '>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1 id='endings' className='text-center'>Endings y Openings </h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <h2 className='text-center'>Endings</h2>
                                </div>
                                <div className='d-flex justify-content-center video-ending1-5 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=FObW9V06H3c'>Ir a ver</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center'>Openings</h2>
                            </div>
                            <div className='d-flex justify-content-center video-open1-5 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=5IXpc_HzMpM'>Ir a ver</a></Button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </main>
        </div>
    )
}
export default Body6;