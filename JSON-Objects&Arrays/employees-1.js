const employees = require("./employees-array.json");

const employee = employees[0];

console.log(employee.jobTitle);

// To get all the keys
console.log(Object.keys(employee));

for (let k of Object.keys(employee)) {
	console.log(k);
	console.log(employee[k]);
}

/* Returns the birthdate */
const birthDate = (employee) => employee.birthDate;
console.log(birthDate(employee));

/* Returns job area */
const jobArea = (employee) => employee.jobArea;

console.log(jobArea(employee));

/* Function that receives a param in the form of a key that returns corresponding value */
const findValue = (key) => employee[key];
console.log(findValue("jobArea"));
