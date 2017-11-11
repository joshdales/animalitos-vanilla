var name = 'leigh';

const first_name = 'leigh'; //This cannot be changed Constant
// first_name = 'Josh' will not work becuase the Constant has already been defined
let count = 0; //This is a constant that can be changed

count = 2;

console.log('Hello ' + name);
console.log(`Hello ${name}`); // New quote that can string interpilate

class Song {
  // Same as initialize in ruby
  constructor(name, year) {
    //@name = name
    this.name = name;
    this.year = year;
  }
}

const hit = new Song('Backstreet Bots', 2001);
console.log(hit.name);

const numbers = [1, 2, 3, 4, 5]
numbers.forEach((number) = {
  console.log(number);
})

numbers.forEach((number) => {
  console.log(numbers);
}
