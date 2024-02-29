---
prev:
  text: "Align Items"
  link: "/utilities/flex/align-items"
next:
  text: "Order"
  link: "/utilities/flex/order"
---

# Align Self

Below, utility classes to apply `align-self` property.

| Class        | Properties                |
| :----------- | :------------------------ |
| .self-start  | `align-self: flex-start;` |
| .self-center | `align-self: center;`     |
| .self-end    | `align-self: flex-end;`   |

### Example(s)

<div class="h-48 flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 self-start flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 self-center flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 self-end flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="h-48 flex-row">
  <div class="sqrt-12 self-start ...">1</div>
  <div class="sqrt-12 self-center ...">2</div>
  <div class="sqrt-12 self-end ...">3</div>
</div>
```
