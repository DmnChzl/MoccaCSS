---
prev:
  text: "Text Color"
  link: "/utilities/colors/text"
next:
  text: "Border Color"
  link: "/utilities/colors/border"
---

# Background Color

Below, utility classes to apply `background-color` property.

| Class                  | Properties                                     |
| :--------------------- | :--------------------------------------------- |
| .bg-`<color>`-`<tint>` | `background-color: var(--#{$color}-#{$tint});` |

### Example(s)

<div class="flex-column gap-y-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 bg-gray-500 radius-4" />
  <div class="w-1/1 h-12 bg-deep-orange-500 radius-4" />
  <div class="w-1/1 h-12 bg-yellow-500 radius-4" />
  <div class="w-1/1 h-12 bg-green-500 radius-4" />
  <div class="w-1/1 h-12 bg-indigo-500 radius-4" />
</div>

```html
<div class="bg-gray-500 ..."></div>
<div class="bg-deep-orange-500 ..."></div>
<div class="bg-yellow-500 ..."></div>
<div class="bg-green-500 ..."></div>
<div class="bg-indigo-500 ..."></div>
```
