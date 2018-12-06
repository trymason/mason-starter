import React, { Component } from 'react';
import { Canvas } from 'mason-library';
import config from '../App/config';

export default class Home extends Component {
  render() {
    return <div className="w-100 ironick">
      <div className="fullscreen-video-wrap bg-black">
        <div className="dn db-ns">
          <video src="https://theroyalhoteldrouin.com.au/wp-content/themes/acestrap_wp/videos/backgroundnew.mp4" type="video/mp4" autoplay="true" muted="true" loop="true" />
        </div>
        <div className="overlay" />
      </div>
      <div className='min-vh-100 white w-100'>
        <Canvas id={config.mason.navbar} />
        <div className='min-vh-100 h-100 '>
          <Canvas id={config.mason.homeHero} />
          <Canvas id={config.mason.footer} />
        </div>
      </div>
    </div>
  }
}