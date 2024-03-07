---
prev:
  text: "Transforms"
  link: "/utilities/transforms/index"
next:
  text: "Scale"
  link: "/utilities/transforms/scale"
---

# Rotate

Below, utility classes to apply `transform` property.

| Class       | Properties                   |
| :---------- | :--------------------------- |
| .rotate-0   | `transform: rotate(0deg);`   |
| .rotate-15  | `transform: rotate(15deg);`  |
| .rotate-30  | `transform: rotate(30deg);`  |
| .rotate-45  | `transform: rotate(45deg);`  |
| .rotate-60  | `transform: rotate(60deg);`  |
| .rotate-75  | `transform: rotate(75deg);`  |
| .rotate-90  | `transform: rotate(90deg);`  |
| .rotate-105 | `transform: rotate(105deg);` |
| .rotate-120 | `transform: rotate(120deg);` |
| .rotate-135 | `transform: rotate(135deg);` |
| .rotate-150 | `transform: rotate(150deg);` |
| .rotate-165 | `transform: rotate(165deg);` |
| .rotate-180 | `transform: rotate(180deg);` |

### Example(s)

<div class="flex-row justify-between radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 border-2 border-solid radius-4 rotate-15" style="background-color: var(--vp-c-brand-3); border-color: var(--vp-c-bg-alt);" />
  <div class="sqrt-12 border-2 border-solid radius-4 rotate-30" style="background-color: var(--vp-c-brand-3); border-color: var(--vp-c-bg-alt);" />
  <div class="sqrt-12 border-2 border-solid radius-4 rotate-45" style="background-color: var(--vp-c-brand-3); border-color: var(--vp-c-bg-alt);" />
  <div class="sqrt-12 border-2 border-solid radius-4 rotate-60" style="background-color: var(--vp-c-brand-3); border-color: var(--vp-c-bg-alt);" />
  <div class="sqrt-12 border-2 border-solid radius-4 rotate-75" style="background-color: var(--vp-c-brand-3); border-color: var(--vp-c-bg-alt);" />
  <div class="sqrt-12 border-2 border-solid radius-4 rotate-90" style="background-color: var(--vp-c-brand-3); border-color: var(--vp-c-bg-alt);" />
</div>

```html
<div class="rotate-15 ..."></div>
<div class="rotate-30 ..."></div>
<div class="rotate-45 ..."></div>
<div class="rotate-60 ..."></div>
<div class="rotate-75 ..."></div>
<div class="rotate-90 ..."></div>
```

## Media Queries

`transform: rotate()` is supported by changing state on-the-fly! You can use it like this:

```html
<svg class="small:rotate-45 medium:rotate-90 large:rotate-135 extra-large:rotate-180">...</svg>
```
