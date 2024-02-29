---
prev:
  text: "Get Started"
  link: "/installation"
next:
  text: "Utilities"
  link: "/utilities/index"
---

# Base Styles

**Mocca (S)CSS** is built on top of [NormalizeCSS](https://necolas.github.io/normalize.css) by default.

```jsx
import "@dmnchzl/mocca-css/base"; /* Reset Browser Styles */
```

## Override

Partly import stylesheets into your project.

```jsx
// import './reset.css';
import "./modern-normalize.css";

import "@dmnchzl/mocca-css/colors";
import "@dmnchzl/mocca-css/fonts";
import "@dmnchzl/mocca-css/flex";
import "@dmnchzl/mocca-css/sizing";
import "@dmnchzl/mocca-css/spacing";
```
