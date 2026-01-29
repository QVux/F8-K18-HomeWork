// Lesson 1

interface PartTimeI {
    id: number;
    name: string;
    salary: number;
    hoursWorked: number;
}
const partTime: PartTimeI = {
    id: 2,
    name: "Binh",
    salary: 20,
    hoursWorked: 40
};

const updatePartTime: PartTimeI = {
    ...partTime,
    hoursWorked: 45
};

console.log(updatePartTime)

// Lesson 2

interface Employee {
    id: number;
    name: string;
    salary: number;
    getSalary(): number;
}

class FullTimeEmployee implements Employee {
    constructor(
        public id: number,
        public name: string,
        public salary: number
    ) {}

    getSalary(): number {
        return this.salary;
    }
}

class PartTimeEmployee implements Employee {
    constructor(
        public id: number,
        public name: string,
        public salary: number,
        public hoursWorked: number
    ) {}

    getSalary(): number {
        return this.salary * this.hoursWorked;
    }
}

const calculateTotalSalary = (employees: Employee[]): number => {
    let sum = 0;

    for (const employee of employees) {
        sum += employee.getSalary();
    }

    return sum;
};

const fullTimeEmployee = new FullTimeEmployee(1, "Quang", 15000);
const partTimeEmployee = new PartTimeEmployee(2, "Vu", 3000, 4);

console.log(calculateTotalSalary([fullTimeEmployee, partTimeEmployee]));
