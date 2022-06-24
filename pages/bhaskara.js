import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout.js';
import {Button, Container, Row,Form} from 'react-bootstrap';

export default function Home() {
    const [inputs, setInputs] = useState({
        A:"",
        B:"",
        C:""
    })


    const[stateA, setA] = useState('')
    const[stateB, setB] = useState('')
    const[stateC, setC] = useState('')
    const[resutaldo, setResultado] = useState(0)
    let lista =[
        {id:1, edad:20 , show:false , input: {
            a: '',
            b:'',
            c:''
        }},
        {id:2,edad:22, show:true},
        {id:3,edad:25 , show: false},
        {id:4,edad:30 , show: false}
    ]
    console.log("inputs", inputs)
    console.log("lista", lista.filter(i => i.show))

    function calcular(a, b, c){
    
        let bNegativo = b * -1;

        let bCuadrado = b * b;

        let Calculo = -4 * a * c;

        let divisor = 2 * a;
        let Calculo2 = (bCuadrado + Calculo);
        let resultadoraiz = Math.sqrt(Calculo2);
        let resultado1 = (bNegativo + resultadoraiz )/divisor;
        let resultado2 = (bNegativo - resultadoraiz )/divisor;

        return {resA : resultado1 , resB : resultado2}       

    }

    function calcularDelta(a,b,c){
        return b * b - 4 * a * c;
    }
    const handleOnChage = (e) =>{
        setInputs({...inputs, [e.target.name]: e.target.value})
        if(e.target.name === 'A'){
            setA(e.target.value)
        }
        if(e.target.name === 'B'){
            setB(e.target.value)
        }
        if(e.target.name === 'C'){
            setC(e.target.value)
        }
        console.log(e.target.value , e.target.name)
    }

    const handleSubmit = () => {
        if(!stateA || !stateB || !stateC){
            alert("Ingrese todos los campos")
            return;
        }else if(stateA == 0) {
            alert("no se puede dividir por 0")
            return;
        }

        
        let delta = calcularDelta(stateA, stateB, stateC)
        if(delta < 0){
            alert ("Sin raices reales")
            return;
        } 

        let x1 = ((-stateB + Math.sqrt(delta))/(2*stateA) )
        let x2 = ((-stateB - Math.sqrt(delta))/(2*stateA) )
        
        setResultado({resA: x1, resB:x2})

    
    }

    return (
        <>
        <Layout>
        <div>
            <div>
                <label>A</label>
                <input placeholder='a' name="A" id="stateA" value={inputs.A} onChange={e => {
                    handleOnChage(e)
                   
                    // setInputs({...inputs, A : e.target.value})
                }}/>
                </div>
                <div>
                <label>B</label>
                <input placeholder='b' name="B" id="stateB" value={inputs.B} onChange={e =>{
                    handleOnChage(e)
                    
                }}/>
                </div>
                <div>
                <label>C</label>
                <input placeholder='c' name="C" id="stateC" value={inputs.C} onChange={e => 
                    {
                    handleOnChage(e)
                   
                    }}/>
                </div>
                <button type='button' onClick={()=> handleSubmit()} >mandar</button>
                <button type='button' onClick={()=> setResultado()} >Limpiar</button>
            </div>
            <div> 
                {resutaldo.resA}
                {resutaldo.resB}
            </div>
            <div>
                {lista.map(i => (
                   <p key={i.id}> {i.edad}</p>
                ))}
            </div>
{/* 
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
                                <div>
                                    <input 
                                    id='a' 
                                    type="Text" 
                                    name = "a" 
                                    autoComplete = 'off' 
                                    placeholder="Valor de a"
                                    value={a}
                                    onChange = ((e) => setA(e.target.a))/>
                                </div>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>valor de b</p>
                                </div>
                                <div>
                                    <input type="Text" name = "b" autoComplete = 'off' placeholder="Valor de b" />
                                </div>
                            </div>
                        </Row>
                        <Row className='mt-2'>
                            <div className='col-12'>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-white text-center font-weight-bold'>Valor de c</p>
                                </div>
                                <div>
                                    <input type="Text" name = "c" autoComplete = 'off' placeholder="Valor de c" />
                                </div>
                            </div>
                        </Row>
                        <Row className='mt-4'>
                            <Form>
                                <button type='submit'className='boton w-100'><h3 className='text-center '>Enviar</h3></button>
                            </Form>
                        </Row>
                    </div>
            </section> */}
            
        </Layout>
        </>
    );
}
