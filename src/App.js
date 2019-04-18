import React from "react";
import SimpleSlide from "./Slidecard";
import SlideContext from "./context";

import Switch from "@material-ui/core/Switch";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
      //handleChange: this.handleChange
    };
  }
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    return (
      <SlideContext.Provider value={this.state}>
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          aria-label="Collapse"
        />
        <SimpleSlide />
      </SlideContext.Provider>
    );
  }
}
