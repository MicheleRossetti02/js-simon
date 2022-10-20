//Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

let container = document.querySelector(".container")
    const num_totali = 5;

    random(num_totali)

    let right = 0;
    let wrong= 0;


  
    setTimeout (end_time,30000)
    setTimeout (gameover,29900)

    function gameover() {
        container.innerHTML = 'TEMPO SCADUTO'

    }

    function end_time(num) {


        for (let i = 0; i < num_totali; i++) {
        const num_scelto =number(prompt('DIGITA I NUMERI ELENCATI PRECEDENTEMENTE UNO ALLA VOLTA'))

        

        }

        console.log('Il tuo punteggio è: ' + right + ' risposte giuste '+ wrong+ 'risposte errate');
    }


    function random(num_totali){
        number_list =[]

        for (let i = 0; i < num_totali; i++) {
            num= Math.ceil(Math.random()*101)

            let casella_num = `<div class="casella_num"> ${num}  </div>`;
            container.innerHTML += casella_num;
            console.log(num);
        

        
        }

    
}
