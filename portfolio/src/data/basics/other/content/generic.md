Generics allow you to create **reusable components, functions, and types** that work with multiple types while maintaining type safety. Like a **"placeholder"**.

## Basic Function

```javascript
// Need separate functions for each type
function getFirstString(items: string[]): string {
  return items[0];
}

function getFirstUser(items: User[]): User {
  return items[0];
}

// One function works for all types
function getFirst<T>(items: T[]): T {
  return items[0];
}

// Usage
const firstStr = getFirstString(["hello", "world"]);
const firstStr = getFirst(["hello", "world"]);
```

## React Component

```javascript
// One component works for all types
interface CardProps<T> {
  item: T;
  onClick: (item: T) => void;
  title: string;
}

// <T,> The comma tells TypeScript this is a generic, not JSX
const Card = <T,>({ item, onClick, title }: CardProps<T>) => (
  <div onClick={() => onClick(item)}>
    <h3>{title}</h3>
  </div>
);

// Usage
<Card item={user} onClick={handleUserClick} title={user.name} />
<Card item={product} onClick={handleProductClick} title={product.name} />

```

## State Hook

```javascript
// One hook works for all types
function useDataState<T>() {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  return { data, setData, loading, setLoading };
}

// Usage
const { data: user, setData: setUser } = useDataState<User>();
const { data: product, setData: setProduct } = useDataState<Product>();
```

## Simple API Hook

```javascript
// Type-safe API hook with async/await
function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result: T = await response.json();
      setData(result);
    };

    fetchData();
  }, [url]);

  return data; // Type is T | null
}

// Usage - full type safety!
const users = useApi<User[]>('/users'); // users is User[] | null
```
