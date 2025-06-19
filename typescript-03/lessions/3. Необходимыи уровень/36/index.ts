{
  let num1: Number = new Number(5);
  let num2: number = 4;
  let num3 = Number(2);
  num1 = num2;
  // num2 = num1;
  console.log(typeof num1);

  const num4 = 5;
  const str4 = '5';
  const strNum1: string = num4.toString();
  const strNum2: number = +str4;

  interface Department {
    name: string;
    budget: number;
  }

  const department: Department = {
    name: 'web-dev',
    budget: 4444,
  };

  interface Project {
    name: string;
    projectBudget: number;
  }

  function transformDepartment(
    department: Department,
    amount: number
  ): Project {
    return {
      name: department.name,
      projectBudget: amount,
    };
  }

  // const mainProject: Project = {
  //   ...department,
  //   projectBudget: 3333,
  // };

  const mainProject: Project = transformDepartment(department, 4444);
}
