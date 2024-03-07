---
prev:
  text: "Object Fit"
  link: "/utilities/layout/object-fit"
next:
  text: "Position"
  link: "/utilities/layout/position"
---

# Overflow

Below, utility classes to apply `overflow` property.

| Class               | Properties             |
| :------------------ | :--------------------- |
| .overflow-hidden    | `overflow: hidden;`    |
| .overflow-auto      | `overflow: auto;`      |
| .overflow-scroll    | `overflow: scroll;`    |
| .overflow-visible   | `overflow: visible;`   |
| .overflow-x-hidden  | `overflow-x: hidden;`  |
| .overflow-x-auto    | `overflow-x: auto;`    |
| .overflow-x-scroll  | `overflow-x: scroll;`  |
| .overflow-x-visible | `overflow-x: visible;` |
| .overflow-y-hidden  | `overflow-y: hidden;`  |
| .overflow-y-auto    | `overflow-y: auto;`    |
| .overflow-y-scroll  | `overflow-y: scroll;`  |
| .overflow-y-visible | `overflow-y: visible;` |

## Media Queries

`overflow` is supported by changing state on-the-fly! You can use it like this:

```html
<div class="overflow-x-hidden overflow-y-scroll small:overflow-x-scroll small:overflow-y-hidden">...</div>
```
