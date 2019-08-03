import { configure } from "@storybook/react";
import "./styles.scss";
import "../src/index.css";

configure(require.context("../src/components", true, /\.stories\.js$/), module);
