---
prev:
  text: "Margin"
  link: "/utilities/spacing/margin"
next:
  text: "Grid Gap"
  link: "/utilities/spacing/grid-gap"
---

# Padding

Below, utility classes to apply `padding`, `padding-top`, `padding-right`, `padding-bottom` or `padding-left` property.

> @for `$value` from 0 through 16

| Class         | Properties                                                               |
| :------------ | :----------------------------------------------------------------------- |
| .p-`<value>`  | `padding: #{$value * 0.25}rem;`                                          |
| .px-`<value>` | `padding-left: #{$value * 0.25}rem; padding-right: #{$value * 0.25}rem;` |
| .py-`<value>` | `padding-top: #{$value * 0.25}rem; padding-bottom: #{$value * 0.25}rem;` |
| .pt-`<value>` | `padding-top: #{$value * 0.25}rem;`                                      |
| .pr-`<value>` | `padding-right: #{$value * 0.25}rem;`                                    |
| .pb-`<value>` | `padding-bottom: #{$value * 0.25}rem;`                                   |
| .pl-`<value>` | `padding-left: #{$value * 0.25}rem;`                                     |

## Example(s)

<div class="flex-row justify-around items-center radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="px-12 radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  </div>
  <div class="py-12 radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  </div>
</div>

```html
<div class="px-12 ...">
  <div class="sqrt-12">1</div>
</div>
<div class="py-12 ...">
  <div class="sqrt-12">2</div>
</div>
```

<div class="flex-row justify-around items-center radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="pt-12 radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  </div>
  <div class="pr-12 radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  </div>
  <div class="pb-12 radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  </div>
  <div class="pl-12 radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
  </div>
</div>

```html
<div class="pt-12 ...">
  <div class="sqrt-12">1</div>
</div>
<div class="pr-12 ...">
  <div class="sqrt-12">2</div>
</div>
<div class="pb-12 ...">
  <div class="sqrt-12">3</div>
</div>
<div class="pl-12 ...">
  <div class="sqrt-12">4</div>
</div>
```

## Media Queries

`padding`, `padding-top`, `padding-right`, `padding-bottom` and `padding-left` are supported by changing state on-the-fly! You can use it like this:

```html
<div class="py-4 small:py-8 medium:py-auto">...</div>
```
