
// ******** EJERCICIO 1 ***************

const algunValor = 9

function exampleAsync(valor) {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(valor + 1), 1000 })
    })
}
exampleAsync(algunValor).then(res => console.log(res)) //  manejo la promesa con .then

async function exampleAsyncTwo(unValor) {
    console.log(await exampleAsync(unValor)) // coloco el await para que espere la resolucion de la promesa y me devuelva 
    //  el resultado, y no la promesa (objeto promise)
}
await exampleAsyncTwo(algunValor)//  manejo con await; indico que es un metodo asincronico, y espero la respuesta

// ******** EJERCICIO 2 ***************

const piValidValue = 3.14
const piWrongValue = 3.10

operation(piValidValue)
    .then(res => console.log("Válido: ", res))
    .catch(err => console.log(err))

operation(piWrongValue)
    .then(res => console.log(res))
    .catch(err => console.log("No valido! ", err))

function operation(valor) {
    return new Promise((resolve, reject) => {
        if (valor == piValidValue) {
            resolve("El valor es pi")
        }
        else if (valor == piWrongValue) {
            reject("El valor no es pi")
        }
    })
}

// ******** EJERCICIO 3 ***************

const data =
    await fetch("https://restcountries.com/v3.1/name/argentina")


async function countryInformation(data) {
    const myCountry = data.json()
    console.log("Datos: ", await myCountry) // el await puede ir delante del data.json o en el my country, indicando a que espere la respuesta
} countryInformation(data)                 // del fetch, y manejamos su respuesta con el await enlugar del .then 