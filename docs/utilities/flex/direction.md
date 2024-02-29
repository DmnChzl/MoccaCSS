---
prev:
  text: "Flex"
  link: "/utilities/flex/index"
next:
  text: "Flex Wrap"
  link: "/utilities/flex/wrap"
---

# Flex Direction

Below, utility classes to apply `display` and `flex-direction` properties.

| Class                | Properties                                       |
| :------------------- | :----------------------------------------------- |
| .flex-row            | `display: flex; flex-direction: row;`            |
| .flex-row-reverse    | `display: flex; flex-direction: row-reverse;`    |
| .flex-column         | `display: flex; flex-direction: column;`         |
| .flex-column-reverse | `display: flex; flex-direction: column-reverse;` |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
</div>

```html
<div class="flex-row gap-x-2">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="flex-row-reverse gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</span>
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</span>
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</span>
</div>

```html
<div class="flex-row-reverse gap-x-2">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="flex-column gap-y-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</span>
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</span>
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</span>
</div>

```html
<div class="flex-column gap-y-2">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```

<div class="flex-column-reverse gap-y-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</span>
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</span>
  <span class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</span>
</div>

```html
<div class="flex-column-reverse gap-y-2">
  <div class="sqrt-12 ...">1</div>
  <div class="sqrt-12 ...">2</div>
  <div class="sqrt-12 ...">3</div>
</div>
```
