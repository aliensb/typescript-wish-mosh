//Decorators

// //Class Decorators
// function Component(constructor: Function) {
//   console.log("component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDOM = () => {
//     console.log("Inserting the component in the DOM");
//   };
// }

//Parameterized Decorators

type ComponentOptions = {
  selector: string;
};
function Component(value: ComponentOptions) {
  return (constructor: Function) => {
    // console.log(constructor.prototype);
    console.log(`component decorator called value is ${value.selector}`);
    constructor.prototype.options = value;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log("Inserting the component in the DOM");
    };
  };
}

@Component({ selector: "#my-id" })
@Pipe
class ProfileComponent {}

//Decorator Composition
function Pipe(constructor: Function) {
  console.log("Pipe decorator called");
  constructor.prototype.pipe = true;
}

//Method Decorator
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("Before");
    original.call(this, ...args);
    console.log("After");
  };
}

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original!.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}

class Person {
  constructor(private fisrtName: string, private lastName: string) {}

  @Capitalize
  get fullName() {
    return `${this.fisrtName} ${this.lastName}`;
    // return 0;
  }
  @Log
  say(message: string) {
    console.log(`person says ${message}`);
  }
}

const person = new Person("tom", "green");
person.say("Hi there");
console.log(person.fullName);

//Accessor Decorators

//Property Decorators
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
        if (newValue.length < length) {
          throw new Error(`[${propertyName}] should be as least ${length}`);
        }
        value = newValue;
      },
    };
    Object.defineProperty(target, propertyName, descriptor);
  };
}
class User {
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}

const user = new User("1234");
//user.password = "123"; //error goes here

//Parameter Decorators
type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};
const wathedParamters: WatchedParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
  wathedParamters.push({
    methodName,
    parameterIndex,
  });
}
class Vehicle {
  move(@Watch speed: number) {}
}

// const vehicle = new Vehicle();
// vehicle.move(100);

console.log(wathedParamters);
