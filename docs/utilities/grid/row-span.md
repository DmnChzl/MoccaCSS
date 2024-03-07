---
prev:
  text: "Grid Template Rows"
  link: "/utilities/grid/template-rows"
next:
  text: "Grid Auto Flow"
  link: "/utilities/grid/auto-flow"
---

# Grid Row Span

Below, utility classes to apply `grid-row`, `grid-row-start` or `grid-row-end` property.

> @for `$value` from 0 through 12

| Class                | Properties                             |
| :------------------- | :------------------------------------- |
| .row-auto            | `grid-row: auto;`                      |
| .row-start-auto      | `grid-row-start: auto;`                |
| .row-end-auto        | `grid-row-end: auto;`                  |
| .row-`<value>`       | `grid-row: span $value / span $value;` |
| .row-start-`<value>` | `grid-row-start: $value;`              |
| .row-end-`<value>`   | `grid-row-end: $value;`                |

### Example(s)

<div class="grid grid-rows-3 flow-column gap-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="w-1/1 min-h-12 row-2 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="w-1/1 min-h-12 row-3 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  <div class="w-1/1 min-h-12 row-2 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
  <div class="w-1/1 h-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">5</div>
</div>

```html
<div class="grid grid-rows-3 flow-column gap-2 ...">
  <div class="w-1/1 h-12 ...">1</div>
  <div class="w-1/1 min-h-12 row-2 ...">2</div>
  <div class="w-1/1 min-h-12 row-3 ...">3</div>
  <div class="w-1/1 min-h-12 row-2 ...">4</div>
  <div class="w-1/1 h-12 ...">5</div>
</div>
```

## Media Queries

`grid-row`, `grid-row-start` and `grid-row-end` are supported by changing state on-the-fly! You can use it like this:

```html
<div class="small:row-4 medium:row-3 large:row-2">...</div>
```
