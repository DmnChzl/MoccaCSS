---
layout: doc

next:
  text: "Base Styles"
  link: "/base"
---

# Get Started with Mocca (S)CSS

Strongly influenced by [UnoCSS](https://unocss.dev) and [TailwindCSS](https://tailwindcss.com) before that, **Mocca (S)CSS** is a library with no (or little) visual identity, which doesn't provide any out-of-the-box components; just a ton of atomic classes to focus on the template and business logic, rather than the style...

**Mocca (S)CSS** doesn't claim to be lighter (even if it is 😼) or more efficient than TailwindCSS etc.... It's just different, or simply a possibility of what you can do by yourself!

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
  <div className="flex-column p-4">
    <div className="flex-row gap-x-4 justify-around">
      <div className="h-48 w-32 bg-teal-400 radius-2">...</div>
      <div className="sqrt-40 bg-indigo-500 radius-4 font-mono">...</div>
      <div className="h-32 w-48 bg-rose-600 radius-8">...</div>
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
import "@dmnchzl/mocca-css/fonts";
import "@dmnchzl/mocca-css/sizing";
import "@dmnchzl/mocca-css/spacing";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render()
```
