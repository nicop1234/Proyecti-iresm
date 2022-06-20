import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';

const Body3= () => {
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
                                    <p className='text-center'>Dragon Ball Z (ドラゴンボールZゼット, Doragon Bōru Zetto) es la secuela de la serie de anime Dragon Ball. La serie es una adaptación de los sucesos posteriores al Arco de la 23.ª Edición del Torneo Mundial de las Artes Marciales del manga de Dragon Ball escrito e ilustrado por Akira Toriyama.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball' src='/assets/3pag-1.png'  width={500} height={650} layout='intrinsic'/>  
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
                                <Image alt='dragonball' src='/assets/1-episodio-2.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la segunda saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2-episodio-2.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la segunda saga de dragon ball en el cual .....</p>
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
                                <Image alt='dragonball'  src='/assets/top5-2.png'  width={700} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 5 </h1>
                                <h2 className=' text-center'>Episodio 215</h2>
                                <p className='text-center'>¿Qué pasa, Piccolo? Un inesperado no-combate.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/top4-2.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3  mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 4  </h1>
                                <h2 className=' text-center'> Episodio 220</h2>
                                <p className='text-center'> ¡Entra en escena el hombre entre bastidores! El malvado brujo Babidí.</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/top3-2.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4 '>
                            <div>
                                <h1 className=' text-center'>Top 3</h1>
                                <h2 className=' text-center'> Episodio 213 </h2>
                                <p className='text-center'>¿Qué harás, Satán? El mayor apuro de la historia.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/top2-2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 2</h1>
                                <h2 className=' text-center'> Episodio 219</h2>
                                <p className='text-center'> ¡Una conspiración rastrera! El poder de Gohan es robado.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <div className='d-flex justify-content-center'>
                            <h1>El top 1 es para:</h1>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image  alt='dragonball' src='/assets/top1-2.png'  width={600} height={650} layout='intrinsic'/>
                        </div>
                        <div >
                            <h2 className=' text-center'> Episodio 218</h2>
                            <p className='text-center'> ¡Desenmascarado! Saiyaman es Son Gohan.</p>
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
                            <p className='text-center'>Esta saga cuenta un total de 15 peliculas las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>¡Devuélvanme a mi Gohan!</h1>
                                <h2 className=' text-center'> 15 de julio de 1989 </h2>
                                <p className='text-center'> Duración 42 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli1.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>El sujeto más fuerte de este mundo</h1>
                                <h2 className=' text-center'> Fecha de estreno:10 de marzo de 1990</h2>
                                <p className='text-center'>Duración 59 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Una superbatalla decisiva para el planeta Tierra</h1>
                                <h2 className=' text-center'> Fecha de estreno:7 de julio de 1990 </h2>
                                <p className='text-center'>Duración 61 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli3.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Goku es un Súper Saiyajin</h1>
                                <h2 className=' text-center'> Fecha de estreno:19 de marzo de 1991 </h2>
                                <p className='text-center'> Duración 52 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli4.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Los rivales más poderosos</h1>
                                <h2 className=' text-center'> Fecha de estreno:20 de julio de 1991 </h2>
                                <p className='text-center'>Duración 47 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli5.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Los Guerreros más Poderosos</h1>
                                <h2 className=' text-center'> Fecha de estreno:7 de marzo de 1992 </h2>
                                <p className='text-center'>Duración 46 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli6.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>La batalla de los tres Saiyajin</h1>
                                <h2 className=' text-center'> Fecha de estreno:11 de julio de 1992</h2>
                                <p className='text-center'>Duración 46 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli7.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>El Poder Invencible</h1>
                                <h2 className=' text-center'> Fecha de estreno:6 de marzo de 1993</h2>
                                <p className='text-center'>Duración 72 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli8.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>La galaxia corre peligro</h1>
                                <h2 className=' text-center'> Fecha de estreno:7 de octubre de 1993</h2>
                                <p className='text-center'>Duración 50 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli9.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>El Regreso del Guerrero Legendario</h1>
                                <h2 className=' text-center'> Fecha de estreno:12 de marzo de 1994 </h2>
                                <p className='text-center'>Duración 52 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli10.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>El combate final</h1>
                                <h2 className=' text-center'> Fecha de estreno:9 de julio de 1994 </h2>
                                <p className='text-center'>Duración 46 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli11.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>La fusión de Goku y Vegeta</h1>
                                <h2 className=' text-center'> Fecha de estreno:4 de marzo de 1995</h2>
                                <p className='text-center'>Duración 51 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli12.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>El Ataque del Dragón</h1>
                                <h2 className=' text-center'> Fecha de estreno:15 de julio de 1995</h2>
                                <p className='text-center'>Duración 52 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli13.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball Z: La batalla de los dioses</h1>
                                <h2 className=' text-center'> Fecha de estreno:30 de marzo de 2013</h2>
                                <p className='text-center'>Duración 85 minuto y 105 minutos (versión extendida)</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli14.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball Z: La resurrección de Freezer</h1>
                                <h2 className=' text-center'> Fecha de estreno:18 de abril de 2015 </h2>
                                <p className='text-center'>Duración 93 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image alt='dragonball'  src='/assets/2peli15.png'  width={500} height={650} layout='intrinsic'/>
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
                            <p className='text-center'>Esta saga cuenta un total de 7 especiales las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Una solitaria batalla final —Quien desafió a Freeza, el padre del Guerrero Z Kakarotto</h1>
                                <h2 className=' text-center'> Fecha de estreno:17 de octubre de 1990 </h2>
                                <p className='text-center'>Duración 48 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial1.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Los dos guerreros del futuro: Gohan y Trunks</h1>
                                <h2 className=' text-center'> Fecha de estreno:24 de febrero de 1993 </h2>
                                <p className='text-center'>Duración 48 minutos</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Toriko por One Piece por Dragon Ball Z: ¡Supercolaboración especial!</h1>
                                <h2 className=' text-center'> Fecha de estreno: 7 de abril de 2013 </h2>
                                <p className='text-center'>Duración 43 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial3.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial4.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>El plan para erradicar a los saiyanos</h1>
                                <h2 className=' text-center'> Fecha de estreno:6 de agosto de 1993</h2>
                                <p className='text-center'>Duración 60 minutos</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>¡Reúnanse! El mundo de Goku</h1>
                                <h2 className=' text-center'> Fecha de estreno:1992</h2>
                                <p className='text-center'>Duración 26 minutos</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial5.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial6.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Son Goku y sus amigos regresan!</h1>
                                <h2 className=' text-center'> Fecha de estreno:21 de septiembre de 2008</h2>
                                <p className='text-center'>Duración 33 minutos</p>
                            </div>
                        </div>
                    </Row>
                    <Row className='justify-content-center'>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  alt='dragonball' src='/assets/2especial7.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Episodio de Bardock</h1>
                                <h2 className=' text-center'> Fecha de estreno: junio de 2011</h2>
                                <p className='text-center'>Duración 20 minutos</p>
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
                                <div className='d-flex justify-content-center video-ending1-2 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=w6lsndVNOk4'>Ir a ver</a></Button>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-center video-ending2-2 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=n_NU9Yc8Qzw'>Ir a ver</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center'>Openings</h2>
                            </div>
                            <div className='d-flex justify-content-center video-open1-2 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=cie7scVUdQE'>Ir a ver</a></Button>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center video-open2-2 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=arEKVepnmEI'> Ir a ver</a></Button>
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
export default Body3;