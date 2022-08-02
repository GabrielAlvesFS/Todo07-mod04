import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let propertiesList = []

const sortingProperties = (properties) => {
    //removing the last element
    properties.pop()

    //sorting the array
    properties.sort()
    console.log('Propriedades:', properties)
}

const doingQuestion = ()=> {
    rl.question('Digite uma propriedade css: ', (answer) => {
        propertiesList.push(answer)

        // If the last item in the array is not 'SAIR' or 'sair', call again the function
        if (propertiesList.at(-1) !== 'SAIR' && propertiesList.at(-1) !== 'sair') {
            doingQuestion()
        } 
        else {
            rl.close()
            sortingProperties(propertiesList)
        }
    })
}

doingQuestion()