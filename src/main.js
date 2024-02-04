import WebTorrent from './webtorrent/webtorrent.chromeapp'

module.exports = class MyPlugin {
    constructor(meta) {
    }
  
    start() {
      const client = new WebTorrent()
      const magnetURI = '...'

      client.add(magnetURI, torrent => {
        // Got torrent metadata!
        console.log('Client is downloading:', torrent.infoHash);
      })
    }
  
    stop() {
      // Cleanup when disabled
    }
  };