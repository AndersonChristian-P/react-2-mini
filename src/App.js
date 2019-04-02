import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  // constructor
  state = {
    color: 'black',
    size: 12,
    family: 'monospace',
    allowEdit: true
  }

  // updateColor
  updateColor = (newColor) => {
    this.setState({
      color: newColor
    })
  }

  // updateSize
  updateSize = (newSize) => {
    this.setState({
      size: Number(newSize)
    })
  }

  // updateFamily
  updateFamily = (newFamily) => {
    this.setState({
      family: newFamily
    })
  }

  // updateEditStatus
  updateEditStatus = (edit) => {
    this.setState({
      allowEdit: edit
    })
  }

  render() {
    return (
      <div>
        <div className="headerBar">
          <EditToggle updateEditStatus={this.updateEditStatus} allowEdit={this.state.allowEdit} />
          <ColorChanger updateColor={this.updateColor} color={this.state.color} allowEdit={this.state.allowEdit} />
          <SizeChanger updateSize={this.updateSize} size={this.state.size} allowEdit={this.state.allowEdit} />
          <FamilyChanger updateFamily={this.updateFamily} family={this.state.family} allowEdit={this.state.allowEdit} />
        </div>
        <div className="textArea">
          <TextContainer
            color={this.state.color}
            size={this.state.size}
            family={this.state.family}
          />
        </div>
      </div>
    );
  }
}

export default App;
