var read = require('readline-sync')
var input = read.question("Enter data in dd/mm/yyyy format:")
var year = 2023
input = input.split('/')
console.log(input)
console.log("Age in years:"+(year-parseInt(input[2])))
console.log("Age in months:"+(year-parseInt(input[2]))*12)
console.log("Age in weeks:"+((year-parseInt(input[2]))*12)*4)
console.log("Age in days:"+(year-parseInt(input[2]))*365)
console.log("Age in hours:"+(year-parseInt(input[2]))*8760)
if(parseInt(input[2])%400==0 && parseInt(input[2])%4==0 && parseInt(input[2])%100!=0)
{
    console.log("Leap Year")
}
else
{
    console.log("Not a leap Year")
}