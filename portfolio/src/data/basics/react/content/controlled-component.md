-   **Controlled components**: Form input value is **controlled by React state**.
-   **Uncontrolled components**: Form input value is **controlled by DOM (use refs)**.

**Single Source of Truth**: React state becomes the source of truth for form data.

```javascript
import { useState } from "react";

function ControlledInput() {
    const [value, setValue] = useState("");

    return (
        <input
            type="text"
            value={value} // value comes from state
            onChange={(e) => setValue(e.target.value)} // state updates on change
        />
    );
}
```

-   Use **uncontrolled components** for simple forms or when integrating with **non-React libraries**

```javascript
import { useRef } from "react";

function UncontrolledInput() {
    const inputRef = useRef();

    const handleSubmit = () => {
        alert(inputRef.current.value); // read value directly from DOM
    };

    return (
        <>
            <input type="text" ref={inputRef} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );
}
```
