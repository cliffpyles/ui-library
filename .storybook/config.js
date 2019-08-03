import { configure } from "@storybook/react";
import "./styles.css";
import "../src/index.css";

configure(require.context("../src/components", true, /\.stories\.js$/), module);
