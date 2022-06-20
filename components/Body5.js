import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';

const Body5= () => {
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
                                    <p className='text-center'>Dragon Ball Super (ドラゴンボール超スーパー, Doragon Bōru Sūpā) es la medicuela del manga de Dragon Ball, y anime de Dragon Ball Kai. Escrita por Akira Toriyama, fue estrenada el 5 de julio de 2015 en Japón, en sucesión a Dragon Ball Kai.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/5pag.png'  width={500} height={650} layout='intrinsic'/>  
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
                            <p className='text-center'>Esta saga tiene por ahora 85 episodios el cual salio el 20/06/2022 y el proximo sale dentro de un mes y asi hasta que terminen la saga.</p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                    <Image  alt='dragonball' src='/assets/1-manga4.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer manga en salir de la cuarta saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2-manga4.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo(por ahora) manga en salir de la cuarta saga de dragon ball en el cual .....</p>
                            </div>
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
                                <Image alt='dragonball' src='/assets/1-episodio-4.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la segunda saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2-episodio-4.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la segunda saga de dragon ball en el cual .....</p>
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
                            <p className='text-center'>Esta saga cuenta un total de 2 peliculas las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Broly</h1>
                                <h2 className=' text-center'> Fecha de estreno:14 de noviembre de 2018</h2>
                                <p className='text-center'>Duración 100 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/peli1-4.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball Super: Super Hero</h1>
                                <h2 className=' text-center'> Fecha de estreno:11 de junio de 2022 </h2>
                                <p className='text-center'>Duración: 1h 39m</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/peli2-4.png'  width={800} height={550} layout='intrinsic'/>
                            </div>
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
                            <p className='text-center'>Esta saga no tiene especiales</p>
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
                                <div className='d-flex justify-content-center video-ending1-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=zRH2Xp5trGQ&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=1'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending2-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=2VxbllP3jFo&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=2'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending3-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=5QoiKESEiyo&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=3'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending4-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=PuUqbXu82aE&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=4'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending5-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=vA4VwglG6s4&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=5'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending6-4 align-items-center mb-5'>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=zOkNQJT3zLo&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=6'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending7-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=9c98ENPgrHM&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=7'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending8-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=q8qg5kMHQeU&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=8'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending9-4 align-items-center mb-5 '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=evlBm59f_NA&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=9'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending10-4 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=Qj12WhhjVKo&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=10'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending11-4 align-items-center mb-4 '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=__4kGdquJik&list=PLUIM2GRMDiqm-KrhTyE7Is2Gc-2FPlAIC&index=11'>Ir a ver</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center'>Openings</h2>
                            </div>
                            <div className='d-flex justify-content-center video-open1-4 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=FWKUQupQniQ'>Ir a ver</a></Button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center video-open2-4 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=TrVBBdSH6t4'>Ir a ver</a></Button>
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
export default Body5;