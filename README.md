# Mocca (S)CSS

> _Hi, my name is, what? My name is, who? My name is, "ekekekkekkek", Mocca (S)CSS_

Strongly influenced by [UnoCSS](https://unocss.dev) and [TailwindCSS](https://tailwindcss.com) before that, **Mocca (S)CSS** is a library with no (or little) visual identity, which doesn't provide any out-of-the-box components; just a ton of atomic classes to focus on the template and business logic, rather than the style....

**Mocca (S)CSS** doesn't claim to be lighter (even if it is 😼) or more efficient than TailwindCSS etc.... It's simply a possibility of what you can do by yourself!

According to [Brad Frost](https://atomicdesign.bradfrost.com)'s atomic model, the scope of **Mocca (S)CSS** covers the "Atoms" part and suggests a standard/convention of what "Ions" or "Design Tokens" should be.

## Process

Repository:

```
git clone -b develop https://github.com/DmnChzl/MoccaCSS.git
```

Install:

```
pnpm install
```

Dev:

```
pnpm run serve
```

Build:

```
pnpm run build
```

## Project Arch

```
/
├── .github/                    # CI/CD GitHub Actions
├── .husky/                     # Git Hooks
├── docs/
│   ├── .vitepress
│   │   ├── theme/              # (Custom) Theme
│   │   └── config.js           # VitePress Config
│   ├── public/
│   ├── utilities/              # Markdown Files
│   └── index.md                # Markdown Entry Point
├── scripts/                    # Build Script
├── src/
│   ├── assets/
│   │  ├── fonts/               # Poppins + JetBrains Mono
│   │  └── scss/
│   │     ├── base/             # NormalizeCSS
│   │     ├── utilities/        # SCSS Files
│   │     └── index.scss        # SCSS Entry Point
│   └── index.js                # JavaScript Entry Point (Dev Only)
├── index.html                  # HTML Entry Point (Dev Only)
├── package.json
├── prettier.config.cjs         # Prettier Config
├── README.md
└── vite.config.js              # Vite Config
```

## License

```
"THE BEER-WARE LICENSE" (Revision 42):
<phk@FreeBSD.ORG> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return. Damien Chazoule
```
