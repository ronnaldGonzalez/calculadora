// importar
/* eslint no-eval:0 */
import React, { useState } from 'react';
import words from 'lodash.words';
// import Button from './components/Button';
import Functions from './components/Functions'
import Numbers from './components/Numbers';
import MathOperations from './components/MathOperations'
import Result from './components/Result';
import './App.css'

// general la funcion del componente

const App = () => {
    const [stack, setStack] = useState("");
    const items = words(stack, /[^-^+^*^/]+/g);
    return (
        <main className='react-calculator'>
            <Result value={items[items.length - 1]} />
            <Numbers onClickNumber={(number) => {
                setStack(`${stack}${number}`);
            }}></Numbers>
            <Functions
                onContentClear={() => setStack("")}
                onDelete={() => {
                    if (stack) {
                        setStack(stack.substring(0, stack.length - 1))
                    }
                }
                } />
            <MathOperations
                onClickOperation={operation => setStack(`${stack}${operation}`)}
                onClickEqual={() => setStack(eval(stack).toString())} />
        </main>)

};

export default App;

// exportar componente 

