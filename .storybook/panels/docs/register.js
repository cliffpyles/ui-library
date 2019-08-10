// register.js

import React from "react";
import { STORY_CHANGED } from "@storybook/core-events";
import addons, { types } from "@storybook/addons";

const ADDON_ID = "ui-library-docs";
const PARAM_KEY = "uiLibraryDocs";
const PANEL_ID = `${ADDON_ID}/panel`;

class MyPanel extends React.Component {
  state = { value: "" };

  componentDidMount() {
    const { api, channel } = this.props;
    // console.log("props: ", this.props);

    api.on(STORY_CHANGED, this.onStoryChange);
  }

  componentWillUnmount() {
    const { api } = this.props;

    api.off(STORY_CHANGED, this.onStoryChange);
  }

  onStoryChange = id => {
    const { api } = this.props;
    const params = api.getParameters(id, PARAM_KEY);

    if (params && !params.disable) {
      const value = params.data;
      this.setState({ value });
    } else {
      this.setState({ value: undefined });
    }
  };

  render() {
    const { value } = this.state;
    const { active } = this.props;
    return active ? <div>{value}</div> : null;
  }
}

addons.register(ADDON_ID, api => {
  const title = "Docs";

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title,
    render: ({ active }) => {
      return (
        <MyPanel
          key={ADDON_ID}
          channel={addons.getChannel()}
          api={api}
          active={active}
        />
      );
    }
  });
});
