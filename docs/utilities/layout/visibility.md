---
prev:
  text: "Top / Right / Bottom / Left"
  link: "/utilities/layout/top-right-bottom-left"
next:
  text: "Z-Index"
  link: "/utilities/layout/z-index"
---

# Visibility

Below, utility classes to apply `visibility` property.

| Class      | Properties             |
| :--------- | :--------------------- |
| .invisible | `visibility: hidden;`  |
| .visible   | `visibility: visible;` |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 bg-current invisible radius-4" />
  <div class="w-1/1 h-12 visible radius-4" style="background-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="bg-current invisible"></div>
<div class="bg-current visible"></div>
```
