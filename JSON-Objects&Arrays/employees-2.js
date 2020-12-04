const employees = require("./employees-array.json");

const employee = employees[0];

// 1. Declare a function
// function summary()
// 2. Turn the variable into an argument.
// const newObj = {
// 	lastName: employee.lastName,
// 	jobTitle: employee.jobTitle,
// };
// 3. Turn console.log into a return.
// console.log(newObj);

const summarize = (employee) => {
	const newObj = {
		lastName: employee.lastName,
		jobTitle: employee.jobTitle,
	};
	return newObj;
};

// How to run above.
// console.log(summarize(employees[3]))

const summaryOfEmployees = employees.map(summarize);
console.log(summaryOfEmployees);

/* Helper function returns true if last name is longer than 5 characters. */
const isLastNameLong = (employee) => employee.lastName.length > 8;

const emps2 = employees.filter(isLastNameLong);

function capTitle(employee) {
	return {
		...employee, // Spread operator takes the array that is passed through and pastes it into the function.
		jobTitle: employee.jobTitle.toUpperCase(),
	};
}

const emps3 = emps2.map(summarize);
const emps4 = emps3.map(capTitle);
console.log(emps4);

const empsFinal = employees.filter(isLastNameLong).map(summarize).map(capTitle);
console.log(empsFinal);
