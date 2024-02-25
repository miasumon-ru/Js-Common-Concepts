

function greeting (greetingHandler, name){

    greetingHandler (name);
     
    
}

function greetingHandler(name){
     console.log('good morning', name)
}


greeting(greetingHandler, 'sumon');
greeting(greetingHandler, 'tom');
greeting(greetingHandler, 'john');

function greetingEvening (name){
    console.log('good evening', name)
}

greeting(greetingEvening , 'rahim')


function greetingNight (name){
    console.log('good night ', name)
}


greeting(greetingNight, 'anis');


// callback function is a function which is passed as parameter in a function and it is executed whenever is needed.