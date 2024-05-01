import {useEffect, useState} from 'react'
import {ALowerLetterAtLeast, ANumberAtLeast, ASpecialCharacterAtLeast, AnUpperLetterAtLeast, minMaxLenght} from '../js/validators/formFields'

let requirements = [
    {id: 1, text: 'Mínimo 8 carácteres, máximo 15', complete: false},
    {id: 2, text: 'Al menos una letra mayúscula [A-Z]', complete: false},
    {id: 3, text: 'Al menos una letra minuscula [a-z]', complete: false},
    {id: 4, text: 'Al menos un número [0-9]', complete: false},
    {id: 5, text: 'Al menos un caracter especial [!@#$%^&*]', complete: false}, 
]

export default ({cadena}) => {    
    const [random, setRandom] = useState(Math.random().toString())

    const handleLongitud = () => {
        if(minMaxLenght(cadena, 8, 15)) requirements = (requirements.map(x => x.id === 1 ? ({...x, complete: true}) : x))
        else requirements = (requirements.map(x => x.id === 1 ? ({...x, complete: false}) : x))
    }

    const handleMayuscula = () => {
        if(AnUpperLetterAtLeast(cadena)) requirements = (requirements.map(x => x.id === 2 ? ({...x, complete: true}) : x))
        else requirements = (requirements.map(x => x.id === 2 ? ({...x, complete: false}) : x))
    }

    const handleMinuscula = () => {
        if(ALowerLetterAtLeast(cadena)) requirements = (requirements.map(x => x.id === 3 ? ({...x, complete: true}) : x))
        else requirements = (requirements.map(x => x.id === 3 ? ({...x, complete: false}) : x))
    }

    const handleNumero = () => {
        if(ANumberAtLeast(cadena)) requirements = (requirements.map(x => x.id === 4 ? ({...x, complete: true}) : x))
        else requirements = (requirements.map(x => x.id === 4 ? ({...x, complete: false}) : x))
    }

    const handleCaracterEspecial = () => {
        if(ASpecialCharacterAtLeast(cadena)) requirements = (requirements.map(x => x.id === 5 ? ({...x, complete: true}) : x))
        else requirements = (requirements.map(x => x.id === 5 ? ({...x, complete: false}) : x))
    }

    /* Este otro es para ejecutar una vez que ya se hayan verificado las propiedades y saber si el valor de la caja esta vacio o no */

    useEffect(() => {
        handleLongitud()
        handleMayuscula()
        handleMinuscula()
        handleNumero()
        handleCaracterEspecial()
        setRandom(Math.random().toString())
    }, [cadena])

    return {
        requirements
    }
}