import React, { Component } from 'react';
import { Canvas } from 'mason-library';

export default class Home extends Component {
  render() {
    return <div>
      <Canvas id={'5bbe729b2c80c6000354098c'} />
      <div class="blue">This is totally custom, hardcoded HTML</div>
      <Canvas id={'5bbe6fc82c80c60003540922'} />
      <div class="red">This is different custom, hardcoded HTML</div>
    </div>
  }
}