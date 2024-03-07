---
prev:
  text: "Flex Grow / Shrink"
  link: "/utilities/flex/grow-shrink"
next:
  text: "Align Items"
  link: "/utilities/flex/align-items"
---

# Justify Content

Below, utility classes to apply `justify-content` property.

| Class            | Properties                        |
| :--------------- | :-------------------------------- |
| .justify-start   | `justify-content: flex-start;`    |
| .justify-center  | `justify-content: center;`        |
| .justify-end     | `justify-content: flex-end;`      |
| .justify-between | `justify-content: space-between;` |
| .justify-around  | `justify-content: space-around;`  |

### Example(s)

<div class="flex-row justify-start gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="flex-row justify-start">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="flex-row justify-center gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="flex-row justify-center">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="flex-row justify-end gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="flex-row justify-end">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

## Media Queries

`justify-content` is supported by changing state on-the-fly! You can use it like this:

```html
<div class="justify-start medium:justify-center extra-large:justify-end">...</div>
```
