---
prev:
  text: "Align Self"
  link: "/utilities/flex/align-self"
next:
  text: "Grid"
  link: "/utilities/grid/index"
---

# Order

Below, utility classes to apply `order` property.

> @for `$value` from 0 through 16

| Class            | Properties          |
| :--------------- | :------------------ |
| .order-first     | `order: -9999;`     |
| .order-last      | `order: 9999;`      |
| .order-`<value>` | `order: #{$value};` |

### Example(s)

<div class="flex-row gap-x-2 justify-center radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 order-2 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 order-first flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 order-3 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  <div class="sqrt-12 order-last flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
  <div class="sqrt-12 order-4 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">5</div>
</div>

```html
<div class="h-48 flex-row ...">
  <div class="sqrt-12 order-2 ...">1</div>
  <div class="sqrt-12 order-first ...">2</div>
  <div class="sqrt-12 order-3 ...">3</div>
  <div class="sqrt-12 order-last ...">4</div>
  <div class="sqrt-12 order-4 ...">5</div>
</div>
```
