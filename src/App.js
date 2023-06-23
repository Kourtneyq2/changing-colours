import { useEffect, useState } from "react"

export const App = () => {

    const [colourClass, setColourClass] = useState(' hidden');

    const [clearColor, setClearColor] = useState('x-hidden');

    useEffect(() => {
        console.log(colourClass)
    })

    const [message, setMessage] = useState('');



    const blueColor = () => {
        setColourClass('blue')
        setClearColor('x-show')
    }
    const redColor = () => {
        setColourClass('red')
        setClearColor('x-show')
    }
    const orangeColor = () => {
        setColourClass('orange')
        setClearColor('x-show')
    }

    const xx = () => {
        setClearColor('x-hidden')
        setColourClass(' hidden')
    }

    return(
        <div>
            <button onClick={blueColor}>Blue</button>
            <button onClick={redColor}>Red</button>
            <button onClick={orangeColor}>Orange</button>
            <button onClick={xx} className={clearColor} id='x'>X</button>
        </div>
    )
}