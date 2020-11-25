const fs = require("fs");

let visits = JSON.parse(fs.readFileSync("./visits.json", "utf8"));
console.log(visits);

const addVisit = (address) => {
  console.log(`A visitor has come in from: [${address}]`);
  let newVisit = { address: address, time: new Date().getTime() };
  visits = [...visits.filter((visit) => visit.address !== address), newVisit];
  // Filters items we don't need. Only get from one address.
  console.log(visits);
};

module.exports = addVisit;
