import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';

const Body4= () => {
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
                                    <p className='text-center'>Dragon Ball Z Kai, conocida en Japón como Dragon Ball Kai (ドラゴンボール改カイ, Doragon Bōru Kai), es una edición renovada de la serie de anime Dragon Ball Z, estrenada el 5 de abril de 2009 con motivo de conmemorar el vigésimo aniversario de la serie original. La voz japonesa kai (改かい) en el nombre de la serie significa 'actualizado', 'modificado' o 'alterado'.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/4pag-1.png'  width={500} height={650} layout='intrinsic'/> 
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
                            <p className='text-center'>Esta saga no tuvo mangas ya que el manga no se dividio en dragon ball y dragon ball z sino que estuvo toda unida en una sola que seria dragon ball.</p>
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
                                <Image alt='dragonball' src='/assets/1-episodio3.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la tercera  saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2-episodio3.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la tercera saga de dragon ball en el cual .....</p>
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
                            <p className='text-center'>Esta saga No tiene peliculas ya que sacaron esta saga para arreglar algunos erroes que habia en la anterior </p>
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
                            <p className='text-center'>Esta saga No tiene especiales ya que sacaron esta saga para arreglar algunos erroes que habia en la anterior</p>
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
                                <div className='d-flex justify-content-center video-ending1-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=1f_Ur3x0kFE'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending2-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=3duk9M-yf2c'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending3-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=102OpvBimNo'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending4-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=cVS9kYFZqwE'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending5-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=eLfmS5jzgnc'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending6-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=Zr_EVl3hics'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending7-3 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=ivi1y_0xltE'>Ir a ver</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center'>Openings</h2>
                            </div>
                            <div className='d-flex justify-content-center video-open1 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=EadRAjL41Kg'>Ir a ver</a></Button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center video-open1 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=5otaclhcNY0'>Ir a ver</a></Button>
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
export default Body4;