const Employee = require("./employee.js")

//For ES6 compilers following code will work:
//import { getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility } from './employee';
//import Employee from './employee';

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + Employee.getCadre());
  console.log('Tax: ' + Employee.calculateTax());
  console.log('Benefits: ' + Employee.getBenefits());
  console.log('Bonus: ' + Employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + Employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);