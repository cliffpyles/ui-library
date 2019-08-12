import { create } from "@storybook/theming";
import glassesOpaque from "./img/glasses-opaque.svg";

const black = "#232425";
const white = "#ffffff";
const spaceCadet = "#1d3557";
const queenBlue = "#457b9d";
const lightBlue = "#a8dadc";
const honeyDew = "#f1faee";
const desire = "#e63946";

const appBg = "#fafafa";
const appBorderColor = lightBlue;
const appContentBg = white;
const barBg = spaceCadet;
const barSelectedColor = lightBlue;
const barTextColor = white;
const textColor = spaceCadet;

const inputBg = white;

const colorSecondary = lightBlue;

export default create({
  base: "light",
  brandTitle: "UI Library",
  brandUrl: "https://ui-library.com",
  brandImage: glassesOpaque
});
