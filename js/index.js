alert( 'RISPONDI!!!!!!!!!!!!!');







let addizzione = prompt('5+5');
if(addizzione == 10) {
    document.getElementById('quiz1').innerHTML = 'giusto';
    console.log('Risposta giusto')
    alert('ottimo sei un grande')
}else {
    document.getElementById('quiz1').innerHTML = 'errata';
    console.log('Risposta errata')
    alert('fai schifo')
    
}let divisione = prompt('10/2');
if (divisione == 5) {
    document.getElementById('quiz2').innerHTML = 'giusto';
    console.log('Risposta giusto')
    alert('ottimo sei un grande')
} else {
    document.getElementById('quiz2').innerHTML = 'errata';
    console.log('Risposta errata')
    alert('fai schifo')

}let moltiplicazione = prompt('5 x 5');
if (moltiplicazione == 25) {
    document.getElementById('quiz3').innerHTML = 'giusto';
    console.log('Risposta giusto')
    alert('ottimo sei un grande')
} else {
    document.getElementById('quiz3').innerHTML = 'errata';
    console.log('Risposta errata')
    alert('fai schifo')

}
let sottrazzione = prompt('15-5');
if (sottrazzione == 10) {
    document.getElementById('quiz4').innerHTML = 'giusto';
    console.log('Risposta giusto')
    alert('ottimo sei un grande')
} else {
    document.getElementById('quiz4').innerHTML = 'errata';
    console.log('Risposta errata')
    alert('fai schifo')

}

 
const parodisp = 2
let pari = prompt('numero pari')
if (pari % parodisp == 0) {
    document.getElementById('pari').innerHTML = 'giusto';
    console.log('Risposta giusto')
    alert('ottimo sei un grande')
} else {
    document.getElementById('pari').innerHTML = 'errata';
    alert('fai schifo')
    console.log('Risposta errata')

}
let dispari = prompt('numero dispari');
if (dispari % parodisp !=0) {
    document.getElementById('dispari').innerHTML = 'giusto';
    console.log('Risposta giusto')
    alert('ottimo sei un grande')
} else {
    document.getElementById('dispari').innerHTML = 'errata';
    console.log('Risposta errata')
    alert('fai schifo')

}











