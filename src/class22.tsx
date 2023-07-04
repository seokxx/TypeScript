// let obj = { name: "hong", age: 20 };
// console.log(Object.keys(obj));

// interface Person {
//   [key: number]: number;
// }

// type PersonKeys = keyof Person;
// let a: PersonKeys = 123;

// type Car = {
//   color: boolean;
//   model: boolean;
//   price: boolean | number;
// };

// type TypeChanger<T> = {
//   [key in keyof T]: string;
// };

// type 새로운타입 = TypeChanger<Car>;

// let obj2: 새로운타입 = {
//   color: "red",
//   model: "kia",
//   price: "300",
// };

// type Bus = {
//   color: string;
//   model: boolean;
//   price: number;
// };

// type Mapping<T> = {
//   [key in keyof T]: string | number;
// };

// type newType = Mapping<Bus>;

// let obj3: newType = {
//   color: "red",
//   model: "kia",
//   price: "300",
// };

// type Bus2 = {
//   color: string;
//   model: boolean;
//   price: number;
// };

// type Mapping2<T, T2> = {
//   [key in keyof T]: T2;
// };

// type newType2 = Mapping2<Bus2, boolean>;
// type newType3 = Mapping2<Bus2, string[]>;
