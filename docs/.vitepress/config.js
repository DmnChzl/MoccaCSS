import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "Mocca (S)CSS",
  description: "Unopinionated x Utility First CSS Library",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]],
  themeConfig: {
    logo: "/favicon.svg",
    search: {
      provider: "local"
    },
    nav: [
      { text: "Guide", link: "/installation" },
      { text: "Docs", link: "/base" },
      { text: "v0.3.0", link: "//www.npmjs.com/package/@dmnchzl/mocca-css", target: "_blank", rel: "noreferrer" }
    ],
    sidebar: [
      {
        text: "Get Started",
        items: [{ text: "Installation", link: "/installation" }]
      },
      {
        text: "Docs",
        items: [
          { text: "Base Styles", link: "/base" },
          {
            text: "Utilities",
            link: "/utilities/index",
            items: [
              {
                text: "Colors",
                collapsed: true,
                link: "/utilities/colors/index",
                items: [
                  {
                    text: "Text Color",
                    link: "/utilities/colors/text"
                  },
                  {
                    text: "Background Color",
                    link: "/utilities/colors/background"
                  },
                  {
                    text: "Border Color",
                    link: "/utilities/colors/border"
                  },
                  {
                    text: "SVG Color",
                    link: "/utilities/colors/svg"
                  },
                  {
                    text: "Outline Color",
                    link: "/utilities/colors/outline"
                  }
                ]
              },
              {
                text: "Fonts",
                collapsed: true,
                link: "/utilities/fonts/index",
                items: [
                  {
                    text: "Font Family",
                    link: "/utilities/fonts/family"
                  },
                  {
                    text: "Font Size",
                    link: "/utilities/fonts/size"
                  },
                  {
                    text: "Font Style",
                    link: "/utilities/fonts/style"
                  },
                  {
                    text: "Font Weight",
                    link: "/utilities/fonts/weight"
                  },
                  {
                    text: "Letter Spacing",
                    link: "/utilities/fonts/letter-spacing"
                  },
                  {
                    text: "Line Clamp",
                    link: "/utilities/fonts/line-clamp"
                  },
                  {
                    text: "Line Height",
                    link: "/utilities/fonts/line-height"
                  },
                  {
                    text: "Text Align",
                    link: "/utilities/fonts/text-align"
                  },
                  {
                    text: "Text Decoration",
                    link: "/utilities/fonts/text-decoration"
                  },
                  {
                    text: "Text Overflow",
                    link: "/utilities/fonts/text-overflow"
                  },
                  {
                    text: "Text Transform",
                    link: "/utilities/fonts/text-transform"
                  },
                  {
                    text: "Whitespace",
                    link: "/utilities/fonts/whitespace"
                  }
                ]
              },
              {
                text: "Layout",
                collapsed: true,
                link: "/utilities/layout/index",
                items: [
                  { text: "Box Sizing", link: "/utilities/layout/box-sizing" },
                  { text: "Display", link: "/utilities/layout/display" },
                  { text: "Object Fit", link: "/utilities/layout/object-fit" },
                  { text: "Overflow", link: "/utilities/layout/overflow" },
                  { text: "Position", link: "/utilities/layout/position" },
                  { text: "Top / Right / Bottom / Left", link: "/utilities/layout/top-right-bottom-left" },
                  { text: "Visibility", link: "/utilities/layout/visibility" },
                  { text: "Z-Index", link: "/utilities/layout/z-index" }
                ]
              },
              {
                text: "Flex",
                collapsed: true,
                link: "/utilities/flex/index",
                items: [
                  { text: "Flex Direction", link: "/utilities/flex/direction" },
                  { text: "Flex Wrap", link: "/utilities/flex/wrap" },
                  { text: "Flex Grow / Shrink", link: "/utilities/flex/grow-shrink" },
                  { text: "Justify Content", link: "/utilities/flex/justify-content" },
                  { text: "Align Items", link: "/utilities/flex/align-items" },
                  { text: "Align Self", link: "/utilities/flex/align-self" },
                  { text: "Order", link: "/utilities/flex/order" }
                ]
              },
              {
                text: "Grid",
                collapsed: true,
                link: "/utilities/grid/index",
                items: [
                  { text: "Grid Template Columns", link: "/utilities/grid/template-columns" },
                  { text: "Grid Column Span", link: "/utilities/grid/column-span" },
                  { text: "Grid Template Rows", link: "/utilities/grid/template-rows" },
                  { text: "Grid Row Span", link: "/utilities/grid/row-span" },
                  { text: "Grid Auto Flow", link: "/utilities/grid/auto-flow" }
                ]
              },
              {
                text: "Sizing",
                collapsed: true,
                link: "/utilities/sizing/index",
                items: [
                  { text: "Width", link: "/utilities/sizing/width" },
                  { text: "Height", link: "/utilities/sizing/height" },
                  { text: "Square", link: "/utilities/sizing/square" }
                ]
              },
              {
                text: "Spacing",
                collapsed: true,
                link: "/utilities/spacing/index",
                items: [
                  { text: "Margin", link: "/utilities/spacing/margin" },
                  { text: "Padding", link: "/utilities/spacing/padding" },
                  { text: "Grid Gap", link: "/utilities/spacing/grid-gap" }
                ]
              },
              {
                text: "Borders",
                collapsed: true,
                link: "/utilities/borders/index",
                items: [
                  { text: "Border Radius", link: "/utilities/borders/radius" },
                  { text: "Border Style", link: "/utilities/borders/style" },
                  { text: "Border Width", link: "/utilities/borders/width" },
                  { text: "Outline Style", link: "/utilities/borders/outline-style" },
                  { text: "Outline Width", link: "/utilities/borders/outline-width" },
                  { text: "Outline Offset", link: "/utilities/borders/outline-offset" }
                ]
              },
              {
                text: "Transitions",
                collapsed: true,
                link: "/utilities/transitions/index",
                items: [
                  { text: "Transition Property", link: "/utilities/transitions/property" },
                  { text: "Transition Duration", link: "/utilities/transitions/duration" },
                  { text: "Transition Delay", link: "/utilities/transitions/delay" }
                ]
              },
              {
                text: "Transforms",
                collapsed: true,
                link: "/utilities/transforms/index",
                items: [
                  { text: "Rotate", link: "/utilities/transforms/rotate" },
                  { text: "Scale", link: "/utilities/transforms/scale" },
                  { text: "Skew", link: "/utilities/transforms/skew" },
                  { text: "Translate", link: "/utilities/transforms/translate" }
                ]
              },
              {
                text: "Miscellaneous",
                collapsed: true,
                link: "/utilities/misc/index",
                items: [
                  { text: "Appearance", link: "/utilities/misc/appearance" },
                  { text: "Cursor", link: "/utilities/misc/cursor" },
                  { text: "Opacity", link: "/utilities/misc/opacity" },
                  { text: "Shadow", link: "/utilities/misc/box-shadow" }
                ]
              }
            ]
          }
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/DmnChzl/MoccaCSS" },
      {
        icon: {
          svg: `
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
            </svg>
          `
        },
        link: "https://bsky.app/profile/dmnchzl.dev"
      }
    ],
    footer: {
      message: "Released under the Beerware 🍺 License.",
      copyright: "Made with ❤️ by Damien Chazoule"
    }
  }
});
