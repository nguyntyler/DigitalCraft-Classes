// Using the array below, create a new array of just the names using mape in node.js.
let people = [
  { name: "batman", powers: "none" },
  { name: "iron man", power: "rich" },
  { name: "The Hulk", powers: "being green" },
  { name: "Superman", powers: "Being an Alien" },
];

let names = people.map((person) => {
  return person.name;
});

console.log(names);
