//What is Object-Oriented programming

//Create Objects
//A class is a blueprint for creating objects

class Acount {
  //   readonly id: number; //read-only property
  //   owner: string;
  //   private _balance: number;
  nickname?: string; //optional property

  constructor(
    //pramameter properties
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  deposit(acount: number): void {
    if (acount <= 0) {
      throw new Error(`invalid acount ${acount}`);
    }
    this._balance += acount;
  }

  get balance(): number {
    return this._balance;
  }
  set balance(balance: number) {
    if (balance < 0) {
      throw new Error("Invalid value");
    }
    this._balance = balance;
  }
}

const tom = new Acount(1, "tom", 1000);
tom.deposit(99);
try {
  tom.deposit(0);
} catch (e) {
  //   console.log(e);
}
console.log(tom);

console.log(typeof tom); //object
console.log(tom instanceof Acount); //true

//read-only and optional properties

// access control keyword

//geters and setters
console.log(tom.balance);
console.log(`setter return is ${(tom.balance = 1000)}`);

//index signatures
class SeatAssignment {
  //index signature property
  [seatNumber: string]: string;
}
const seats = new SeatAssignment();
seats.A1 = "tom";
seats.A2 = "mosh";
seats["B1"] = "john";

//static members
class Ride {
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
let ride2 = new Ride();
ride1.start();
ride1.start();
ride1.start();
// ride1.stop();
ride1.stop();
ride2.start();
ride2.start();
// ride2.stop();

console.log(`ride1 active rides is ${Ride.activeRides}`);

// inheritance
class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  protected walk() {
    console.log(`${this.fullName} is walking`);
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  takeTest() {
    this.walk();
    console.log(`${this.fullName} is taking a test`);
  }
}

const student = new Student(1, "tom", "green");
// student.walk();
student.takeTest();

// method overriding
class Teacher extends Person {
  override get fullName(): string {
    return `doctor ${super.fullName}`;
  }
}

const teacher = new Teacher("quanquan", "dog");
console.log(teacher.fullName);

//polymorphism

class Principal extends Person {
  override get fullName(): string {
    return `principal ${super.fullName}`;
  }
}

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

printNames([
  new Student(1, "tom", "green"),
  new Teacher("Jackson", "John"),
  new Principal("Marry", "Jon"),
]);

//open close principle
//class should be open for extension and closed for modification

//private vs protected members

//abstract classes and methods

abstract class Shape {
  constructor(public color: string) {}
  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }
  override render(): void {
    console.log("draw a circle");
  }
}

//interface is only used in typescript for type checking
abstract class Calendar {
  constructor(public name: string) {}

  abstract addEvent: void;
  abstract removeEvent: void;
}

//ICalendar
console.log("ICalendar");

interface ICalendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements ICalendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented.");
  }
}
