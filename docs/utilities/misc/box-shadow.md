---
prev:
  text: "Opacity"
  link: "/utilities/misc/opacity"
---

# Shadow

Below, utility classes to apply `box-shadow` property.

| Class          | Properties                                                                          |
| :------------- | :---------------------------------------------------------------------------------- |
| .noshadow      | `box-shadow: 0 0 rgb(0, 0, 0, 0);`                                                  |
| .shadow        | `box-shadow: 0 1px 2px 0 rgb(0, 0, 0, 0.05);`                                       |
| .shadow-small  | `box-shadow: 0 1px 3px 0 rgb(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0, 0, 0, 0.1);`      |
| .shadow-medium | `box-shadow: 0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -2px rgb(0, 0, 0, 0.1);`   |
| .shadow-large  | `box-shadow: 0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1);` |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: #f6f6f7;">
  <div class="w-1/1 h-12 bg-white radius-4 noshadow" />
  <div class="w-1/1 h-12 bg-white radius-4 shadow" />
  <div class="w-1/1 h-12 bg-white radius-4 shadow-small" />
  <div class="w-1/1 h-12 bg-white radius-4 shadow-medium" />
  <div class="w-1/1 h-12 bg-white radius-4 shadow-large" />
</div>

```html
<div class="noshadow ..."></div>
<div class="shadow ..."></div>
<div class="shadow-small ..."></div>
<div class="shadow-medium ..."></div>
<div class="shadow-large ..."></div>
```
