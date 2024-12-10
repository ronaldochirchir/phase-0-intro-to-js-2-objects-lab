// Write your solution in this file!
let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with updated key-value
    return { ...employee, [key]: value };
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Directly modify the employee object
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object without the specified key
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Directly delete the key-value pair from the employee object
    delete employee[key];
    return employee;
  }
  