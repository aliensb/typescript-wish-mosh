//le
let sales: number = 123_456_789;
let course: string = "typescript";
let isPublished: boolean = true;

let sales1 = 123_456_789;
let course1 = "typescript";
let isPublished1 = true;

let level;
level = 1;
level = "a";

function render(document: string): number {
  console.log(document);
  return 0;
}

let numbers: number[] = [1, 3, 5, 6];

//tupple
let user: [number, string] = [1, "tom"];
let user1: [number, string] = [2, "jerry"];
type User = [number, string];

let user2: User;
user[0] = 0;
user[1] = "jeu";

//enums
const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small = 100,
  Medium,
  Large,
}

let mySize: Size = Size.Large;

let yourSize: Size;
yourSize = Size.Medium;
console.log(`you size is ${yourSize}`);

console.log(Size.Small, Size.Medium, Size.Large);

//functions
function calculateTax(income: number, taxYear?: number): number {
  //this line means that if we dont provice taxYear,then
  //taxYear will be undefine,then taxYear will use the default
  //value as 2020
  if ((taxYear || 2020) < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax(1000, 2011);
calculateTax(90_000, 2022);

//in this function ,if we provide taxYear ,the default value 2020 will be overide
// and if we dont provide taxYear ,the default value 2020 will be used
function calculateTax2(income: number, taxYear = 2020): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income * 1.3;
}

calculateTax2(1000);
calculateTax2(90_000, 2022);
// const calculateHousePrice:number=>number

//objects

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "mosh",
  retire: (date: Date): void => {
    console.log(date);
  },
};
// employee.id = 2;
employee.retire(new Date());
