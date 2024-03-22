/**
 * parameter - radian
 * keep 2 digits after decimal
 * return is degress
 * 1rad × 180/π
 * π 3.14159265359
 * 
 * ex: 10 rad to degree: 
 * 10 rad * 180/PI
 */

function radianToDegree(radian){
    const PI = 3.14159265359;
    const degree = (radian * 180/PI).toFixed(2);
    // console.log(degree);
    return degree;
}

// radianToDegree(1);
let result = radianToDegree(25);
console.log(result);
let result1 = radianToDegree(199);
console.log(result1);
let result2 = radianToDegree(10);
console.log(result2);

