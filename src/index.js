/**
 * @name DiscordWebTorrent
 * @author Daenges
 * @description Describe the basic functions. Maybe a support server link.
 * @version 0.0.1
 */

import WebTorrent from 'webtorrent'

module.exports = class MyPlugin {
    constructor(meta) {
        const client = new WebTorrent();
    }
  
    start() {
      // Do stuff when enabled
    }
  
    stop() {
      // Cleanup when disabled
    }
  };