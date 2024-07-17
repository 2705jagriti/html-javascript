const marvel = ["ironman", "thor", "hulk"];
const dc = ["superman", "batman", "wonder women"];
const indian = ["shaktiman", "bheem", "raju"];
// marvel.push(dc);
// console.log(marvel[3]);
// console.log(marvel.length);

// xxxxxxxxxxx concat can combine only two array and spred can add many at once
let newn1 = marvel.concat(dc);
// console.log(newn1);
let newn2 = [...marvel, ...dc, ...indian];
// console.log(newn2);
const another_array = [1, 2, 3, [, 4, 5, 6, [7, 8, 9]]];
const realArray = another_array.flat(1);
// console.log(realArray);
console.log(Array.from("jagriti"));
