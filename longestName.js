/** function: Reverse longest Name between 2 Names
 * 
 * ex. john, Alexandar
 * output: radnaxelA
 */

function reverseLongestName(name1, name2){
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