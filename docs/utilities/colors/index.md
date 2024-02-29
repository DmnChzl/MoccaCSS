---
prev:
  text: "Utilities"
  link: "/utilities/index"
next:
  text: "Text Color"
  link: "/utilities/colors/text"
---

<script setup>
import { ref } from 'vue';

const colors = ref({
  gray: {
    100: "#E6E6E6",
    200: "#C9C9C9",
    300: "#B0B0B0",
    400: "#949494",
    500: "#7A7A7A",
    600: "#616161",
    700: "#4A4A4A",
    800: "#303030",
    900: "#1A1A1A"
  },
  'deep-orange': {
    100: "#FFDCD1",
    200: "#FFB59E",
    300: "#FF9270",
    400: "#FF6A3D",
    500: "#FF470F",
    600: "#D63200",
    700: "#A32600",
    800: "#6B1900",
    900: "#380D00"
  },
  yellow: {
    100: "#FFF8E5",
    200: "#FFF3D1",
    300: "#FFECB8",
    400: "#FFE7A3",
    500: "#FFE08A",
    600: "#FFCB3D",
    700: "#EBAC00",
    800: "#9E7400",
    900: "#4D3800"
  },
  green: {
    100: "#DCF4E9",
    200: "#B5E8D1",
    300: "#92DEBB",
    400: "#6BD2A3",
    500: "#48C78E",
    600: "#32A471",
    700: "#267D56",
    800: "#195238",
    900: "#0D2B1E"
  },
  teal: {
    100: "#C2FFF6",
    200: "#85FFED",
    300: "#4DFFE4",
    400: "#0FFFDB",
    500: "#00D1B2",
    600: "#00A88F",
    700: "#00806C",
    800: "#005245",
    900: "#002923"
  },
  'light-blue': {
    100: "#DAE9F6",
    200: "#B1D1EC",
    300: "#8CBCE3",
    400: "#63A4D9",
    500: "#3E8ED0",
    600: "#2A72AC",
    700: "#205783",
    800: "#153956",
    900: "#0B1E2D"
  },
  indigo: {
    100: "#DCE0F4",
    200: "#B5BEE8",
    300: "#92A0DE",
    400: "#6B7ED2",
    500: "#485FC7",
    600: "#3247A4",
    700: "#26367D",
    800: "#192452",
    900: "#0D132B"
  },
  purple: {
    100: "#F0E0FF",
    200: "#E1C2FF",
    300: "#D5A8FF",
    400: "#C68AFF",
    500: "#B76BFF",
    600: "#9524FF",
    700: "#7100DB",
    800: "#4A008F",
    900: "#250047"
  },
  rose: {
    100: "#FCD9E0",
    200: "#F9B3C1",
    300: "#F792A6",
    400: "#F46C87",
    500: "#F14668",
    600: "#E8123D",
    700: "#AF0D2E",
    800: "#72091E",
    900: "#39040F"
  }
})
</script>

# Colors

Here is how to import `colors` utility classes.

```js
import "@dmnchzl/mocca-css/colors";
```

## Black / White

<ul class="flex-row flex-wrap gap-x-2">
  <li class="flex-column text-small" style="width: calc((100% / 2) - 8px);">
    <div class="w-1/1 h-12 bg-black radius-4" />
    <span>#000</span>
  </li>
  <li class="flex-column text-small" style="width: calc((100% / 2) - 8px);">
    <div class="w-1/1 h-12 bg-white radius-4" />
    <span>#FFF</span>
  </li>
</ul>

## Gray

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.gray)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Deep Orange

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors['deep-orange'])" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Yellow

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.yellow)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Green

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.green)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Teal

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.teal)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Light Blue

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors['light-blue'])" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Indigo

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.indigo)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Purple

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.purple)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Rose

<ul class="flex-row flex-wrap gap-x-2">
  <li v-for="([tint, color]) in Object.entries(colors.rose)" class="flex-column text-small" style="width: calc((100% / 3) - 8px);">
    <div class="w-1/1 h-12 radius-4" :style="{ backgroundColor: color }" />
    <span>{{ tint }}</span>
    <span>{{ color }}</span>
  </li>
</ul>

## Others

**Mocca (S)CSS** also provides `current` and `transparent` variations, as well as semantic colors:

| Semantic             | Color                    |
| :------------------- | :----------------------- |
| `*`-neutral-`<tint>` | `*`-gray-`<tint>`        |
| `*`-error-`<tint>`   | `*`-deep-orange-`<tint>` |
| `*`-alert-`<tint>`   | `*`-yellow-`<tint>`      |
| `*`-success-`<tint>` | `*`-green-`<tint>`       |
| `*`-info-`<tint>`    | `*`-indigo-`<tint>`      |
