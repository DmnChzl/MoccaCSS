---
prev:
  text: "Flex Direction"
  link: "/utilities/flex/direction"
next:
  text: "Flex Grow / Shrink"
  link: "/utilities/flex/grow-shrink"
---

# Flex Wrap

Below, utility classes to apply `flex-wrap` property.

| Class        | Properties           |
| :----------- | :------------------- |
| .flex-wrap   | `flex-wrap: wrap;`   |
| .flex-nowrap | `flex-wrap: nowrap;` |

### Example(s)

<div class="flex-row flex-wrap gap-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-2/3 h-12 mr-auto radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-2/3 h-12 mx-auto radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-2/3 h-12 ml-auto radius-4" style="background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="flex-row flex-wrap">
  <div class="w-2/3 h-12 mr-auto ..."></div>
  <div class="w-2/3 h-12 mx-auto ..."></div>
  <div class="w-2/3 h-12 ml-auto ..."></div>
</div>
```
