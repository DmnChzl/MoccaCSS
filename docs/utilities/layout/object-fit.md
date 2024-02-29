---
prev:
  text: "Display"
  link: "/utilities/layout/display"
next:
  text: "Overflow"
  link: "/utilities/layout/overflow"
---

# Object Fit

Below, utility classes to apply `object-fit` property.

| Class              | Properties                 |
| :----------------- | :------------------------- |
| .object-contain    | `object-fit: contain;`     |
| .object-cover      | `object-fit: cover;`       |
| .object-fill       | `object-fit: fill;`        |
| .object-none       | `object-fit: inline-none;` |
| .object-scale-down | `object-fit: scale-down;`  |

### Example(s)

<div class="flex-row justify-center radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-64 flex justify-center radius-4" style="background-color: var(--vp-c-bg);">
    <source srcset="/mocca.avif" type="image/avif" />
    <source srcset="/mocca.webp" type="image/webp" />
    <img class="h-48 object-contain" src="/mocca.webp" />
  </div>
</div>

```html{3}
<picture class="w-64 ...">
  <!-- <source /> -->
  <img class="h-48 object-contain" />
</picture>
```

<div class="flex-row justify-center radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <picture>
    <source srcset="/mocca.avif" type="image/avif" />
    <source srcset="/mocca.webp" type="image/webp" />
    <img class="w-64 h-48 object-cover radius-4" src="/mocca.webp" />
  </picture>
</div>

```html{3}
<picture>
  <!-- <source /> -->
  <img class="w-64 h-48 object-cover" />
</picture>
```

<div class="flex-row justify-center radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <picture class="sqrt-64 flex items-center radius-4" style="background-color: var(--vp-c-bg);">
    <source srcset="/mocca.avif" type="image/avif" />
    <source srcset="/mocca.webp" type="image/webp" />
    <img class="w-64 h-48 object-fill" src="/mocca.webp" />
  </picture>
</div>

```html{3}
<picture class="w-64 h-64 ...">
  <!-- <source /> -->
  <img class="w-64 h-48 object-fill" />
</picture>
```

<div class="flex-row justify-center radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <picture>
    <source srcset="/mocca.avif" type="image/avif" />
    <source srcset="/mocca.webp" type="image/webp" />
    <img class="w-64 h-64 object-none radius-4" src="/mocca.webp" />
  </picture>
</div>

```html{3}
<picture>
  <!-- <source /> -->
  <img class="w-64 h-64 object-none" />
</picture>
```

<div class="flex-row justify-center radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <picture class="sqrt-64 flex radius-4" style="background-color: var(--vp-c-bg);">
    <source srcset="/mocca.avif" type="image/avif" />
    <source srcset="/mocca.webp" type="image/webp" />
    <img class="w-48 h-64 object-scale-down m-auto" src="/mocca.webp" />
  </picture>
</div>

```html{3}
<picture class="w-64 h-64 ...">
  <!-- <source /> -->
  <img class="w-48 h-64 object-scale-down" />
</picture>
```
