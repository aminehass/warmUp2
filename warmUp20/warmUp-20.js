// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverseString (string) {
    var arr = string.split(' ');
    var str1 = '';
    for(var i = arr.length - 1; i >= 0; i--) {
        str1 = str1 + ' ' + arr[i];
    }
    return str1.slice(1);
}