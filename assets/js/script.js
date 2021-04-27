
$(document).ready(function(){
    reset();
   
    var arrRandom = [];
    var arrNumUtente = [];
    var arrRisultato = [];
    $('#calc').hide()
    $('#indovinati').hide()
    $('#restart').hide()
    
    

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
                printdisplay('i numeri che hai indovinato sono: '+arrRisultato);
                $('#restart').click(function(){
                    reset();
               });
            } 
            

        $('#input').val(''); 

        
         
    })
    

  
});

function reset(){
    printOutput('Sei pronto?....CLICCA SUL VIA', '#display');
    $('#btn-start').show();
    $('#btn-box').hide();
    $('#restart').hide();
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
    $("#restart").show();
   
}
function controllo(arr1,arr2,arr3){
    
    
    for(num of arr1){
        if(arr2.includes(parseInt(num))){
            arr3.push(num)
        }
    }
    console.log(arr3);
    
}

function printdisplay(text){
   
    $('#indovinati').text(text);
}











