---
prev:
  text: "Width"
  link: "/utilities/sizing/width"
next:
  text: "Square"
  link: "/utilities/sizing/square"
---

# Height

Below, utility classes to apply `height` property.

> @for `$value` from 0 through 64

| Class        | Properties                     |
| :----------- | :----------------------------- |
| .h-auto      | `height: auto;`                |
| .h-view      | `height: 100vh;`               |
| .h-`<value>` | `height: #{$value * 0.25}rem;` |
| .h-96        | `height: 24rem; /* 384px */`   |
| .h-128       | `height: 32rem; /* 512px */`   |
| .h-1/1       | `height: 100%;`                |
| .h-1/2       | `height: 50%;`                 |
| .h-1/3       | `height: 33.333%;`             |
| .h-2/3       | `height: 66.667%;`             |
| .h-1/4       | `height: 25%;`                 |
| .h-2/4       | `height: 50%;`                 |
| .h-3/4       | `height: 75%;`                 |
| .h-1/5       | `height: 20%;`                 |
| .h-2/5       | `height: 40%;`                 |
| .h-3/5       | `height: 60%;`                 |
| .h-4/5       | `height: 80%;`                 |
| .h-1/6       | `height: 16.667%;`             |
| .h-2/6       | `height: 33.333%;`             |
| .h-3/6       | `height: 50%;`                 |
| .h-4/6       | `height: 66.667%;`             |
| .h-5/6       | `height: 83.333%;`             |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-12 h-64 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-12 h-56 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-12 h-48 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-12 h-32 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-12 h-24 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-12 h-16 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-12 h-8 radius-4" style="background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="w-12 h-64 ..."></div>
<div class="w-12 h-56 ..."></div>
<div class="w-12 h-48 ..."></div>
<div class="w-12 h-32 ..."></div>
<div class="w-12 h-24 ..."></div>
<div class="w-12 h-16 ..."></div>
<div class="w-12 h-8 ..."></div>
```

<div class="radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="flex-row gap-x-2 h-64">
    <div class="w-12 h-1/4 radius-4" style="background-color: var(--vp-c-brand-3);" />
    <div class="w-12 h-2/4 radius-4" style="background-color: var(--vp-c-brand-3);" />
    <div class="w-12 h-3/4 radius-4" style="background-color: var(--vp-c-brand-3);" />
    <div class="w-12 h-1/1 radius-4" style="background-color: var(--vp-c-brand-3);" />
  </div>
</div>

```html
<div class="flex-row h-64">
  <div class="w-12 h-1/4 ..."></div>
  <div class="w-12 h-2/4 ..."></div>
  <div class="w-12 h-3/4 ..."></div>
  <div class="w-12 h-1/1 ..."></div>
</div>
```

## Min Height

Below, utility classes to apply `min-height` property.

> @for `$value` from 0 through 64

| Class            | Properties                         |
| :--------------- | :--------------------------------- |
| .min-h-`<value>` | `min-height: #{$value * 0.25}rem;` |

## Max Height

Below, utility classes to apply `max-height` property.

> @for `$value` from 0 through 64

| Class            | Properties                         |
| :--------------- | :--------------------------------- |
| .max-h-`<value>` | `max-height: #{$value * 0.25}rem;` |
