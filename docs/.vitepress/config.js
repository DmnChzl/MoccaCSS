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
      { text: "v0.2.0", link: "//www.npmjs.com/package/@dmnchzl/mocca-css", target: "_blank", rel: "noreferrer" }
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z" />
            </svg>
          `
        },
        link: "https://threads.net/@dmn_chzl"
      }
    ],
    footer: {
      message: "Released under the Beerware 🍺 License.",
      copyright: `Make with ❤️ by Damien Chazoule`
    }
  }
});
