---
prev:
  text: "Border Radius"
  link: "/utilities/borders/radius"
next:
  text: "Border Width"
  link: "/utilities/borders/width"
---

# Border Style

Below, utility classes to apply `border-style` property.

| Class          | Properties              |
| :------------- | :---------------------- |
| .border-hidden | `border-style: hidden;` |
| .border-solid  | `border-style: solid;`  |
| .border-dashed | `border-style: dashed;` |
| .border-dotted | `border-style: dotted;` |

### Example(s)

<div class="flex-row gap-x-2 radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="w-1/1 h-12 border-2 border-hidden radius-4" style="background-color: var(--vp-c-bg);" />
  <div class="w-1/1 h-12 border-2 border-solid radius-4" style="background-color: var(--vp-c-bg); border-color: var(--vp-c-brand-3);" />
  <div class="w-1/1 h-12 border-2 border-dashed radius-4" style="background-color: var(--vp-c-bg); border-color: var(--vp-c-brand-3);" />
  <div class="w-1/1 h-12 border-2 border-dotted radius-4" style="background-color: var(--vp-c-bg); border-color: var(--vp-c-brand-3);" />
</div>

```html
<div class="border-2 border-hidden ..."></div>
<div class="border-2 border-solid ..."></div>
<div class="border-2 border-dashed ..."></div>
<div class="border-2 border-dotted ..."></div>
```
