    var arrRandom = [];
    var arrNumUtente = [];
    var arrRisultato = [];
$(document).ready(function(){
    reset();
   
    
    $('#calc').hide()
    $('#indovinati').hide()
    $('#reset').hide()
    
    

    $('#btn-start').click(function(){
     $(this).hide();

        while(arrRandom.length < 5){
            arrRandom.push(generatorRandomNumber(1,100));
        }
        console.log(arrRandom)
        
        
        

        printOutput(arrRandom.toString(), '#display')

        setTimeout(function(){
         
            printOutput('indovina i 5 numeri', '#display');
            $('#btn-box').show();

        }, 1000)

    });

    /* quando clicco su invia devo aggiungere il numero all'array dei numeri utente e far comparire una stringa vuota nell'input */
    /* poi fare il confronto tra i due array */
    

    $('#btn').click(function(){
        
            for(var i=0; i<1; i++){
                arrNumUtente.push($('#input').val());
            }if(arrNumUtente.length>arrRandom.length -1){
                $('#btn-box').hide();
                $('#display').hide();
                $('#calc').show();
                setTimeout(attesa,3000);
                controllo(arrNumUtente,arrRandom,arrRisultato);
            }
            
        $('#input').val('');   
    });

    $('#reset').click(function(){
        reset()
    })
});


function controllo(arr1,arr2,arr3){
    
    
    for(var num of arr1){
        if(arr2.includes(parseInt(num))){
            arr3.push(num);
        }
    }
    if(arr3.length == 0){
        printdisplay('HAI PERSO');
    }else{
        printdisplay('i numeri che hai indovinato sono: '+arr3);
    }
}




function reset(){
    arrNumUtente = [];
    arrRandom = [];
    arrRisultato = [];
    printOutput('Sei pronto?....CLICCA SUL VIA', '#display');
    $('#btn-start').show();
    $('#btn-box').hide();
    $('#reset').hide();
    $('#indovinati').hide();
    $('#display').show();
};

function printOutput (text, target){
    $(target).text(text);
};

function generatorRandomNumber(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
};

function attesa(){
    $("#calc").hide();
    $("#indovinati").show();
    $("#reset").show();
}

function printdisplay(text){
    $('#indovinati').text(text);
}















