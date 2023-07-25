const input = document.getElementById('inputNumero')
const btnNUmero = document.getElementById('btn-numeri')
const card = document.getElementById('card')
let array =[]
let sommaTot = 0
// mettendo card.innerHTML += `<span> il valore di ${sommaTot} è al massimo</span>` invece se mettiamo = blocchiamo l'imput
btnNUmero.addEventListener('click',carica)
function add(array){
    return array.reduce((a,b) => a + b, 0)
}
function carica(){
    
    if (sommaTot < 50){
        array.push(parseInt(input.value))
        sommaTot = add(array)
    }else{
        card.innerHTML += `<span> il valore di ${sommaTot} è al massimo</span>`
    }
    console.log(sommaTot)
    console.log(array)
    
    
}


    // let sommaTot = 0
    // if (sommaTot <50){
    //     array.push( parseInt(input.value))
    //     for ( i=0; i< array.length; i++){
    //         sommaTot+= array[i]
    //         console.log(sommaTot)
    //     }
    // }else{
    //         console.log(`somma è al massimo ${sommaTot}`)
    //     }
    
    // console.log(array)

// btnNUmero.addEventListener('click',somma)
// function somma(){
//     let sommaTot = 0
//     for ( i= 0; i< array.length; i++){
//         if (sommaTot < 50){
//             sommaTot += array[i]
//         }else{
//             console.log(`${sommaTot} è al massimo`)
//         }
//     }
//     console.log(sommaTot)
// }