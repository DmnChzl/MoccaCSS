---
prev:
  text: "Font Size"
  link: "/utilities/fonts/size"
next:
  text: "Font Weight"
  link: "/utilities/fonts/weight"
---

<script setup>
import { ref } from 'vue';

const loremIpsum = ref(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget tempor velit. Duis dapibus convallis lacus et semper. Cras dictum porttitor facilisis. Sed a sapien fringilla, tincidunt nunc et, sollicitudin lacus. Etiam ut lorem nisl. Quisque quis euismod odio. Integer pharetra eros in turpis vestibulum, ac bibendum elit vehicula. Fusce ultricies, erat vitae pharetra placerat, risus mi tristique urna, sit amet commodo erat lectus ac felis.
`);
</script>

# Font Style

Below, utility classes to apply `font-style` property.

| Class        | Properties            |
| :----------- | :-------------------- |
| .font-normal | `font-style: normal;` |
| .font-italic | `font-style: italic;` |

### Example(s)

<div class="flex-column radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="font-normal">{{ loremIpsum }}</span>
</div>

```html
<p class="font-normal">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-column radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="font-italic">{{ loremIpsum }}</span>
</div>

```html
<p class="font-italic">Lorem ipsum dolor sit amet...</p>
```
