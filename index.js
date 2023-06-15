// Iteration 1: Names and Input
const hacker1 = 'Chubaka';
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Captain Kurk';
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

// Checks if hacker1 name is longer
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length}.`); 
}
// Checks if the names of both are equal
else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Logs hackers2 name length, if this one is the longest
 else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }



// Iteration 3: Loops

// 3.1
let finalName = '';
// Loops the string
for (let i = 0; i < hacker1.length; i++) {
// sets the name to all uppercase
  finalName += hacker1[i].toUpperCase() + " ";
  
 
}
  console.log(finalName.trim());




// 3.2

  

let rev = '';

// reverses the name
for (let j = hacker2.length - 1; j >= 0; j--) {
 rev += hacker2[j];
  
}

console.log(rev);


// 3.3

let a = '';
let b = '';

a = hacker1.charAt(0);
b = hacker2.charAt(0);

// Checks alphabetical order 
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
}

else if (hacker1 === hacker2){
  console.log('What?! You both have the same name?');

}

else { 
console.log("Yo, the navigator goes first, definitely.");
}


//Bonus 1 without counting "et"

1.1 const longText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

//Counts the number of words in a string
const words = longText.split(' ').length;

console.log(words);