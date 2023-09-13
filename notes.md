- typescript is a type system, just a syntax layer over javascript using type annotations to check for errors
- typescript compiler outputs plain js code. this is what is executed on the web browser
- compiling typescript can be done with `tsc` command. compile and execute combined can be done with `ts-node` command

- type of a value: reference to describe all methods, properties, etc. associated with a value
- types: string, number, boolean, Date, any Interface, etc.
- categories of types:
  - primitive types: numer, string, boolean, void, symbol, null, undefined
  - object types: functions, arrays, classes, objects

- type annotations and type inference:
  - variables, functions, objects
- annotation is specified by developers to describe type of a variable
  - annotation is used when
    - a function returns 'any' type value, example the JSON.parse() function
    - declaration and initialisation are on different lines
    - a variable is supposed to have a type that can't be inferred
  - variables can have annotation to specify multiple types with `|`
- inference is the same annotation but produced by the typescript compiler
  - when declaration and initialization are on same line, typescript will infer the type if not annotated by dev

- types in functions:
- annotation to specify type of arguments and return values of functions
- inference can only figure out return value type

- types in objects:
- look up about destructuring in JS

- types in arrays:
- infers values extracted from arrays and checks array usages for errors
- checks maps, reduce, forEach, etc. for errors
- allows multiple types in same array

- tuple is a list with specific order of values

- interfaces:
- new type with its own methods, properties, etc.
- an object needs to have all properties of an interface but can have additional properties