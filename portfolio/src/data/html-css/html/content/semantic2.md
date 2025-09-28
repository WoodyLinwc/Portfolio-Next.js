## Forms

- form action method, fieldset, legend
- **label for**, **input type id name placeholder**
- button type

```html
<form action="submit" method="post">
  <fieldset>
    <legend>Personal Information</legend>

    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" required />

    <input type="number" min="0" max="100" step="1" />
    <input type="search" placeholder="Search..." />
  </fieldset>

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

- checkbox, radios

```html
<!-- Checkboxes -->
<label>
  <input type="checkbox" name="interests" value="sports" /> Sports
</label>
<label> <input type="checkbox" name="interests" value="music" /> Music </label>

<!-- Radio buttons -->
<label> <input type="radio" name="gender" value="male" /> Male </label>
<label> <input type="radio" name="gender" value="female" /> Female </label>
```

- label, select, option value

```html
<label for="country">Country:</label>
<select id="country" name="country">
  <option value="">Choose a country</option>
  <option value="us">United States</option>
  <option value="ca">Canada</option>
  <option value="uk">United Kingdom</option>
</select>
```

There're more...
