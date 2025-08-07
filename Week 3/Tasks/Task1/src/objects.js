var Dict = require("collections/dict");
import isIterable from 'utils.js';

var studs = [];

for (let index = 0; index < 10; index++) {
    const student = {};
    student.name = `${index}stud`;
    student.age = `${index*10}`;
    
}

function frequencyMap(word) {
    if (!isIterable(word)){
        throw new Error("Ya ostaz el data mtsa7esh?!?!?!?");
    }

    var freq = new Dict([], function (key){
        this[key] = 0;
        return 0;
    });

    word.forEach(element => {
        freq[element] += 1;
    }); 

    return freq;
}


function checkDuplicates(iterable){

}