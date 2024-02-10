import WebTorrent from './webtorrent/webtorrent.min.js'
import styles from 'bootstrap/dist/css/bootstrap.min.css';


const plugin = class MyPlugin {
    constructor(meta) {
      this.meta = meta;
    }
  
    start() {
      BdApi.DOM.addStyle(this.meta.name, styles);
      const magnetURI = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
      const client = new WebTorrent()
      
      // client.add(magnetURI, torrent => {
      //   // Got torrent metadata!
      //   console.log('Client is downloading:', torrent.infoHash)}
      // );
    }
  
    stop() {
      BdApi.DOM.removeStyle(this.meta.name);
      // Cleanup when disabled
    }

    getSettingsPanel() {
      const mainDiv = <div id="DiscordWebtorrentSettingsPanel">Hallo Welt</div>
      BdApi.DOM.addStyle("DiscordWebtorrentSettingsPanel", styles)
      return mainDiv;
    }

  };

export default plugin;