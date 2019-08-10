import React from "react";
import { STORY_CHANGED } from "@storybook/core-events";
import addons, { types } from "@storybook/addons";
import Panel from "./components/Panel";

const ADDON_ID = "ui-library-docs";
const PARAM_KEY = "uiLibraryDocs";
const PANEL_ID = `${ADDON_ID}/panel`;

addons.register(ADDON_ID, api => {
  const title = "Docs";

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render: ({ active }) => {
      const currentParam = api.getCurrentParameter() || {};
      return (
        <Panel
          key={ADDON_ID}
          channel={addons.getChannel()}
          api={api}
          active={active}
          component={currentParam.component}
        />
      );
    }
  });
});
