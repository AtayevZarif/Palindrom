const array = ["non", "olma", "Aziza", "gul", "mashina"]
let palindrom = []
let nonpalindrom = []

for (const element of array){
    let reverse = element.toLowerCase().split("").reverse().join("");
    if (element.toLowerCase() == reverse){
        palindrom.push(element);
    }
    else {
        nonpalindrom.push(element)
    }
}


console.log("Palindrom: " + palindrom);
console.log("Nonpalindrom: " + nonpalindrom);