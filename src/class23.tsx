type Age<T> = T extends string ? string : unknown;

let a: Age<string>;
let b: Age<number>;

//예제 1
type FirstItem<T> = T extends any[] ? T[0] : any;

let c: FirstItem<string[]>;
let d: FirstItem<string>;

type Person<T> = T extends infer R ? R : unknown;

type E = Person<string>;

type 타입추출<T> = T extends (infer R)[] ? R : unknown;

type F = 타입추출<string[]>;

type G = ReturnType<() => void>;
