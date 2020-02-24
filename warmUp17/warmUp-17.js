/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

 function mysteryRange(string, n) {
     var arr = [];
     var arr1 = [];
     var arr2 = [];
     if(n === 0) {
         return [];
     }
     else if(n === 1) {
         return string;
     }
     else if(n < 100) {
         for(var i = 0; i < string.length; i++) {
            if(string[i] === 1) {
                arr.push(string[i] + string[i + 1]);
            }
        }
    }
    arr1 = arr.sort(function(a, b){return a - b});
    arr2[0] = arr1[0];
    arr2[1] = arr1[arr1.length - 1];
    return arr2;
 }