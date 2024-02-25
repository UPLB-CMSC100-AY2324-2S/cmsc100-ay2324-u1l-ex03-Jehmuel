function isNumber(char){
    if (char >= '0' && char <= '9'){
        return true;
    } else {
        return false;
    }
}

function hasUpLoNum(string){
    var hasLower = false;
    var hasUpper = false;
    var hasNum = false;

    for (let i = 0; i < string.length; i++){
        const compare = string[i];

        if(!(compare === string[i].toUpperCase())){    // compare and string[i] are essentially the same, just wanted to differentiate 
            hasUpper = true;
        }
        
        if (!(compare === string[i].toLowerCase())){
            hasLower = true; 
        }
        
        if (isNumber(compare)){
            hasNum = true;
        }

    }

    return hasLower && hasUpper && hasNum
}

function validatePassword(pass1, pass2){

    if (pass1.length < 8 ) {
        console.log("Insufficient Number of Characters!");
        return false;
    }else if (pass1 !== pass2) {
        console.log("Wrong Password!");
        return false;
    }else if (!hasUpLoNum(pass1)) {
        console.log("Invalid Password!");
        return false;
    }else{return true;}
}

function reversePassword(pw){
    var length = pw.length;
    var reverse = '' ;

    for (let i = length - 1; i >= 0 ; i--){         //directly adds to a string without needing to make an array
        reverse += pw[i];
    }

    return reverse;
}

function storePassword(name,pass1,pass2){
    if (validatePassword(pass1, pass2)) {
        var newpass = reversePassword(pass1); // reverse pass1 before storing

        const security = {
            name: name,
            newpassword: newpass
        };
        console.log("Password Stored");
            return security;
    } else {
            return null;
        }
}



//console.log(validatePassword("helloworld", "hello"));          // returns false
//console.log(validatePassword("hello", "hello"));    	       // returns false
//console.log(validatePassword("hello1234", "hello1234"));       // returns false
//console.log(validatePassword("Hello1234", "Hello1234"));       // returns true
//console.log(validatePassword("HELLO1234", "HELLO1234"));       // returns false


console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "pass1234", "pass1234"));
console.log(storePassword("John", "Pass1234", "Pass1234567"));
console.log(storePassword("John", "pass1", "pass2"));


