---
prev:
  text: "Flex Wrap"
  link: "/utilities/flex/wrap"
next:
  text: "Justify Content"
  link: "/utilities/flex/justify-content"
---

# Flex Grow / Shrink

Below, utility classes to apply `flex-grow` and `flex-shrink` properties.

## Flex Grow

| Class        | Properties      |
| :----------- | :-------------- |
| .flex-grow   | `flex-grow: 1;` |
| .flex-nogrow | `flex-grow: 0;` |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-24 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
  <div class="min-w-24 h-12 flex-grow radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-24 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
</div>

```html{3}
<div class="flex-row ...">
  <div class="w-24 h-12 ..."></div>
  <div class="min-w-24 h-12 flex-grow ..."></div>
  <div class="w-24 h-12 ..."></div>
</div>
```

<div class="flex-row gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-24 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
  <div class="min-w-24 h-12 flex-nogrow radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-24 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
</div>

```html{3}
<div class="flex-row ...">
  <div class="w-24 h-12 ..."></div>
  <div class="min-h-12 flex-nogrow ..."></div>
  <div class="w-24 h-12 ..."></div>
</div>
```

## Flex Shrink

| Class          | Properties        |
| :------------- | :---------------- |
| .flex-shrink   | `flex-shrink: 1;` |
| .flex-noshrink | `flex-shrink: 0;` |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
  <div class="w-24 h-12 flex-shrink radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
</div>

```html{3}
<div class="flex-row ...">
  <div class="w-1/1 h-12 ..."></div>
  <div class="w-24 h-12 flex-shrink ..."></div>
  <div class="w-1/1 h-12 ..."></div>
</div>
```

<div class="flex-row gap-x-2 radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
  <div class="w-24 h-12 flex-noshrink radius-4" style="background-color: var(--vp-c-brand-3);" />
  <div class="w-1/1 h-12 radius-4" style="background-color: var(--vp-c-bg);" />
</div>

```html{3}
<div class="flex-row ...">
  <div class="w-1/1 h-12 ..."></div>
  <div class="w-24 h-12 flex-noshrink ..."></div>
  <div class="w-1/1 h-12 ..."></div>
</div>
```
