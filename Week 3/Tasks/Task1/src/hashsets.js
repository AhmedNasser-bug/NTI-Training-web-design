
function checkDuplicate(item){
    return item in set
}

function isEligible(candidate){
    var job_requirement = FastSet([1, 2, 3]);
    var match = FastSet();

    candidate.skills.forEach(element => {
        if(element in job_requirement){
            match.add(element);
        }
    });

    return match === job_requirement
}


function oneRow(word){
    var row1 = FastSet("qwertyuiop");
    var row2 = FastSet("asdfghjkl");
    var row3 = FastSet("zxcvbnm");
    word = FastSet(word);
    return row1 == word || row2 == word || row3 == word 
}

function calculateGrades(physics, math, computer, biology, chemistry){
    var total = physics + math + computer + biology + chemistry;
    var percent = total;
    if(percent>= 90){
        return "A"
    }
    if(percent >= 80){
        return "B"
    }
    if(percent >= 70){
        return "C"
    }
    if(percent >= 60){
        return "D"
    }
    if(percent >= 40){
        return "E"
    }
    return "F"
}

console.log("Grade"+calculateGrades(20, 20, 20, 20, 5))

class myArr{
    
    constructor(elements){
            
    }
}



function map(func, arr){
    for (let index = 0; index < arr.length; index++) {
        arr[index] = func(arr[index])
        
    }
}
function flatMap(func, arr){
    map(func, arr)
    arr = arr.flat()
}


function find1(arr, func){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(func(arr)){
            return true;
        }
    }

    return false;
}

function find2(arr, func){
    for(let x in arr){ // x is the index of each element
        console.log(x);
        
        if(func(arr[x])){
            return true;
        }
    }

    return false;
}

function find3(arr, func){
    for(let x of arr){ // x is the element itself
        console.log(x);
        
        if(func(x)){
            return true;
        }
    }

    return false;
}

function find4(arr, element){
    const map = Map()
    for(let x of arr){ // x is the element itself
        map.set(x, true)
    }
    console.log(map)

    return map[element]; // as fast as array lookup
}
console.log(`[1, 2, 4, 2, 15] has 3?`, find5([1, 2, 4, 2, 15], 3));

function find5(arr, element){
    let set = Set(arr); // now the array turned into a map of existence values
    console.log(set);
    
    return set.has(element);
    
}
console.log(`[1, 2, 4, 2, 15] has 3?`, find5([1, 2, 4, 2, 15], 3));
