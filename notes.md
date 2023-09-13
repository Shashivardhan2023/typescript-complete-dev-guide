### 1. Getting started
- TypeScript is a type system, a syntax layer over JavaScript using type annotations to check for errors.
- TypeScript compiler outputs plain JS code. This is what is executed on the web browser.
- Compiling TypeScript can be done with `tsc` command. Compile and Execute combined can be done with `ts-node` command.

### 2. The Type System
- Type of a value: reference to describe all methods, properties, etc. associated with a value.
- Types: string, number, boolean, Date, any Interface, etc.
- Categories of Types:
  - Primitive types: numer, string, boolean, void, symbol, null, undefined
  - Object types: functions, arrays, classes, objects

### 3. Type Annotations
- Type annotations and Type inference:
  - variables, functions, objects
- Annotation is specified by developers to describe type of a variable. It is used when
  - a function returns 'any' type value, example the JSON.parse() function
  - declaration and initialisation are on different lines
  - a variable is supposed to have a type that can't be inferred
- Variables can have annotation to specify multiple types with `|`.
- Inference is the same as Annotation but produced by the TypeScript compiler.
  - When declaration and initialization are on same line, TypeScript will infer the type if not annotated by Dev.

### 4. Annotations with Functions and Objects
#### Functions:
- annotation to specify type of arguments and return values of functions
- inference can only figure out return value type

#### Objects:
- **TODO**: look up about destructuring in JS

### 5. Typed Arrays
- Infers values extracted from arrays and checks array usages for errors.
- Checks maps, reduce, forEach, etc. for errors.
- Allows multiple types in same array.

### 6. Tuples
- Tuple is a list with specific order of values.

### 7. Interfaces
- New type with its own methods, properties, etc.
- An object needs to have all properties of an Interface but can have additional properties as well.

### 8. Classes
- Blueprint to objects with fields and methods.
- Instance Method Modifiers
  - public: any method can call
  - private: only methods of this class can call
  - protected: only methods of this class and child classes can call

### 14, 15, 16. Express with TypeScript, Decorators
- **TODO**: Get some understanding of Express Library

### 17, 18. React, Redux Components with TypeScript
- **TODO**: Understand React and Redux