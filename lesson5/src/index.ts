//Generic

//Generic classes
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}
const pair = new KeyValuePair<string, string>("key", "value");

//Generic functions or methods
function wrapInArray<T>(value: T) {
  return [value];
}
const numberArray = wrapInArray(1);
const stringArray = wrapInArray("1");

class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}
const myArray = ArrayUtils.wrapInArray(1);

//Generic interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface User {
  name: string;
}
interface Product1 {
  title: string;
}
function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}
const unknownRes = fetch("url");
const userRes = fetch<User>("url");
const productRes = fetch<Product1>("url");

//Generic
function echo<T extends number | string>(value: T): T {
  return value;
}
echo(1);
echo("1");
// echo(true); compilation error
class Person {
  constructor(public name: string) {}
}
class Customer extends Person {}
function echo1<T extends { name: string }>(value: T): T {
  return value;
}
echo1({ name: "tom", age: 10 });
echo1(new Customer("tom"));
// echo1({ age: 10 });compilation error

//extending generic classes
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
const findStore = new Store<Product>();
findStore.add({ name: "a", price: 100 });
findStore.find("name", "a");
findStore.find("price", 100);
// findStore.find("nonExistingProperty", 1); //compilation error

class CompressibleStore<T> extends Store<T> {
  compress() {}
}
const store = new CompressibleStore<Product>();

//restrict the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find2(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

//Fix the generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    console.log(category);
    return [];
  }
}

//the keyof Operator

//type mapping
type ReadonlyProduct = {
  readonly [K in keyof Product]: Product[K];
};
/**
 * above lines same as this one
  type ReadonlyProduct = {
    readonly name: string;
    readonly price: number;
}
 */
const readOnlyProduct: ReadonlyProduct = { name: "computer", price: 10000 };
type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};
const readOnyProduct1: ReadOnly<Product> = { name: "computer", price: 10000 };

//utility types
//refer https://www.typescriptlang.org/docs/handbook/utility-types.html
