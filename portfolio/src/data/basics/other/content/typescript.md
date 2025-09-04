## Setup and Configuration

```
npm create vite@latest my-app -- --template react-ts
```

- tsconfig.json Configuration

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## Basic TypeScript Concepts for React

- Basic Types

```javascript
// Primitive
const name: string = "Lin";
const age: number = 9;
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const digits: Array<number> = [4, 5, 6];
const letters: Array<string> = ["a", "b", "c"];

// an array of arrays of strings and numbers
const nestedStrings: string[][] = [["N", "E"], ["S"], ["T", "E", "D"]];
const nestedNumbers: Array<number[]> = [[1, 2], [3]];

// Objects
interface User {
  name: string;
  age: number;
  email?: string;
}

const user: User = {
  name: "Lin",
  age: 9,
};

const users: User[] = [
  { name: "W", age: 10, email: "W@gmail.com" },
  { name: "E", age: 12 },
];

// one line
const employees: { name: string, age: number }[] = [
  { name: "Charles", age: 30 },
  { name: "Diana", age: 25 },
];
```

- Union Types and Literals

```javascript
type Status = "loading" | "success" | "error";
type Theme = "light" | "dark";

interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  size: "sm" | "md" | "lg";
}
```
