---
prev:
  text: "Font Weight"
  link: "/utilities/fonts/weight"
next:
  text: "Line Height"
  link: "/utilities/fonts/line-height"
---

<script setup>
import { ref } from 'vue';

const loremIpsum = ref(`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget tempor velit. Duis dapibus convallis lacus et semper. Cras dictum porttitor facilisis. Sed a sapien fringilla, tincidunt nunc et, sollicitudin lacus. Etiam ut lorem nisl. Quisque quis euismod odio. Integer pharetra eros in turpis vestibulum, ac bibendum elit vehicula. Fusce ultricies, erat vitae pharetra placerat, risus mi tristique urna, sit amet commodo erat lectus ac felis.
`);
</script>

# Line Clamp

Below, utility classes to apply `overflow`, `display`, `-webkit-box-orient` and `-webkit-line-clamp` properties.

| Class         | Properties                                                                                     |
| :------------ | :--------------------------------------------------------------------------------------------- |
| .line-clamp-1 | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1;` |
| .line-clamp-2 | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2;` |
| .line-clamp-3 | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 3;` |
| .line-clamp-4 | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4;` |
| .line-clamp-5 | `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 5;` |

### Example(s)

<div class="flex-column gap-y-2 radius-8 px-6 py-4 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <span class="line-clamp-2">{{ loremIpsum }}</span>
</div>

```html
<p class="line-clamp-2">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-column gap-y-2 radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="line-clamp-3">{{ loremIpsum }}</span>
</div>

```html
<p class="line-clamp-3">Lorem ipsum dolor sit amet...</p>
```

<div class="flex-column gap-y-2 radius-8 px-6 py-4" style="background-color: var(--vp-c-bg-alt);">
  <span class="line-clamp-4">{{ loremIpsum }}</span>
</div>

```html
<p class="line-clamp-4">Lorem ipsum dolor sit amet...</p>
```
