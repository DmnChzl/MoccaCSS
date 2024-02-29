---
prev:
  text: "Border Color"
  link: "/utilities/colors/border"
next:
  text: "Outline Color"
  link: "/utilities/colors/outline"
---

# SVG Color

Below, utility classes to apply `fill` and `stroke` properties.

## Fill

| Class                    | Properties                         |
| :----------------------- | :--------------------------------- |
| .fill-`<color>`-`<tint>` | `fill: var(--#{$color}-#{$tint});` |

### Example(s)

<div class="flex-row justify-around radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-500" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="fill-deep-orange-500" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="fill-yellow-500" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-500" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="fill-indigo-500" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>
</div>

```html
<svg class="fill-gray-500 ..." stroke="currentColor"></svg>
<svg class="fill-deep-orange-500 ..." stroke="currentColor"></svg>
<svg class="fill-yellow-500 ..." stroke="currentColor"></svg>
<svg class="fill-green-500 ..." stroke="currentColor"></svg>
<svg class="fill-indigo-500 ..." stroke="currentColor"></svg>
```

## Stroke

| Class                      | Properties                           |
| :------------------------- | :----------------------------------- |
| .stroke-`<color>`-`<tint>` | `stroke: var(--#{$color}-#{$tint});` |

### Example(s)

<div class="flex-row justify-around radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-gray-500" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-deep-orange-500" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-yellow-500" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-green-500" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-indigo-500" width="48" height="48" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
</div>

```html
<svg class="stroke-gray-500 ..." fill="currentColor"></svg>
<svg class="stroke-deep-orange-500 ..." fill="currentColor"></svg>
<svg class="stroke-yellow-500 ..." fill="currentColor"></svg>
<svg class="stroke-green-500 ..." fill="currentColor"></svg>
<svg class="stroke-indigo-500 ..." fill="currentColor"></svg>
```
