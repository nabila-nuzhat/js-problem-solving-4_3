/** Function; greaterThanFive
 * Function which takes narray as an input
 * will count the Occurance of the numbers of the Array which are Greater Than Five
 * 
 * array ex: [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]
 */



// Trial code
// let numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 10];
// let count = 0;

// for(i=0; i < numbers.length; i++){
//     const element = numbers[i];
//     // console.log(element);
//     if(element > 5){
//         // console.log(element + ": Greater than 5");
//         count = count + 1;
//     }
//     else{
//         // console.log(element + ": Not Greater than 5");
//     }
// }

// console.log(count);


// THE ACTUAL FUCTION-----------
function greaterThanFive(numbers){
    let count = 0;

    for(i = 0; i < numbers.length; i++){
        const element = numbers[i];

        if(element > 5){
            count++
        }  
    }

    return count;
}

let result = greaterThanFive([-1, 2, -3, 4, 5, 6, -7, 8, -9, 10]);
console.log(result);

let result2 = greaterThanFive([-1, 2, -3, 4, 5, 6, -7, 8, 9, -10, 11, 12, -14, 15])
console.log(result2);