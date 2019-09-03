class App {
  logNumber(a: number) {
    console.log(a);
  }
}

let app = new App();
app.logNumber(9999999999999999);

// Boolean, numbers & Strings
let isDone: boolean = false;
let goodNumber: number = 6;
let color: string = "blue";

// Arrays
let list: Array<number> = [1, 2, 3];

// Enums
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Any (try not to use)
let notSure: any = 4;

// Interfaces
interface LabelledValue {
  label: string;
}
function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}
let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);

// Read only properties
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

// Function Types
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}

// Klassen Sichtbarkeit
class BachelorModule {
  private instructor: string;
  private title: string;
  private credits: number;
  constructor(title: string) {
    this.title = title;
  } }
  let webApp = new BachelorModule("WebApp");
  // console.log(webApp.title); // Error

// Getter / Setter (also in ES6)
class BachelorModule2 {
  private title: string;
  constructor(title: string) { this.title = title;
  }
  get Title(): string {
    return this.title
  }
}
let webApp2 = new BachelorModule2("WebApp");
console.log(webApp2.Title); // Ok

// Generics
function identity<T>(arg: T): T { return arg;
}
let out = identity<string>("Hello");
console.log(out);