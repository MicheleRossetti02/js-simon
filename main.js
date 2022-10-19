//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let container = document.querySelector(".container")
    const num_totali =5;

for (let i = 0; i < num_totali; i++) {
    number()
    
    let casella_num = `<div class="casella_num"> ${num}  </div>`;
    container.innerHTML += casella_num;
    console.log(num);

}



  
  setTimeout (end_time,30000)
    
    function end_time() {

        for (let i = 0; i < num_totali; i++) {
            container.innerHTML('TEMPO SCADUTO')
        const num_scelto =number(prompt('DIGITA I NUMERI ELENCATI PRECEDENTEMENTE UNO ALLA VOLTA'))
            if(num_scelto === num ){
                console.log('hai indovinato');
            }    else{
                console.log('Hai sbagliato');
            }

        }
        
    }


    function number(){

    num= Math.ceil(Math.random()*101)


}