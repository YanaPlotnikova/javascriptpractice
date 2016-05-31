
function getage(age) {
    var result;
    if (age < 18) {
        result = 'young';
    } 
    else {
        if (age > 59) {
            result = 'old';
        }
    else result = 'adult';
    }
    return result;
}

var age = Number(prompt('Enter your age'));
var message = 'You are '+ getage(age);
alert(message);

