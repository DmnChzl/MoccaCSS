---
prev:
  text: "Fonts"
  link: "/utilities/fonts/index"
next:
  text: "Font Size"
  link: "/utilities/fonts/size"
---

<script setup>
import { ref } from 'vue';

const loremIpsum = ref(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget tempor velit. Duis dapibus convallis lacus et semper. Cras dictum porttitor facilisis. Sed a sapien fringilla, tincidunt nunc et, sollicitudin lacus. Etiam ut lorem nisl. Quisque quis euismod odio. Integer pharetra eros in turpis vestibulum, ac bibendum elit vehicula. Fusce ultricies, erat vitae pharetra placerat, risus mi tristique urna, sit amet commodo erat lectus ac felis.
`);
</script>

# Font Family

Below, utility classes to apply `font-family` property.

| Class           | Properties                                  |
| :-------------- | :------------------------------------------ |
| .font-poppins   | `font-family: "Poppins", sans-serif;`       |
| .font-sans      | `font-family: "Poppins", sans-serif;`       |
| .font-jetbrains | `font-family: "JetBrains Mono", monospace;` |
| .font-mono      | `font-family: "JetBrains Mono", monospace;` |

### Example(s)

<div class="flex-column radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="font-sans">{{ loremIpsum }}</span>
</div>

```html
<p class="font-sans">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-column radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="font-mono">{{ loremIpsum }}</span>
</div>

```html
<p class="font-mono">Lorem ipsum dolor sit amet...</p>
```
