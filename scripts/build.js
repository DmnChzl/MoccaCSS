import chalk from "chalk";
import fsPromises from "node:fs/promises";
import { resolve as resolvePath } from "path";
import * as sass from "sass";

const printInfo = str => console.log(`${chalk.blueBright("[INFO]")} ${str}`);
const printSuccess = str => console.log(`${chalk.greenBright("[SUCCESS]")} ${str}`);
const printError = str => console.log(`${chalk.redBright("[ERROR]")} ${str}`);

const ASCII = `                                          
${chalk.bgWhiteBright("  _ __ ___   ___   ___ ___ __ _  ")}   ___ ___ ___ 
${chalk.bgWhiteBright(" | '_ ` _ \\ / _ \\ / __/ __/ _` | ")}  / __/ __/ __|
${chalk.bgWhiteBright(" | | | | | | (_) | (_| (_| (_| | ")} | (__\\__ \\__ \\
${chalk.bgWhiteBright(" |_| |_| |_|\\___/ \\___\\___\\__,_| ")}  \\___|___/___/
`;

const BUILD_DIR = resolvePath("dist");

const GLOBAL_INPUT = resolvePath("src/assets/scss", "index.scss");
const GLOBAL_OUTPUT = resolvePath(BUILD_DIR, "global.css");

const BASE_INPUT = resolvePath("src/assets/scss/base", "_preflight.scss");
const BASE_OUTPUT = resolvePath(BUILD_DIR, "base.css");

const BORDERS_INPUT = resolvePath("src/assets/scss/utilities/borders", "index.scss");
const BORDERS_OUTPUT = resolvePath(BUILD_DIR, "borders.css");

const COLORS_INPUT = resolvePath("src/assets/scss/utilities/colors", "index.scss");
const COLORS_OUTPUT = resolvePath(BUILD_DIR, "colors.css");

const FLEX_INPUT = resolvePath("src/assets/scss/utilities/flex", "index.scss");
const FLEX_OUTPUT = resolvePath(BUILD_DIR, "flex.css");

const FONTS_INPUT = resolvePath("src/assets/scss/utilities/fonts", "index.scss");
const FONTS_OUTPUT = resolvePath(BUILD_DIR, "fonts.css");

const GRID_INPUT = resolvePath("src/assets/scss/utilities/grid", "index.scss");
const GRID_OUTPUT = resolvePath(BUILD_DIR, "grid.css");

const LAYOUT_INPUT = resolvePath("src/assets/scss/utilities/layout", "index.scss");
const LAYOUT_OUTPUT = resolvePath(BUILD_DIR, "layout.css");

const MISC_INPUT = resolvePath("src/assets/scss/utilities/misc", "index.scss");
const MISC_OUTPUT = resolvePath(BUILD_DIR, "misc.css");

const SIZING_INPUT = resolvePath("src/assets/scss/utilities/sizing", "index.scss");
const SIZING_OUTPUT = resolvePath(BUILD_DIR, "sizing.css");

const SPACING_INPUT = resolvePath("src/assets/scss/utilities/spacing", "index.scss");
const SPACING_OUTPUT = resolvePath(BUILD_DIR, "spacing.css");

const TRANSFORMS_INPUT = resolvePath("src/assets/scss/utilities/transforms", "index.scss");
const TRANSFORMS_OUTPUT = resolvePath(BUILD_DIR, "transforms.css");

const TRANSITIONS_INPUT = resolvePath("src/assets/scss/utilities/transitions", "index.scss");
const TRANSITIONS_OUTPUT = resolvePath(BUILD_DIR, "transitions.css");

const UTILITIES_INPUT = resolvePath("src/assets/scss/utilities", "index.scss");
const UTILITIES_OUTPUT = resolvePath(BUILD_DIR, "utilities.css");

const LAYERS = {
  GLOBAL: "global",
  BASE: "base",
  BORDERS: "borders",
  COLORS: "colors",
  FLEX: "flex",
  FONTS: "fonts",
  GRID: "grid",
  LAYOUT: "layout",
  MISC: "misc",
  SIZING: "sizing",
  SPACING: "spacing",
  TRANSFORMS: "transforms",
  TRANSITIONS: "transitions",
  UTILITIES: "utilities"
};

const getInOutStyleSheets = (layer = LAYERS.GLOBAL) => {
  switch (layer) {
    case LAYERS.GLOBAL:
      return [GLOBAL_INPUT, GLOBAL_OUTPUT];
    case LAYERS.BASE:
      return [BASE_INPUT, BASE_OUTPUT];
    case LAYERS.BORDERS:
      return [BORDERS_INPUT, BORDERS_OUTPUT];
    case LAYERS.COLORS:
      return [COLORS_INPUT, COLORS_OUTPUT];
    case LAYERS.MISC:
      return [MISC_INPUT, MISC_OUTPUT];
    case LAYERS.FLEX:
      return [FLEX_INPUT, FLEX_OUTPUT];
    case LAYERS.FONTS:
      return [FONTS_INPUT, FONTS_OUTPUT];
    case LAYERS.GRID_:
      return [GRID__INPUT, GRID__OUTPUT];
    case LAYERS.LAYOUT:
      return [LAYOUT_INPUT, LAYOUT_OUTPUT];
    case LAYERS.SIZING:
      return [SIZING_INPUT, SIZING_OUTPUT];
    case LAYERS.SPACING:
      return [SPACING_INPUT, SPACING_OUTPUT];
    case LAYERS.TRANSFORMS:
      return [TRANSFORMS_INPUT, TRANSFORMS_OUTPUT];
    case LAYERS.TRANSITIONS:
      return [TRANSITIONS_INPUT, TRANSITIONS_OUTPUT];
    case LAYERS.UTILITIES:
      return [UTILITIES_INPUT, UTILITIES_OUTPUT];
    default:
      return [GLOBAL_INPUT, GLOBAL_OUTPUT];
  }
};

console.log(ASCII);

/**
 * existsAsync + mkdirAsync
 */
async function touchOutputDirectory() {
  try {
    console.log("📂 Checking the ouput directory presence...");
    await fsPromises.access(BUILD_DIR);
    printInfo("The output directory already exists!");
  } catch {
    try {
      console.log("📁 Creating the ouput directory...");
      await fsPromises.mkdir(BUILD_DIR);
      printSuccess("The output directory has been created!");
    } catch {
      printError("Unable to create output directory!");

      process.exit(1);
    }
  }
}

await touchOutputDirectory();

/**
 * Copy/Paste (Recursive)
 */
async function copyFonts() {
  const source = resolvePath("src/assets", "fonts");
  const destination = resolvePath(BUILD_DIR, "fonts");

  try {
    console.log("📦 Packaging fonts...");
    await fsPromises.cp(source, destination, { recursive: true });
    printSuccess("Packaging done!");
  } catch {
    printError("Packaging failed!");

    process.exit(1);
  }
}

await copyFonts();

/**
 * Compiling SASS + Write File(s)
 *
 * @param {string} layer 'global' | 'base' | 'components' | 'utilities'
 */
async function compileStyle(layer) {
  const [input, output] = getInOutStyleSheets(layer);

  console.log(`🚧 Building '${layer}' stylesheet...`);
  const compressed = await sass.compileAsync(input, { style: "compressed" });
  // printInfo('Compilation completed sucessfully!');

  const compressedCss = compressed.css.replaceAll('url("../fonts', 'url("./fonts'); // SHIMS

  try {
    console.log(`💾 Writing the '${layer}.css' file...`);
    await fsPromises.writeFile(output, compressedCss);
    printSuccess(`'${layer}.css' added!`);
  } catch {
    printError(`Unable to write the '${layer}.css' file!`);
  }
}

await Promise.allSettled([
  compileStyle(LAYERS.GLOBAL),
  compileStyle(LAYERS.BASE),
  compileStyle(LAYERS.BORDERS),
  compileStyle(LAYERS.COLORS),
  compileStyle(LAYERS.FLEX),
  compileStyle(LAYERS.FONTS),
  compileStyle(LAYERS.GRID),
  compileStyle(LAYERS.LAYOUT),
  compileStyle(LAYERS.MISC),
  compileStyle(LAYERS.SIZING),
  compileStyle(LAYERS.SPACING),
  compileStyle(LAYERS.TRANSFORMS),
  compileStyle(LAYERS.TRANSITIONS),
  compileStyle(LAYERS.UTILITIES)
]);

// await compileStyle(LAYERS.GLOBAL);
// await compileStyle(LAYERS.BASE);
// await compileStyle(LAYERS.UTILITIES);

process.exit(0);
