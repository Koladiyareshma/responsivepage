import React, { Component } from "react";

export default class MymapComponent extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=6WH2+XHQ,%20Gokulam%20Arcade,%20Sathana%20jakat%20naka,%20Varachha,%20Surat,%20Gujarat%20395006+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}
