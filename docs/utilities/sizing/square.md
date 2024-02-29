---
prev:
  text: "Height"
  link: "/utilities/sizing/height"
next:
  text: "Spacing"
  link: "/utilities/spacing/index"
---

# Square

Below, utility classes to apply `width` and `height` properties.

> @for `$value` from 0 through 64

| Class           | Properties                                                 |
| :-------------- | :--------------------------------------------------------- |
| .sqrt-`<value>` | `width: #{$value * 0.25}rem; height: #{$value * 0.25}rem;` |

### Example(s)

<div class="radius-8 p-6 mt-8" style="background-color: var(--vp-c-bg-alt);">
  <div class="sqrt-64 flex m-auto radius-4" style="background-color: var(--vp-c-bg);">
    <div class="sqrt-56 flex m-auto radius-4" style="background-color: var(--vp-c-brand-3);">
      <div class="sqrt-48 flex m-auto radius-4" style="background-color: var(--vp-c-bg);">
        <div class="sqrt-40 flex m-auto radius-4" style="background-color: var(--vp-c-brand-3);">
          <div class="sqrt-32 flex m-auto radius-4" style="background-color: var(--vp-c-bg);">
            <div class="sqrt-24 flex m-auto radius-4" style="background-color: var(--vp-c-brand-3);">
              <div class="sqrt-16 flex m-auto radius-4" style="background-color: var(--vp-c-bg);">
                <div class="sqrt-8 flex m-auto radius-4" style="background-color: var(--vp-c-brand-3);" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<div class="sqrt-64 flex m-auto ...">
  <div class="sqrt-56 flex m-auto ...">
    <div class="sqrt-48 flex m-auto ...">
      <div class="sqrt-40 flex m-auto ...">
        <div class="sqrt-32 flex m-auto ...">
          <div class="sqrt-24 flex m-auto ...">
            <div class="sqrt-16 flex m-auto ...">
              <div class="sqrt-8 flex m-auto ..."></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```
