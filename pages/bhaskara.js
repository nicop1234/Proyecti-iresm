import React from 'react';
import Layout from '../components/Layout.js';


export default function Home() {
    function calcular(a, b, c){
        const contenedor = document.querySelector('.contenedor')

        b = b * -1

        bCuadrado = b * b

        Calculo = -4 * a * c

        





        let nose = `
            '<h1>${a}</h1>'
            '<h1>${b}</h1> '
            '<h1>${c}</h1>' 
        `


        ;
        contenedor.innerHTML = nose;
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
            <div className='contenedor'></div>
        </Layout>
        </>
    )
}
