/** function: Reverse longest Name between 2 Names
 * 
 * ex. john, Alexandar
 * output: radnaxelA
 */

/**
 * function reverseLongestName(name1, name2){
    let nameOneLength = name1.length;
    let nameTwoLength = name2.length;

    if(nameOneLength > nameTwoLength){
console.log(name1.split(""));
console.log(name1.split("").reverse());


        return name1.split("").reverse().join("");
    }

    else{
console.log(name2.split(""));
console.log(name2.split("").reverse());

        return name2.split("").reverse().join("")
    }
}

let resultRev = reverseLongestName("John", "Alexandar");

console.log(resultRev);
 */




// OPTIONAL OPTION REVERSE-----------

// let str = "Alexis";

// for(let i=0; i<str.length; i++){
//     const element = str[i];
//     console.log(element);
// }

let str = "Alexis";
let reversedString = "";
for(let i = str.length-1; i>=0; i--){
    const element =str[i];
    reversedString = reversedString + element;
}

console.log(reversedString);

// LONGEST NAME REVERSE function option 2
function reverseLongestName(name1, name2){
    let nameOneLength = name1.length;
    let nameTwoLength = name2.length;

    let largeNmae = "";

    if(nameOneLength > nameTwoLength){
        largeNmae = name1;
    }

    else{
        largeNmae = name2;
    }
    return largeNmae
}

let result = reverseLongestName("John", "Alexandar");

console.log(result);