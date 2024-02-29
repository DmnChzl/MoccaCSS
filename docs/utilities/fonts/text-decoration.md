---
prev:
  text: "Text Align"
  link: "/utilities/fonts/text-align"
next:
  text: "Text Overflow"
  link: "/utilities/fonts/text-overflow"
---

# Text Decoration

Below, utility classes to apply `text-decoration-line` property.

| Class              | Properties                            |
| :----------------- | :------------------------------------ |
| .text-overline     | `text-decoration-line: overline;`     |
| .text-line-through | `text-decoration-line: line-through;` |
| .text-underline    | `text-decoration-line: underline;`    |

### Example(s)

<div class="flex-column gap-y-2 radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-overline">Lorem ipsum dolor sit amet...</span>
  <span class="text-line-through self-center">Lorem ipsum dolor sit amet...</span>
  <span class="text-underline self-end">Lorem ipsum dolor sit amet...</span>
</div>

```html
<p class="text-overline">Lorem ipsum dolor sit amet...</p>
<p class="text-line-through">Lorem ipsum dolor sit amet...</p>
<p class="text-underline">Lorem ipsum dolor sit amet...</p>
```
