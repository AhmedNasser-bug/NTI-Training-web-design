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
function min(num1, num2){
    if (num1 >= num2){
        return num2;
    }
    return num1;
}
function max(num1, num2){
    if (num1 <= num2){
        return num2;
    }
    return num1;
}
function minmax(nums){
    var mn = nums[0];
    var mx= nums[0];

    for (let index = 0; index < nums.length; index++) {
        mn = min(mn, nums[index]);
        mx = max(mx, nums[index])
    }

    return (mn, mx)
}
function isPositive(num){
    return num >= 0? 1: 0
}
function isEven(num){
    return num % 2 == 0? 1: 0
}
function root(num, nth = 2){
    for (let index = 1; index <= num/nth; index++) {
        var res=1;
        for (let current = 1; current < nth; current++) {
            res *= index;
        }

        if (res == num){
            return res
        }
    }
}
function calculate(num1, num2, operation){
    switch (operation) {
        case '+':
            return num1 + num2;
            
        case '-':
            return num1 - num2;

        case '+':
            return num1 * num2;

        default:
            console.error("Wrong operation!!!11!");
            
            break;
    }
}

function take_nums(n){
    var input =[];
    for (let index = 1; index <= n; index++) {
        input.push(prompt(`Enter ${n}th number`))
    }

    return input;
}
