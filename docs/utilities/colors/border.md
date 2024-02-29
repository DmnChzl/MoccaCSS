---
prev:
  text: "Background Color"
  link: "/utilities/colors/background"
next:
  text: "SVG Color"
  link: "/utilities/colors/svg"
---

# Border Color

Below, utility classes to apply `border-color` property.

| Class                      | Properties                                 |
| :------------------------- | :----------------------------------------- |
| .border-`<color>`-`<tint>` | `border-color: var(--#{$color}-#{$tint});` |

### Example(s)

<div class="flex-column gap-y-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 border-2 border-solid border-gray-500 radius-4" />
  <div class="w-1/1 h-12 border-2 border-solid border-deep-orange-500 radius-4" />
  <div class="w-1/1 h-12 border-2 border-solid border-yellow-500 radius-4" />
  <div class="w-1/1 h-12 border-2 border-solid border-green-500 radius-4" />
  <div class="w-1/1 h-12 border-2 border-solid border-indigo-500 radius-4" />
</div>

```html
<div class="border-2 border-solid border-gray-500 ..."></div>
<div class="border-2 border-solid border-deep-orange-500 ..."></div>
<div class="border-2 border-solid border-yellow-500 ..."></div>
<div class="border-2 border-solid border-green-500 ..."></div>
<div class="border-2 border-solid border-indigo-500 ..."></div>
```
