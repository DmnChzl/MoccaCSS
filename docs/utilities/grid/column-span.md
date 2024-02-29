---
prev:
  text: "Grid Template Columns"
  link: "/utilities/grid/template-columns"
next:
  text: "Grid Template Rows"
  link: "/utilities/grid/template-rows"
---

# Grid Column Span

Below, utility classes to apply `grid-column`, `grid-column-start` or `grid-column-end` property.

> @for `$value` from 0 through 12

| Class                   | Properties                                |
| :---------------------- | :---------------------------------------- |
| .column-auto            | `grid-column: auto;`                      |
| .column-start-auto      | `grid-column-start: auto;`                |
| .column-end-auto        | `grid-column-end: auto;`                  |
| .column-`<value>`       | `grid-column: span $value / span $value;` |
| .column-start-`<value>` | `grid-column-start: $value;`              |
| .column-end-`<value>`   | `grid-column-end: $value;`                |

### Example(s)

<div class="grid grid-columns-3 flow-row gap-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="w-1/1 h-12 column-2 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="w-1/1 h-12 column-3 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  <div class="w-1/1 h-12 column-2 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">5</div>
</div>

```html
<div class="grid grid-columns-3 flow-row gap-2 ...">
  <div class="w-1/1 h-12 ...">1</div>
  <div class="w-1/1 h-12 column-2 ...">2</div>
  <div class="w-1/1 h-12 column-3 ...">3</div>
  <div class="w-1/1 h-12 column-2 ...">4</div>
  <div class="w-1/1 h-12 ...">5</div>
</div>
```
