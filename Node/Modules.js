// Create a node program that requires the os module.
// Look through the os module documentation and print the following 3 pieces of information:
// The amount of free memeory in the system.
// The network interfaces information.
// The user information for the system.

const os = require("os");

const getInfo = () => {
  let arr = [console.log(os.freemem(), os.networkInterfaces(), os.userInfo())];
  return arr;
};

getInfo();

// Make a function that will retrieve all of the above pieces of information and return that information in an array.

// Done with wrapping with bracket and returning.

// Call that function and set the returned value to an variable and console.log the variable.
