---
prev:
  text: "Text Overflow"
  link: "/utilities/fonts/text-transform"
next:
  text: "Layout"
  link: "/utilities/layout/index"
---

<script setup>
import { ref } from 'vue';

const loremIpsum = ref(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget tempor velit. Duis dapibus convallis lacus et semper. Cras dictum porttitor facilisis. Sed a sapien fringilla, tincidunt nunc et, sollicitudin lacus. Etiam ut lorem nisl. Quisque quis euismod odio. Integer pharetra eros in turpis vestibulum, ac bibendum elit vehicula. Fusce ultricies, erat vitae pharetra placerat, risus mi tristique urna, sit amet commodo erat lectus ac felis.
`);
</script>

# Whitespace

Below, utility classes to apply `white-space` property.

| Class              | Properties             |
| :----------------- | :--------------------- |
| .whitespace-normal | `white-space: normal;` |
| .whitespace-nowrap | `white-space: nowrap;` |

### Example(s)

<div class="flex-column radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="whitespace-normal">{{ loremIpsum }}</span>
</div>

```html
<p class="whitespace-normal">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-column radius-8 px-6 py-4 overflow-x-auto" style="background-color: var(--vp-c-bg-alt);">
  <span class="whitespace-nowrap">{{ loremIpsum }}</span>
</div>

```html
<div class="overflow-x-auto">
  <p class="whitespace-nowrap">Lorem ipsum dolor sit amet...</p>
</div>
```
