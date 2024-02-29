---
prev:
  text: "Colors"
  link: "/utilities/colors/index"
next:
  text: "Font Family"
  link: "/utilities/fonts/family"
---

<script setup>
import { ref, computed } from 'vue';

const weights = ref({
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black"
});

const poppins = computed(() => weights.value);
const jetbrains = computed(() => {
  const entries = Object.entries(weights.value);

  return entries.reduce((acc, [key, value]) => {
    if (key === "900") return acc;
    return { ...acc, [key]: value };
  }, {});
});
</script>

# Fonts

Here is how to import `fonts` utility classes.

```js
import "@dmnchzl/mocca-css/fonts";
```

## Poppins

<ul>
  <li v-for="([key, weight]) in Object.entries(poppins)">
    <span>{{ weight }} {{ key }}</span>
    <p class="font-poppins" :style="{ fontWeight: key, fontSize: '24px', lineHeight: '32px', outline: 'none' }" contenteditable>Whereas recognition of the inherent dignity</p>
  </li>
</ul>

## JetBrains Mono

<ul>
  <li v-for="([key, value]) in Object.entries(jetbrains)">
    <span>{{ value }} {{ key }}</span>
    <p class="font-monospace" :style="{ fontWeight: key, fontSize: '24px', lineHeight: '32px', outline: 'none' }" contenteditable>Whereas recognition of the inherent dignity</p>
  </li>
</ul>
