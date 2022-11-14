const read = require('readline-sync')
var n=4;
var names=[];
for(var i=0; i<n; i++){
    names[i] = read.question("Add Passenger name : ");
}
// for (let j=0; j<n; j++){
//     console.log(names[j]);
// }

// // sorting assending-----------------------
console.log();
console.log("Assending order:");
for(let i=0; i<n; i++){
   
    for(let j=i+1; j<n; j++){
        if(names[i] >names[j]){
            let temp=names[i];
            names[i]=names[j];
            names[j]=temp;

        }   
    }
 }
for (let j=0; j<n; j++){
    console.log(names[j]);
}

// // // sorting decending-----------------------
console.log();
console.log("Decesending order:");
for(let i=0; i<n; i++){
   
    for(let j=i+1; j<n; j++){
        if(names[i] <names[j]){
            let temp=names[i];
            names[i]=names[j];
            names[j]=temp;

        }   
    }
 }
 for (let j=0; j<n; j++){
    console.log(names[j]);
}

// // searching -------------------------------
console.log();
var count = 0;
let searchname = read.question("Name to be searched: ")
    for(var i=0;i<n;i++){
        if(searchname==names[i]){
            console.log("The searched name is in the array", names[i]);
            count+=1;       
    }}
    if(count == 0)
    console.log("The entered name is not in array");

// // length of elements-----------------------
console.log();
console.log("Length of elemenst in the array")
var count1=0;
for(let i= 0; i<n; i++){
    a=names[i];
    count1=0;
    for(let j=0; a[j]!=undefined; j++){
        count1++;
    }
    console.log(names[i]+": "+count1);
}

// split names-------------------------------
console.log();
console.log("split passenger name ");
for (let i = 1; i <= n; i++) {
  let name = names[i - 1];
  let nameArray = name.split(" ");
  console.log(`${nameArray}`);
}

// Duplicate---------------------------------
console.log()
var dupli=[];
console.log("Duplicate Name:")
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++)
    {
        if(names[i]==names[j])
        {
            dupli[i]=names[i];
        }
    }
}
console.log(dupli)


