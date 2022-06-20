import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';

const Body7= () => {
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
                                    <p className='text-center'>Dragon Ball GT (ドラゴンボールGT Doragon Bōru Jī Tī) es una serie de anime producida y creada por el estudio de animación japonés Toei Animation, como continuación de la franquicia Dragon Ball, iniciada y escrita originalmente por Akira Toriyama. La serie fue estrenada el 7 de febrero de 1996, terminando el 19 de noviembre de 1997 con 64 episodios </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/7pag.png'  width={500} height={650} layout='intrinsic'/>
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
                                <Image alt='dragonball' src='/assets/1episodio6.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la sexta saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2episodio6.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la sexta saga de dragon ball en el cual .....</p>
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
                            <p className='text-center'>Esta saga no tuvo peliculas</p>
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
                            <p className='text-center'>Esta saga cuenta un total de 2 especiales las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball GT: 100 años después</h1>
                                <h2 className=' text-center'> Fecha de estreno:26 de marzo de 1997 </h2>
                                <p className='text-center'>Duración 45 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/especial1-6.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
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
                                <div className='d-flex justify-content-center video-ending1-6 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=jxee-N5mrnc'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending2-6 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=qgTGPHG1WLg'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending3-6 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=j7WWCytsA5M'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending4-6 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=EaG9jT_rF3k'>Ir a ver</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center'>Openings</h2>
                            </div>
                            <div className='d-flex justify-content-center video-open1-6 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=wgZ-ATUGXDw'>Ir a ver</a></Button>
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
export default Body7;