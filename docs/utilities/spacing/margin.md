---
prev:
  text: "Spacing"
  link: "/utilities/spacing/index"
next:
  text: "Padding"
  link: "/utilities/spacing/padding"
---

# Margin

Below, utility classes to apply `margin`, `margin-top`, `margin-right`, `margin-bottom` or `margin-left` property.

> @for `$value` from 0 through 16

| Class         | Properties                                                             |
| :------------ | :--------------------------------------------------------------------- |
| .m-auto       | `margin: auto;`                                                        |
| .mx-auto      | `margin-left: auto; margin-right: auto;`                               |
| .my-auto      | `margin-top: auto; margin-bottom: auto;`                               |
| .mt-auto      | `margin-top: auto;`                                                    |
| .mr-auto      | `margin-right: auto;`                                                  |
| .mb-auto      | `margin-bottom: auto;`                                                 |
| .ml-auto      | `margin-left: auto;`                                                   |
| .m-`<value>`  | `margin: #{$value * 0.25}rem;`                                         |
| .mx-`<value>` | `margin-left: #{$value * 0.25}rem; margin-right: #{$value * 0.25}rem;` |
| .my-`<value>` | `margin-top: #{$value * 0.25}rem; margin-bottom: #{$value * 0.25}rem;` |
| .mt-`<value>` | `margin-top: #{$value * 0.25}rem;`                                     |
| .mr-`<value>` | `margin-right: #{$value * 0.25}rem;`                                   |
| .mb-`<value>` | `margin-bottom: #{$value * 0.25}rem;`                                  |
| .ml-`<value>` | `margin-left: #{$value * 0.25}rem;`                                    |

### Example(s)

<div class="flex-row justify-around items-center radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 mx-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  </div>
  <div class="radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 my-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  </div>
</div>

```html
<div>
  <div class="sqrt-12 mx-12 ...">1</div>
</div>
<div>
  <div class="sqrt-12 my-12 ...">2</div>
</div>
```

<div class="flex-row justify-around items-center radius-8 p-6" style="background-color: var(--vp-c-bg-alt);">
  <div class="radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 mt-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">1</div>
  </div>
  <div class="radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 mr-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">2</div>
  </div>
  <div class="radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 mb-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">3</div>
  </div>
  <div class="radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-12 ml-12 flex justify-center items-center font-mono text-white radius-4" style="background-color: var(--vp-c-brand-3);">4</div>
  </div>
</div>

```html
<div>
  <div class="sqrt-12 mt-12 ...">1</div>
</div>
<div>
  <div class="sqrt-12 mr-12 ...">2</div>
</div>
<div>
  <div class="sqrt-12 mb-12 ...">3</div>
</div>
<div>
  <div class="sqrt-12 ml-12 ...">4</div>
</div>
```

## Media Queries

`margin`, `margin-top`, `margin-right`, `margin-bottom` and `margin-left` are supported by changing state on-the-fly! You can use it like this:

```html
<div class="mx-4 small:mx-8 medium:mx-auto">...</div>
```
