// ✅Find the average number of the give array [12,14,15,46,41,21]

// let arr = [12,14,15,46,41,21];

// let arr_length = arr.length;
// let sumarr = 0;
// for(let i=0; i<arr.length; i++){
//     sumarr += arr[i];
// }
// let avarege = sumarr/arr_length;
// let newavarege = Math.round(avarege);
// console.log(newavarege);    



// ✅ for given array with price of 5 items -> [250, 200, 300, 400, 500], all items have an offer of 10% off on them


// let item = [250, 200, 300, 400, 500];
// for(let i = 0; i<item.length; i++){
//     let offer= item[i]/10;

//     item[i] -= offer;
// }
// console.log(item);


// ✅ create an array to store companies -. "Blommber", "microsoft", "Uber", "Google", "IBM", "Netflix";

// ❌Remove the first company from the array.
 let companies = ["Blommber", "microsoft", "Uber", "Google", "IBM", "Netflix"];
//  companies.shift();
//  console.log(companies);

//  ❌Remove Uber and  Add ola in its place
// companies.splice(2 , 1, "Ola")
// console.log(companies);

// ❌ Add Amazon at the end
companies.push("Amazon");
console.log(companies);
