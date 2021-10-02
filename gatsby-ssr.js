const React = require('react');

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      data-name="BMC-Widget"
      data-cfasync="false"
      src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
      data-id="eugenez"
      data-description="Support me on Buy me a coffee!"
      data-message=""
      data-color="#FFDD00"
      data-position="Right"
      data-x_margin="18"
      data-y_margin="65"
    ></script>,
  ]);
};
