console.log("JS Trial")

//// PASSI ESERCIZIO MILESTONE 1
///     Recuperare come costante l'ID presente nell'HTML dell'input relativo alla distanza.
///     Recuperare come costante l'ID presente nell'HTML dell'input relativo all'età.
///     Recuperare come costante l'ID presente nell'HTML dell'input relativo al bottone.
///     Testare tramite console.log di recuperare l'elemento corretto per ogni input.
///     Definire una costante con il prezzo per km percorso.
///     Utilizzare il metodo .addEventListener per recuperare le value relative ad età e distanza quando si effettua un 'click' del bottone.
///     Definire una costante con il prezzo totale in base ai dati in recuperati. 
///     Creare le variabili del biglietto in base all'età seguendo 2 passaggi:
///         1• Creare ed applicare uno sconto se l'età è minore di 18 anni.
///         2• Creare ed applicare uno sconto se l'età è superiore a 65 anni.
///     Stampare i prezzi per ogni variabile.


let inputDistanceElement = document.getElementById('distance');
let inputAgeElement = document.getElementById('age');
let inputSubmitElement = document.getElementById('ticket-price');

console.log(inputDistanceElement);
console.log(inputAgeElement);
console.log(inputSubmitElement);

let kmPrice = 0.21; //Number


inputSubmitElement.addEventListener('click', function(){
    let distance = inputDistanceElement.value;
    let age = inputAgeElement.value;

    let totalPrice = kmPrice * distance; //Number


    console.log(distance + " km")
    console.log(age + " anni")

    if (age < 18){

        let discount = totalPrice * 0.2; //Number
        totalPrice = totalPrice - discount; //Number
    
    } else if (age > 65){
    
        let discount = totalPrice * 0.4 //Number
        totalPrice = totalPrice - discount; //Number
    
    } 

    console.log("prezzo: " + totalPrice.toFixed(2) + " €")
})




