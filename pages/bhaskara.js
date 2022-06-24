import React from 'react';
import Layout from '../components/Layout.js';
import {Button, Container, Row,Form} from 'react-bootstrap';

export default function Home() {
    numeros = []



    function calcular(a, b, c){
        const contenedor = document.querySelector('.contenedor');

        let bNegativo = b * -1;

        let bCuadrado = b * b;

        let Calculo = -4 * a * c;

        let divisor = 2 * a;
        let Calculo2 = (bCuadrado + Calculo);
        let resultadoraiz = Math.sqrt(Calculo2);
        let resultado1 = (bNegativo + resultadoraiz )/divisor;
        let resultado2 = (bNegativo - resultadoraiz )/divisor;

        let nose = `
                '<h1>Resultado sumando es: ${resultado1}</h1>'
                '<h1>Resultado restando es: ${resultado2}</h1> '
        `;

        ;
        contenedor.innerHTML = nose;


        function mostrar (numeros){
            console.log(numeros)
            
        }
    }


    return (
        <>
        <Layout>
            <form onSubmit = {ev => {
                ev.preventDefault();
                let a = ev.target.a.value;
                let b = ev.target.b.value;
                let c = ev.target.c.value;
                a = parseInt(a)
                b = parseInt(b)
                c = parseInt(c)
                calcular(a, b, c)
            }}>
                <input
                    type = "text"
                    name = "a"
                    autoComplete = 'off'
                ></input>
                <input
                    type = "text"
                    name = "b"
                    autoComplete = 'off'
                ></input>
                <input
                    type = "text"
                    name = "c"
                    autoComplete = 'off'
                ></input>
                <button type='submit' >mandar</button>
            </form>

            <section>
                <Container className='bordes col-8' style={{height:500,}}>
                    <Row>
                        <div className='contenedor'></div>
                    </Row>
                </Container>
                <div className='bg-secondary formulario sombra' >
                        <div className='d-flex justify-content-center mb-4'>
                            <h2 className='text-dark text-center'>Formula de Bhaskara</h2>
                        </div>
                        <Row>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Valor de a</p>
                                </div>
                                <Form onSubmit = {ev => {
                                    ev.preventDefault();
                                    let a = ev.target.a.value;
                                    numeros.push(a); }}
                                    >
                                    <Form.Control type="Text" name = "a" autoComplete = 'off' placeholder="Valor de a" />
                                </Form>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>valor de b</p>
                                </div>
                                <Form onSubmit = {ev => {
                                    ev.preventDefault();
                                    let b = ev.target.b.value;
                                    numeros.push(b); }}
                                    >
                                    <Form.Control type="Text" name = "b" autoComplete = 'off' placeholder="Valor de b" />
                                </Form>
                            </div>
                        </Row>
                        <Row className='mt-2'>
                            <div className='col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Valor de c</p>
                                </div>
                                <Form onSubmit = {ev => {
                                    ev.preventDefault();
                                    let c = ev.target.c.value;
                                    numeros.push(c); }}
                                    >
                                    <Form.Control type="Text" name = "c" autoComplete = 'off' placeholder="Valor de c" />
                                </Form>
                            </div>
                        </Row>
                        <Row className='mt-4'>
                            <Form>
                                <button type='submit' onClick={mostrar(numeros)} className='boton w-100'><h3 className='text-center '>Enviar</h3></button>
                            </Form>
                        </Row>
                    </div>
            </section>
            
        </Layout>
        </>
    )
}
