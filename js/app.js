// Utilizziamo un ciclo per chiedere all’utente un numero tramite prompt. 
// Se il numero è dispari, lo salviamo in una lista. Continuiamo a chiedere 
// un numero all’utente finchè non avremo ottenuto 10 numeri dispari. 
// Tutti gli altri valori li scartiamo (numeri pari ed eventuali NaN).
// Una volta ottenuti tutti i 10 numeri, stampiamoli in console uno alla volta.


console.log('while');
let number;
console.log(number);
let dispariList = [];
while(dispariList.length < 10){ 

    number = parseInt(prompt('inserisci numero'));
    // number=parseInt(Math.random()*100);
    

    if(number % 2 !== 0 && !isNaN(number)){
        dispariList.push(number);
    }
}

for (let i = 0; i < dispariList.length; i++) {
    console.log('Stampa:',dispariList[i]);
    
    
}


