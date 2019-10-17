let myArray = [100, "Landon", true];

for (let i = 0; i < myArray.length; i++) {
    console.log(`Index: ${i}: ${myArray[i]}`);
}

console.log("---");

myArray.forEach((value, index) => console.log(`Index: ${index}: ${value}`));