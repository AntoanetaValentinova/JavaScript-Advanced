class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, Salary, Position, Department) {
        [username, Salary, Position, Department].forEach(param => {
            if (param === '' || param === undefined || param === null) {
                throw new Error('Invalid input!');
            }
        })
        if (Salary < 0) {
            throw new Error('Invalid input!');
        }
        let currentEmployee = {
            username,
            Salary,
            Position
        }
        let currentDepartment = this.departments.find(d => d.name === Department);
        if (currentDepartment === undefined) {
            let newDepartment = {
                name: Department,
                employees: [currentEmployee],
            }
            this.departments.push(newDepartment);
        } else {
            currentDepartment.employees.push(currentEmployee);
        }
        return `New employee is hired. Name: ${username}. Position: ${Position}`
    }

    bestDepartment() {
        this.departments.forEach(department=>{
            let avg=0;
            department.employees.forEach(e=>avg+=e.Salary);
            avg/=department.employees.length;
            department.averageSalary=avg;
        });
        this.departments.sort((d1,d2)=>d2.averageSalary-d1.averageSalary)
        let bestDepartment=this.departments[0];
        let employees='';
        bestDepartment.employees.sort((e1,e2)=>{
            let result=e2.Salary-e1.Salary;
            if (result===0) {
                result=e1.username.localeCompare(e2.username);
            }
            return result;
        })
            .forEach(e=>{
            employees+=`${e.username} ${e.Salary} ${e.Position}\n`
        })
        return `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary.toFixed(2)}\n${employees.trim()}`;
    }
}

let c = new Company();
c.addEmployee("", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
