// For each name person console.log("{name} is {age} years old!" where name and age are the keys name and age respectivly.

const fs = require("fs");

fs.readFile("data.json", "utf8", (err, data) => {
  if (err) throw err;
  let output = JSON.parse(data);
  output.forEach((person) =>
    console.log(`${person.name} is ${person.age} years old!`)
  );
});
