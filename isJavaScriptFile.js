/**
 * parameter- a string data which is a file name eg. index.js
 * if the file (input parameter) is a JS file return - True
 * else return false
 * 
 * endsWith method()
 */

function isJavaScriptFile(fileName){
    // console.log(fileName);
    if (fileName.endsWith('.js')){
        return true;
    }
    else{
       return false;
    }
    // return 
}

// ex trial:
// isJavaScriptFile("index.js")

let result1 = isJavaScriptFile("app.js");
console.log(result1);
let result2 = isJavaScriptFile("App.jsx");
console.log(result2);
let result3 = isJavaScriptFile("index.html");
console.log(result3);


// Alternate: (nested if)
// check if length - x = index of the string
// lastIndex = length - 1 --------- s
// lastIndex - 2 =  --------- j
// lastIndex - 3 =  --------- .

/**
 * if(str[str.length-1] =='s'){
        if(str[str.length-2] == 'j'){
            if(str[str.length-3] == '.')
            return true
        }
} 
    return false

 */
