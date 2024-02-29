---
layout: doc

next:
  text: "Base Styles"
  link: "/base"
---

# Get Started with Mocca (S)CSS

Strongly influenced by [UnoCSS](https://unocss.dev) and [TailwindCSS](https://tailwindcss.com) before that, **Mocca (S)CSS** is a library with no (or little) visual identity, which doesn't provide any out-of-the-box components; just a ton of atomic classes to focus on the template and business logic, rather than the style...

**Mocca (S)CSS** doesn't claim to be lighter (even if it is 😼) or more efficient than TailwindCSS etc.... It's simply a possibility of what you can do by yourself!

According to [Brad Frost](https://atomicdesign.bradfrost.com)'s atomic model, the scope of **Mocca (S)CSS** covers the "Atoms" part and suggests a standard/convention of what "Ions" or "Design Tokens" should be.

## Installation

::: code-group

```sh [npm]
npm install -D @dmnchzl/mocca-css
```

```sh [pnpm]
pnpm install -D @dmnchzl/mocca-css
```

```sh [yarn]
yarn add -D @dmnchzl/mocca-css
```

:::

## Usage

Import stylesheets into your project.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@dmnchzl/mocca-css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="flex-column gap-y-4 p-4">
    <div className="flex-row justify-around font-mono">
      <div className="h-24 w-16 bg-gray-400 radius-2">Portait</div>
      <div className="sqrt-20 bg-gray-500 radius-4">Square</div>
      <div className="h-16 w-24 bg-gray-600 radius-8">Landscape</div>
    </div>
  </div>
);
```

**Mocca (S)CSS** has a fine-grained package to import all or part of the utilities, as needed.

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@dmnchzl/mocca-css/base"; /* Reset Browser Styles */

import "@dmnchzl/mocca-css/colors";
import "@dmnchzl/mocca-css/flex";
import "@dmnchzl/mocca-css/grid";
import "@dmnchzl/mocca-css/sizing";
import "@dmnchzl/mocca-css/spacing";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render()
```
