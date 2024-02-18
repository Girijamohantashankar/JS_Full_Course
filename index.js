//✅ 1. Print all the number 0 to 100

// for(let i = 0; i<=100; i++){
//     // console.log("number is = ", i);
//     if(i%2 == 0){ //print even number
//         console.log("Even Number is = ", i);
//     }
// }



// ✅ 2. game
// let gameNumber = 20;

// let userNumber=prompt("Gues the game Number : ");

// while(userNumber != gameNumber){
// userNumber=prompt("Try agin ");


// }console.log("congratulation you have enter write Number");


//✅ Strings 

// let str = "This is a normal string";
// let str1 = `This is a special template literal`;
// console.log(str1);

// let obj = {
//     item: "pen",
//     price: 200,
//     company: "girija"
// }
// console.log(`One ${obj.item}  price is ${obj.price} in company of ${obj.company} `); //template literal used



// ✅ \n, \t --> this escape charactor string is count in 1.

// console.log("This js\nfull course");
// console.log("This_js\tfull_course");


// ✅ String methods

// let str = "helo Girija";

// let newstr = str.toUpperCase();

// let newstr1 = str.toLowerCase();
// console.log(newstr);
// console.log(newstr1);
// let str3 = "    helo Girija   ";
// console.log(str3.trim());

// // ✅Slice methods
// let str4 = "12456789";
// console.log(str4.slice(1, 8));


// ✅Concatination methods
// let str5 = "girija";
// let str6 = "shankar";
// let str7 = "mohanta";

// let str8 = str5+ " " + str6+ " " + str7;

// console.log(str8);

// ✅Replace  methods

// let str9 = "Girija";
// console.log(str9.replace("G", "D"));
// console.log(str9.replace("Girija", "Dipu"));

// ✅CharAT  methods
// let str10 = "Girija shankar";
// console.log(str10.charAt(0));

// Q2 Example user enter full name: girija, add also length, output: @girija5

// let username = prompt("Enter your fullName ");
// let userlength =  username.length;

// console.log("@" + username + userlength);


// ✅ Arrays in Javascript ✅

// let arr = [78, 12, 10, 8, 4];
// console.log(arr);
// console.log(arr.length);

// ✅ For loop in array
// let arr11 =  ["giri", "ja", "shan", "kar", "moha", "nta"];

// for(let i=0; i<arr1.length; i++){
//     console.log(arr11[i]);
// }   

// for(let names of arr11){
//     console.log(names.toUpperCase());
// }


// ✅push methods - > add in the end of the array

// let arr12 = [1,4,5,2,6];

// arr12.push(10);
// console.log(arr12);

// ✅ pop methods -> remove in the end of the array

// arr12.pop();
// console.log(arr12);


// ✅tostring -> to convert the array in a string [❌-> Its not change the original array].

// console.log(arr12.toString());

// ✅ concat method - > to join the two array

// let arr13 = [12, 45, 25, 12,78,46,27];
// let arr14 = [21, 54, 65, 87, 98, 32];

// let arr15 = arr13.concat(arr14);
// console.log(arr15);

// ✅ Unshit -> add the element in 1st
// let arr16 =  [1,2,3,5,6,7];

// arr16.unshift(9);
// console.log(arr16);


// ✅ shit -> remove the element in 1st
// let arr17 =  [1,2,3,5,6,7];

// arr17.shift(9);
// console.log(arr17);

// ✅ slice -> slice means a part of an array ❌-> its change original array;

//  let arr18 = ["girija", "shanakar", "mohnata"];
//  console.log(arr18.slice(1, 3));

// ✅ splice() ->ite take 3 arguments for add and delete the elements.

// let arr19 = [1,2,3,4,5,6];
// arr19.splice(1,0,10,20,40);  
// // argumnet type take = [add(which place to add item), delete(which element delete), addItems]
// console.log(arr19);

