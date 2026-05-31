const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },

  { id: 4, name: 'Emma Davis', age: 32, department: 'IT', salary: 55000 },
  { id: 5, name: 'Liam Wilson', age: 26, department: 'Marketing', salary: 40000 },
  { id: 6, name: 'Olivia Brown', age: 31, department: 'Sales', salary: 52000 },
  { id: 7, name: 'Noah Martinez', age: 38, department: 'Finance', salary: 65000 },
  { id: 8, name: 'Sophia Garcia', age: 29, department: 'HR', salary: 48000 },
  { id: 9, name: 'James Lee', age: 34, department: 'IT', salary: 70000 },
  { id: 10, name: 'Charlotte Taylor', age: 27, department: 'Marketing', salary: 42000 },

  { id: 11, name: 'Benjamin Clark', age: 40, department: 'Operations', salary: 58000 },
  { id: 12, name: 'Mia Rodriguez', age: 25, department: 'Sales', salary: 38000 },
  { id: 13, name: 'Ethan Lopez', age: 33, department: 'IT', salary: 62000 },
  { id: 14, name: 'Amelia Hernandez', age: 36, department: 'Finance', salary: 68000 },
  { id: 15, name: 'Lucas Young', age: 39, department: 'Management', salary: 80000 },
  { id: 16, name: 'Harper King', age: 24, department: 'Intern', salary: 20000 },
  { id: 17, name: 'Alexander Wright', age: 41, department: 'Operations', salary: 60000 },
  { id: 18, name: 'Evelyn Scott', age: 30, department: 'HR', salary: 50000 },
  { id: 19, name: 'Daniel Green', age: 32, department: 'IT', salary: 66000 },
  { id: 20, name: 'Grace Adams', age: 26, department: 'Marketing', salary: 43000 }
];


function displayEmployees(){
    const totalEmployess = employees.map(employee=> `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('')
    document.getElementById('employeeDetailss').innerHTML = totalEmployess
}    

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}
