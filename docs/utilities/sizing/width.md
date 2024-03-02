---
prev:
  text: "Sizing"
  link: "/utilities/sizing/index"
next:
  text: "Height"
  link: "/utilities/sizing/height"
---

# Width

Below, utility classes to apply `width` property.

> @for `$value` from 0 through 64

| Class        | Properties                    |
| :----------- | :---------------------------- |
| .w-auto      | `width: auto;`                |
| .w-view      | `width: 100vw;`               |
| .w-`<value>` | `width: #{$value * 0.25}rem;` |
| .w-96        | `width: 24rem; /* 384px */`   |
| .w-128       | `width: 32rem; /* 512px */`   |
| .w-1/1       | `width: 100%;`                |
| .w-1/2       | `width: 50%;`                 |
| .w-1/3       | `width: 33.333%;`             |
| .w-2/3       | `width: 66.667%;`             |
| .w-1/4       | `width: 25%;`                 |
| .w-2/4       | `width: 50%;`                 |
| .w-3/4       | `width: 75%;`                 |
| .w-1/5       | `width: 20%;`                 |
| .w-2/5       | `width: 40%;`                 |
| .w-3/5       | `width: 60%;`                 |
| .w-4/5       | `width: 80%;`                 |
| .w-1/6       | `width: 16.667%;`             |
| .w-2/6       | `width: 33.333%;`             |
| .w-3/6       | `width: 50%;`                 |
| .w-4/6       | `width: 66.667%;`             |
| .w-5/6       | `width: 83.333%;`             |

### Example(s)

<div class="flex-column gap-y-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-64 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-56 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-48 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-32 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-24 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-16 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-8 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="w-64 h-12 ..."></div>
<div class="w-56 h-12 ..."></div>
<div class="w-48 h-12 ..."></div>
<div class="w-32 h-12 ..."></div>
<div class="w-24 h-12 ..."></div>
<div class="w-16 h-12 ..."></div>
<div class="w-8 h-12 ..."></div>
```

<div class="radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="flex-column gap-y-2 w-64">
    <div class="w-1/4 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
    <div class="w-2/4 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
    <div class="w-3/4 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
    <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-brand-3);" />
  </div>
</div>

```html
<div class="flex-column w-64">
  <div class="w-1/4 h-12 ..."></div>
  <div class="w-2/4 h-12 ..."></div>
  <div class="w-3/4 h-12 ..."></div>
  <div class="w-1/1 h-12 ..."></div>
</div>
```

## Min Width

Below, utility classes to apply `min-width` property.

> @for `$value` from 0 through 64

| Class            | Properties                        |
| :--------------- | :-------------------------------- |
| .min-w-`<value>` | `min-width: #{$value * 0.25}rem;` |

## Max Width

Below, utility classes to apply `max-width` property.

> @for `$value` from 0 through 64

| Class            | Properties                        |
| :--------------- | :-------------------------------- |
| .max-w-`<value>` | `max-width: #{$value * 0.25}rem;` |
