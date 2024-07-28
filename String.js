// function sum(a, b) {
//     return a * b;
// }
// //console.log(`multiply of 10 * 8 is ${sum(10,8)}`);

// let myName = "rishabh";

// console.log(myName)


// myName[0] = "b"
// myName = "bajpai"

// console.log(myName)




let str = 'Widget with id';

// console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

// console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)


// console.log('A'.codePointAt(0));


//let arr = [10,20,30];
//console.log(arr.at(-1))


// let users = [
//     {id: 1, name: "rishabh"},
//     {id: 2, name: "bajpai"},
// ]
// let user = users.find(item => item.id == 2)
// console.log(user.name);


let arr = [ 1, 2, 15, 20, 30, 50 ];

// the method reorders the content of arr
// arr.sort();

// console.log(arr)


let result = arr.reduce((sum, current) => sum + current , 0);
console.log(result)

console.log(Array.isArray(arr))

