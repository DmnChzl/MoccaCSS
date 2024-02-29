---
prev:
  text: "Grid"
  link: "/utilities/grid/index"
next:
  text: "Grid Column Span"
  link: "/utilities/grid/column-span"
---

# Grid Template Columns

Below, utility classes to apply `grid-template-columns` property.

> @for `$value` from 0 through 12

| Class                   | Properties                                                  |
| :---------------------- | :---------------------------------------------------------- |
| .grid-columns-none      | `grid-template-columns: none;`                              |
| .grid-columns-`<value>` | `grid-template-columns: repeat(#{$value}, minmax(0, 1fr));` |

### Example(s)

<div class="grid grid-columns-3 flow-row gap-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
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
<div class="grid grid-columns-3 flow-row gap-2 ...">
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
