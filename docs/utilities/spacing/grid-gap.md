---
prev:
  text: "Padding"
  link: "/utilities/spacing/padding"
next:
  text: "Borders"
  link: "/utilities/borders/index"
---

# Grid Gap

Below, utility classes to apply `gap`, `column-gap` or `row-gap` property.

> @for `$value` from 0 through 16

| Class            | Properties                         |
| :--------------- | :--------------------------------- |
| .gap-`<value>`   | `gap: #{$value * 0.25}rem;`        |
| .gap-x-`<value>` | `column-gap: #{$value * 0.25}rem;` |
| .gap-y-`<value>` | `row-gap: #{$value * 0.25}rem;`    |

### Example(s)

<div class="flex-row flex-wrap justify-center gap-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="flex-row flex-wrap gap-2">
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
</div>
```

<div class="flex-row justify-center gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
  <div class="h-12 radius-4" style="width: calc((100% / 3) - 8px); background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="flex-row gap-x-2">
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
  <div class="w-1/3 h-12 ..."></div>
</div>
```

<div class="flex-column gap-y-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="flex-row gap-y-2">
  <div class="w-1/1 h-12 ..."></div>
  <div class="w-1/1 h-12 ..."></div>
  <div class="w-1/1 h-12 ..."></div>
</div>
```
