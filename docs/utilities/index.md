---
prev:
  text: "Base Styles"
  link: "/base"
next:
  text: "Colors"
  link: "/utilities/colors/index"
---

# Utilities

Here is how to import `all` utility classes.

```jsx
import "@dmnchzl/mocca-css/utilities";
```

**Mocca (S)CSS** has a fine-grained package to import all or part of the utilities, as needed.

```jsx
import "@dmnchzl/mocca-css/colors";
import "@dmnchzl/mocca-css/flex";
import "@dmnchzl/mocca-css/fonts";
import "@dmnchzl/mocca-css/grid";
import "@dmnchzl/mocca-css/layout";
import "@dmnchzl/mocca-css/misc";
import "@dmnchzl/mocca-css/sizing";
import "@dmnchzl/mocca-css/spacing";
import "@dmnchzl/mocca-css/transforms";
import "@dmnchzl/mocca-css/transitions";
```

## Pseudo Classes / Media Queries

Some properties are supported by changing state on-the-fly! Here is their reference:

| Class         | Pseudo Class |
| :------------ | :----------- |
| .hover:`*`    | `:hover`     |
| .focus:`*`    | `:focus`     |
| .disabled:`*` | `:disabled`  |

Some properties are supported by changing breakpoint on-the-fly! Here is their reference:

| Class            | Media Query                  |
| :--------------- | :--------------------------- |
| .small:`*`       | `@media (min-width: 640px)`  |
| .medium:`*`      | `@media (min-width: 768px)`  |
| .large:`*`       | `@media (min-width: 1024px)` |
| .extra-large:`*` | `@media (min-width: 1280px)` |
