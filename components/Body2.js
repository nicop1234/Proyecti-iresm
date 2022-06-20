import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link.js';

const Body2= () => {
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
                                    <p className='text-center'>Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995. Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/2pag-1.png'  width={500} height={650} layout='intrinsic'/>  
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
                            <p className='text-center'>Esta primer saga conto con un total de 519 capítulos en el cual podemos como Goku junto a sus amigos van pasando buenos momentos como malos superandose cada dia más</p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                    <Image  alt='dragonball' src='/assets/1-manga.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer manga en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2-manga.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo manga en salir de la primer saga de dragon ball en el cual .....</p>
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
                                <Image alt='dragonball' src='/assets/1-episodio.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2-episodio.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1>Capitulos más vistos </h1>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/top5.png'  width={700} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 5 </h1>
                                <h2 className=' text-center'> Episodio 4</h2>
                                <p className='text-center'>El demonio secuestrador Oolong.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/top4.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 4  </h1>
                                <h2 className=' text-center'> Episodio 38</h2>
                                <p className='text-center'> ¡Temible! La técnica de la multiplicación.</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/top3.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4 '>
                            <div>
                                <h1 className=' text-center'>Top 3</h1>
                                <h2 className=' text-center'> Episodio 50</h2>
                                <p className='text-center'> La trampa de los piratas.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/top2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 2</h1>
                                <h2 className=' text-center'> Episodio 56</h2>
                                <p className='text-center'>¡Uhohoi! Arale sube a la nube.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <div className='d-flex justify-content-center'>
                            <h1>El top 1 es para:</h1>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image  alt='dragonball' src='/assets/top1.png'  width={600} height={650} layout='intrinsic'/>
                        </div>
                        <div >
                            <h2 className=' text-center'> Episodio 47</h2>
                            <p className='text-center'>¡La Kame House descubierta!</p>
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
                            <p className='text-center'>Esta saga cuenta un total de 4 peliculas las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: La leyenda de Shen Long</h1>
                                <h2 className=' text-center'> Fecha de estreno:20 de diciembre de 1986 </h2>
                                <p className='text-center'> Duración 51 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/peli1.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: La Bella Durmiente en el Castillo del Mal</h1>
                                <h2 className=' text-center'> Fecha de estreno:18 de julio de 1987 </h2>
                                <p className='text-center'>Duración 46 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/peli2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: Una Aventura Mística</h1>
                                <h2 className=' text-center'> Fecha de estreno:9 de junio de 1988 </h2>
                                <p className='text-center'>Duración 46 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/peli3.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: El camino hacia el más fuerte</h1>
                                <h2 className=' text-center'> Fecha de estreno:4 de marzo de 1996 </h2>
                                <p className='text-center'>Duración 80 minutos </p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/peli4.png'  width={500} height={650} layout='intrinsic'/>
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
                            <p className='text-center'>Esta saga cuenta un total de 2 especiales las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Seguridad vial de Goku</h1>
                                <h2 className=' text-center'> Fecha de estreno:1988 </h2>
                                <p className='text-center'>El vídeo utiliza a los personajes principales de Dragon Ball para promover la seguridad vial. Fue transmitido en TV entre programas como un anuncio de servicio público y distribuido a las escuelas como un vídeo de demostración de seguridad.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/especial1.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/especial2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Cuerpo de bomberos de Goku</h1>
                                <h2 className=' text-center'> Fecha de estreno:1988  </h2>
                                <p className='text-center'> fue emitido en Japón sobre seguridad contra incendios. En él Goku, Yamcha, Krilin y Roshi tienen puestos de trabajo como bomberos, Bulma por su parte vive en un apartamento junto a Tama.</p>
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
                                <div className='d-flex justify-content-center video-open2 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=Cf4YU-sRRBQ'>Ir a ver</a></Button>
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
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=9Hbd1QeI1Og'> Ir a ver</a></Button>
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
export default Body2;