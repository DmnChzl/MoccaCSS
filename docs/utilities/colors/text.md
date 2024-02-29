---
prev:
  text: "Colors"
  link: "/utilities/colors/index"
next:
  text: "Background Color"
  link: "/utilities/colors/background"
---

# Text Color

Below, utility classes to apply `color` property.

| Class                    | Properties                          |
| :----------------------- | :---------------------------------- |
| .text-`<color>`-`<tint>` | `color: var(--#{$color}-#{$tint});` |

### Example(s)

<div class="flex-column gap-y-2 radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-gray-500">Lorem ipsum dolor sit amet...</span>
  <span class="text-deep-orange-500">Lorem ipsum dolor sit amet...</span>
  <span class="text-yellow-500">Lorem ipsum dolor sit amet...</span>
  <span class="text-green-500">Lorem ipsum dolor sit amet...</span>
  <span class="text-indigo-500">Lorem ipsum dolor sit amet...</span>
</div>

```html
<p class="text-gray-500">Lorem ipsum dolor sit amet...</p>
<p class="text-deep-orange-500">Lorem ipsum dolor sit amet...</p>
<p class="text-yellow-500">Lorem ipsum dolor sit amet...</p>
<p class="text-green-500">Lorem ipsum dolor sit amet...</p>
<p class="text-indigo-500">Lorem ipsum dolor sit amet...</p>
```
