import React, { Component, useState } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: false
    };
  }

  handleClick() {
    console.log("handle click");
    this.setState({ enabled: !this.state.enabled });
  }

  render() {
    const { nombre } = this.props;
    return (
      <div onClick={() => this.handleClick()}>
        Hola soyyy {this.state.enabled && nombre}
      </div>
    );
  }
}

// export const Button = ({ nombre }) => {
//   const [enabled, setEnabled] = useState(false);

//   const handleClick = e => {
//     console.log("hiciste click");
//     console.log(e);
//     setEnabled(!enabled);
//   };
//   return <div onClick={handleClick}>Hola soy {enabled && nombre}</div>;
// };
