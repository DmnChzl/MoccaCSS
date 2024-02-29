---
prev:
  text: "Border Width"
  link: "/utilities/borders/width"
next:
  text: "Outline Width"
  link: "/utilities/borders/outline-width"
---

# Outline Style

Below, utility classes to apply `outline-style` property.

| Class           | Properties                                             |
| :-------------- | :----------------------------------------------------- |
| .outline-hidden | `outline: 2px solid transparent; outline-offset: 2px;` |
| .outline-solid  | `outline-style: solid;`                                |
| .outline-dashed | `outline-style: dashed;`                               |
| .outline-dotted | `outline-style: dotted;`                               |

### Example(s)

<div class="flex-row flex-wrap gap-4 justify-center radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <button class="outline-hidden px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg);">button</button>
  <button class="outline-solid outline-2 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg); outline-color: var(--vp-c-brand-3);">button</button>
  <button class="outline-dashed outline-2 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg); outline-color: var(--vp-c-brand-3);">button</button>
  <button class="outline-dotted outline-2 px-4 py-2 font-mono radius-4" style="background-color: var(--vp-c-bg); outline-color: var(--vp-c-brand-3);">button</button>
</div>

```html
<button class="outline-hidden ...">button</button>
<button class="outline-solid outline-2 ...">button</button>
<button class="outline-dashed outline-2 ...">button</button>
<button class="outline-dotted outline-2 ...">button</button>
```
