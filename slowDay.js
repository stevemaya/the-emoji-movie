const day = require('./day.js');

console.log('WELP!  Better get this day started!')

let i = 0

const whatADay = function() {
    if(i<day.length){
        console.clear()
        console.log(day[i]);
        i++;
    } else {
        clearInterval(awfulDay);
        console.log('\u0007');
    }
    
}

const awfulDay = setInterval(whatADay, 3000); 