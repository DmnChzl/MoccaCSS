---
prev:
  text: "Text Overflow"
  link: "/utilities/fonts/text-overflow"
next:
  text: "Whitespace"
  link: "/utilities/fonts/whitespace"
---

# Text Transform

Below, utility classes to apply `text-transform` properties.

| Class            | Properties                    |
| :--------------- | :---------------------------- |
| .text-capitalize | `text-transform: capitalize;` |
| .text-lowercase  | `text-transform: lowercase;`  |
| .text-uppercase  | `text-transform: uppercase;`  |

### Example(s)

<div class="flex-column gap-y-2 radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-lowercase">Lorem ipsum dolor sit amet...</span>
</div>

```html
<p class="text-lowercase">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-column gap-y-2 radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-uppercase">Lorem ipsum dolor sit amet...</span>
</div>

```html
<p class="text-uppercase">Lorem ipsum dolor sit amet...</p>
```
