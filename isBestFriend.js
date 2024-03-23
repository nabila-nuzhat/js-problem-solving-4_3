// function isBestFriend
// input parameter- 2 objects
// if best friend of one another then
// return true


function isBestFriend(object1, object2){
    if(object1.name == object2.friend &&    object2.name == object1.friend){
        return true;
    }else{
        return false;
    }
}


// without assigning a storage variable calling the function directly using object parameter value: 
// console.log(functioname(parameter value))
console.log(isBestFriend(
    {name: "abul", friend: "babul"},
    {name: "babul", friend: "abul"},
));
console.log(isBestFriend(
    {name: "john", friend: "don"},
    {name: "alex", friend: "don"},
));

