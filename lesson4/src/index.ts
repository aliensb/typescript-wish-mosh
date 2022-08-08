//What is Object-Oriented programming

//Create Objects
//A class is a blueprint for creating objects

class Acount {
  id: number;
  owner: string;
  balance: number;

  constructor(id: number, owner: string, balance: number) {
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(acount: number): void {
    if (acount <= 0) {
      throw new Error(`invalid acount ${acount}`);
    }
    this.balance += acount;
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
