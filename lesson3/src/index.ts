//type alias

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "mosh",
  retire: (date: Date): void => {
    console.log(date);
  },
};
// employee.id = 2;
employee.retire(new Date());

let employee2: Employee = {
  id: 2,
  name: "tom",
  retire(date: Date) {
    console.log(date);
  },
};

// Union Types

function kgToLbs(weight: number | string) {
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// Intersection types
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

//this line means that the UIWidget is Draggable and also Resizable
type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
  drag() {},
  resize() {},
};

//Literal Types
let quatity: 50 | 100 = 100;
// quatity = 12; error here
type Quantity = 50 | 100;
type Metric = "cm" | "inch";

//Nullable Types
function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toLocaleLowerCase());
  }
  console.log("Hola!");
}

greet(null);
greet(undefined);

//Optional chaining
console.log("Optional chaining");
type Customer = {
  birthday?: Date;
};
function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer) {
  console.log(customer.birthday);
}
customer = getCustomer(1);
if (customer) {
  console.log(customer.birthday);
}
//Optional property access operator
console.log("Optional property access operator");
console.log(customer?.birthday?.getFullYear());
//Optional element access operator
//customers?.[0]

//Optional call
let log: any = null;
log?.("a");

//Null Coaelscing Operator
//Falsy values are (undefined,null,'',false,0)
let speed: number | null = null;
let ride = {
  //speed: speed || 30, //this means if speed is falsy then speed will be 30 else speed will be as it be
  //so above there may be a problem when we need speed to be 0,but actually it will be treated as a falsy value,so the actual value will be 30 as default
  speed: speed ?? 30, //this means if speed is 「null or undefined」 ,speed will be as it be ,otherwise it will be 30
};

//Type Assertions

// let phone = document.getElementById("phone") as HTMLInputElement;
let phone = <HTMLInputElement>document.getElementById("phone");
phone.value;

//The unknow Type
//The never type
//never type means that the function never return
function processEvents(): never {
  while (true) {}
}

function reject(message: string): never {
  throw new Error(message);
}

// reject("11");
processEvents();
//the next line is unreachable code
console.log("hello world");
