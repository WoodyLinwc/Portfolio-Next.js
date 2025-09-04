- use Interface when **defining object shapes**, **declaration merging**, **building extensible APIs `extends`**, **Working with classes `implement`**, **React Component Props**
- use Type when **creating union types**, **aliasing primitive types**,**conditional and mapped types**

## Interface

- Supports **declaration merging** (multiple declarations combine):

```javascript
interface User {
  id: number;
  name: string;
}

interface User {
  email: string;
}

// Result: User has id, name, and email
const user: User = {
  id: 1,
  name: "John",
  email: "john@example.com", // This is required due to merging
};
```

- Uses `extends` keyword:

```javascript
interface BaseUser {
  id: number;
  name: string;
}

interface AdminUser extends BaseUser {
  permissions: string[];
  role: "admin";
}

// Multiple inheritance
interface SuperAdmin extends BaseUser, AdminUser {
  superPower: boolean;
}
```

## Type

- Perfect for **union types**

```javascript
type StringOrNumber = string | number;
type Status = "loading" | "success" | "error";
type Theme = "light" | "dark" | "auto";

// Complex unions
type ApiResponse<T> =
  | { success: true, data: T }
  | { success: false, error: string };
```

- Can **alias** any type, primitives

```javascript
type UserId = number;
type UserName = string;
type IsActive = boolean;

// Usage
const userId: UserId = 123;
const userName: UserName = "John";
```

- Full support for **computed properties**, dynamically generating property names

```javascript
type DynamicKeys = {
  [K in 'a' | 'b' | 'c']: string;
};
// Result: { a: string; b: string; c: string; }

// With template literals
type EventHandlers = {
  [K in `on${Capitalize<'click' | 'hover' | 'focus'>}`]: () => void;
};
// Result: { onClick: () => void; onHover: () => void; onFocus: () => void; }

```
