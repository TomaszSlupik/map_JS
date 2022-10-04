/*
Metoda MAP - wykonuje funkcje na każdym obiekcie i tworzy nową zupełnie tablice
Używana często do podwojenia czegoś, do walut 
*/

// 1 przykład: Zamiana elem tablicy na elementy pizza

const food = ['pizza', 'kawa', 'pierogi']


const onlyPizza = food.map(function () {
    return 'pizza'
})

console.log(onlyPizza)



// 2 przykład: Podwojenie 

const price = [2.33, 3.55, 10, 2.99]


const priceUpper = price.map(function (itemTwo) {
    return (itemTwo * 2).toFixed(2)
})



console.log(priceUpper)


// 3 przykład:

const characters = [{
        first_name: 'Tomek',
        height: 172,
        mass: 72,
        eye_color: 'blue',
        gender: 'male'
    },
    {
        first_name: 'Paweł',
        height: 192,
        mass: 94,
        eye_color: 'green',
        gender: 'male'
    },
    {
        first_name: 'Natalia',
        height: 165,
        mass: 55,
        eye_color: 'green',
        gender: 'famale'
    }
]

const allNames = characters.map(characters => {
    return characters.first_name
})

const allHeight = characters.map(characters => {
    return characters.height
})



console.log(allNames)
console.log(allHeight)