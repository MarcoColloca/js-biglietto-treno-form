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



//// PASSI ESERCIZIO MILESTONE 2
///     Sostituire nell'HTML l'input relativo all'età con una select.
///     Andare a modificare 'if' ed 'else if', facendo in modo che lo sconto venga applicato in base alla value dell'opzione selezionata nella select.
///     Creare una pagina di recap nell'HTML.
///     Stampare nella pagina tutti i dati ottenuti.
///         • Assegnare un ID nell'HTML agli elementi che voglio modificare.
///         • Recupereare gli elementi (utilizzando .getElementById) in Javascript assegnandoli ad una variabile.
///         • Andare a modificare gli elementi all'interno dell'HTML (utilizzando .innerHTML)
///        !!! FARE ATTENZIONE AD INSERIRE QUESTA PARTE NEL ADD.EVENT.LISTENER, IN MODO CHE LE MODIFICHE VENGANO APPLICATE AL CALCOLO DEL PREZZO !!!






let inputSubmitElement = document.getElementById('ticket-price');

// console.log(inputSubmitElement);






inputSubmitElement.addEventListener('click', function(){
    let inputDistanceElement = document.getElementById('distance');
    

    let selectAgeElement = document.getElementById('age');
    let inputPassengerElement = document.getElementById('passenger');

    // console.log(inputDistanceElement);
    // console.log(selectAgeElement);

    
    let distance = inputDistanceElement.value;
    

    let age = selectAgeElement.value;
    let passenger = inputPassengerElement.value;


    let kmPrice = 0.21; //Number
    let basePrice = kmPrice * distance; //Number

    

    console.log("Distanza: " + distance + " km")
    console.log("Sconto: " + age)
    console.log("Nome Passeggero: " + passenger)

    console.log(inputPassengerElement.outerHTML)

    if(isNaN(distance)){
        alert("Attenzione!! Non hai inserito un numero all'interno dei chilometri!");
    }else if (distance <= 0){
        alert("Attenzione!! I km devono essere maggiori di 0!");
    } if(passenger == ""){
        alert('Attenzione!! Inserire Nome e Cognome.');

    }else if (age == 'minorenne'){

        let discount = basePrice * 0.2; //Number
        totalPrice = basePrice - discount; //Number
    
    } else if (age == 'over65'){
    
        let discount = basePrice * 0.4 //Number
        totalPrice = basePrice - discount; //Number
    
    } else{

        totalPrice = basePrice; //Number

    }

    console.log("prezzo: " + totalPrice.toFixed(2) + " €");

    let fullPriceElement = document.getElementById('full-price');

    let discountElement = document.getElementById('discount');

    let finalPriceElement = document.getElementById('final-price');

    let passengerNameElement = document.getElementById('passenger-name')

    let carriageNumberElement = document.getElementById('carriage-number')

    let ticketCodeElement = document.getElementById('ticket-code')



    fullPriceElement.innerHTML = basePrice + ' €';

    discountElement.innerHTML = age;

    finalPriceElement.innerHTML = totalPrice.toFixed(2) + ' €';

    passengerNameElement.innerHTML = passenger;

    carriageNumberElement.innerHTML = '8';

    ticketCodeElement.innerHTML = 'ASDO78IHE2QO';
})




