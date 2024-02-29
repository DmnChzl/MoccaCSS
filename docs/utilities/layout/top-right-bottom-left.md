---
prev:
  text: "Position"
  link: "/utilities/layout/position"
next:
  text: "Visibility"
  link: "/utilities/layout/visibility"
---

# Top / Right / Left / Bottom

Below, utility classes to apply `top`, `right`, `bottom` or `left` property.

> @for `$value` from 0 through 16

| Class             | Properties                     |
| :---------------- | :----------------------------- |
| .top-`<value>`    | `top: #{$value * 0.25}rem;`    |
| .right-`<value>`  | `right: #{$value * 0.25}rem;`  |
| .bottom-`<value>` | `bottom: #{$value * 0.25}rem;` |
| .left-`<value>`   | `left: #{$value * 0.25}rem;`   |

### Example(s)

<div class="relative h-64 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="absolute top-6 left-6 sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="absolute top-6 right-6 sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="absolute bottom-6 left-6 sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  <div class="absolute bottom-6 right-6 sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
</div>

```html
<div class="relative ...">
  <div class="absolute top-6 left-6 ...">1</div>
  <div class="absolute top-6 right-6 ...">2</div>
  <div class="absolute bottom-6 left-6 ...">3</div>
  <div class="absolute bottom-6 right-6 ...">4</div>
</div>
```
