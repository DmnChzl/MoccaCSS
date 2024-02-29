---
prev:
  text: "Line Height"
  link: "/utilities/fonts/line-height"
next:
  text: "Text Decoration"
  link: "/utilities/fonts/text-decoration"
---

<script setup>
import { ref } from 'vue';

const loremIpsum = ref(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget tempor velit. Duis dapibus convallis lacus et semper. Cras dictum porttitor facilisis. Sed a sapien fringilla, tincidunt nunc et, sollicitudin lacus. Etiam ut lorem nisl. Quisque quis euismod odio. Integer pharetra eros in turpis vestibulum, ac bibendum elit vehicula. Fusce ultricies, erat vitae pharetra placerat, risus mi tristique urna, sit amet commodo erat lectus ac felis.
`);
</script>

# Text Align

Below, utility classes to apply `text-align` property.

| Class         | Properties             |
| :------------ | :--------------------- |
| .text-left    | `text-align: left;`    |
| .text-center  | `text-align: center;`  |
| .text-right   | `text-align: right;`   |
| .text-justify | `text-align: justify;` |

### Example(s)

<div class="flex-row radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-left">{{ loremIpsum }}</span>
</div>

```html
<p class="text-left">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-row radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-right">{{ loremIpsum }}</span>
</div>

```html
<p class="text-right">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-row radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-center">{{ loremIpsum }}</span>
</div>

```html
<p class="text-center">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-row radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="text-justify">{{ loremIpsum }}</span>
</div>

```html
<p class="text-justify">Lorem ipsum dolor sit amet...</p>
```
