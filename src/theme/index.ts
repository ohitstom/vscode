import { variants } from "@catppuccin/palette";
import {
  CatppuccinFlavour,
  CatppuccinPalette,
  ThemeContext,
  ThemeOptions,
} from "../types";
import { getTokenColors } from "./tokenColors";
import { getUiColors } from "./uiColors";
import { capitalize } from "./utils";

export const compileTheme = (
  flavour: CatppuccinFlavour = "mocha",
  options: ThemeOptions = {
    accent: "mauve",
    italicComments: true,
    italicKeywords: true,
    colorOverrides: null,
  }
) => {
  const ctpPalette = Object.entries(variants[flavour])
    .map(([k, v]) => {
      return {
        [k as unknown as string]: v.hex,
      };
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  const palette: CatppuccinPalette = {
    ...(ctpPalette as CatppuccinPalette),
    ...options.colorOverrides?.all,
    ...options.colorOverrides?.[flavour],
  };

  const context: ThemeContext = {
    palette,
    options,
    isLatte: flavour === "latte",
  };

  const flavourName = `Catppuccin ${capitalize(flavour)}`;

  const theme = {
    name: flavourName,
    type: context.isLatte ? "light" : "dark",
    semanticHighlighting: true,
    semanticTokenColors: {
      enumMember: {
        foreground: palette.sky,
      },
      "variable.constant": {
        foreground: palette.yellow,
      },
      "variable.defaultLibrary": {
        foreground: palette.peach,
      },
    },
    tokenColors: getTokenColors(context),
    colors: getUiColors(context),
  };

  return theme;
};