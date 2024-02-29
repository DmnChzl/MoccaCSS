---
prev:
  text: "Justify Content"
  link: "/utilities/flex/justify-content"
next:
  text: "Align Self"
  link: "/utilities/flex/align-self"
---

# Align Items

Below, utility classes to apply `align-items` property.

| Class         | Properties                 |
| :------------ | :------------------------- |
| .items-start  | `align-items: flex-start;` |
| .items-center | `align-items: center;`     |
| .items-end    | `align-items: flex-end;`   |

### Example(s)

<div class="h-48 flex-row items-start gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="h-48 flex-row items-start">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="h-48 flex-row items-center gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="h-48 flex-row items-center">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="h-48 flex-row items-end gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="h-48 flex-row items-end">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```
