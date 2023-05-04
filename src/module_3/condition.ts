// a type is dependent on another type

type a1 = string;
type a2 = a1 extends string ? string : null;
