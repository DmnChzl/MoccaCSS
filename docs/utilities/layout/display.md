---
prev:
  text: "Box Sizing"
  link: "/utilities/layout/box-sizing"
next:
  text: "Object Fit"
  link: "/utilities/layout/object-fit"
---

# Display

Below, utility classes to apply `display` property.

| Class         | Properties               |
| :------------ | :----------------------- |
| .hidden       | `display: none;`         |
| .inline       | `display: inline;`       |
| .block        | `display: block;`        |
| .inline-block | `display: inline-block;` |
| .flex         | `display: flex;`         |
| .inline-flex  | `display: inline-flex;`  |
| .table        | `display: table;`        |
| .inline-table | `display: inline-table;` |
| .grid         | `display: grid;`         |
| .inline-grid  | `display: inline-grid;`  |
| .contents     | `display: contents;`     |

## Media Queries

`display` is supported by changing state on-the-fly! You can use it like this:

```html
<div class="block small:hidden">
  <span>That's Mobile View</span>
</div>
<div class="hidden small:block">
  <span>That's Desktop View</span>
</div>
```
