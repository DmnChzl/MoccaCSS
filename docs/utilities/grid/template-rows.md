---
prev:
  text: "Grid Column Span"
  link: "/utilities/grid/column-span"
next:
  text: "Grid Row Span"
  link: "/utilities/grid/row-span"
---

# Grid Template Rows

Below, utility classes to apply `grid-template-rows` property.

> @for `$value` from 0 through 12

| Class                | Properties                                               |
| :------------------- | :------------------------------------------------------- |
| .grid-rows-none      | `grid-template-rows: none;`                              |
| .grid-rows-`<value>` | `grid-template-rows: repeat(#{$value}, minmax(0, 1fr));` |

### Example(s)

<div class="grid grid-rows-3 flow-column gap-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">5</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">6</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">7</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">8</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">9</div>
</div>

```html
<div class="grid grid-rows-3 flow-column gap-2 ...">
  <div class="w-1/1 h-12 ...">1</div>
  <div class="w-1/1 h-12 ...">2</div>
  <div class="w-1/1 h-12 ...">3</div>
  <div class="w-1/1 h-12 ...">4</div>
  <div class="w-1/1 h-12 ...">5</div>
  <div class="w-1/1 h-12 ...">6</div>
  <div class="w-1/1 h-12 ...">7</div>
  <div class="w-1/1 h-12 ...">8</div>
  <div class="w-1/1 h-12 ...">9</div>
</div>
```
