---
prev:
  text: "SVG Color"
  link: "/utilities/colors/svg"
next:
  text: "Fonts"
  link: "/utilities/fonts/index"
---

# Outline Color

Below, utility classes to apply `outline-color` property.

| Class                       | Properties                                  |
| :-------------------------- | :------------------------------------------ |
| .outline-`<color>`-`<tint>` | `outline-color: var(--#{$color}-#{$tint});` |

### Example(s)

<div class="flex-row flex-wrap gap-4 justify-center radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <button class="outline-solid outline-2 outline-offset-2 outline-gray-500 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg);">button</button>
  <button class="outline-solid outline-2 outline-offset-2 outline-deep-orange-500 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg);">button</button>
  <button class="outline-solid outline-2 outline-offset-2 outline-yellow-500 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg);">button</button>
  <button class="outline-solid outline-2 outline-offset-2 outline-green-500 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg);">button</button>
  <button class="outline-solid outline-2 outline-offset-2 outline-indigo-500 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg);">button</button>
</div>

```html
<button class="outline-solid outline-2 outline-offset-2 outline-gray-500 ...">button</button>
<button class="outline-solid outline-2 outline-offset-2 outline-deep-orange-500 ...">button</button>
<button class="outline-solid outline-2 outline-offset-2 outline-yellow-500 ...">button</button>
<button class="outline-solid outline-2 outline-offset-2 outline-green-500 ...">button</button>
<button class="outline-solid outline-2 outline-offset-2 outline-indigo-500 ...">button</button>
```
