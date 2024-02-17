/** @jsx BdApi.React.createElement */

import WebTorrent from './webtorrent/webtorrent.min.js'
import styles from './tailwind/output.css'
import GenerateTable from './table';
//import Settings from './defaultSettings'


const plugin = class MyPlugin {
    meta: any;
    settings = {

    };   

    constructor(pluginMetadata: any) {
      this.meta = pluginMetadata;
      this.settings = {};
    }
  
    start() {
      const magnetURI = "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent"
      const client = new WebTorrent();
      BdApi.DOM.addStyle(this.meta.name, styles);
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
      const magnetList = [
        ['.//gamfejklö/jklö.torrent', "C://home/user/moint.md"],
        ['.//gamfejklö/jklö.torrent', "C://home/user/moint.md"],
        [".//fjffdkjldskjl/jjkl.torrent", "/var/bin/help.txt"]
      ]

      const trackerList = [
          ["udp://tracker.opentrackr.org:1337/announce"],
          ["udp://open.tracker.cl:1337/announce"],
          ["udp://tracker.auctor.tv:6969/announce"],
          ["udp://opentracker.i2p.rocks:6969/announce"],
          ["https://opentracker.i2p.rocks:443/announce"],
          ["udp://open.demonii.com:1337/announce"],
          ["udp://open.stealth.si:80/announce"],
          ["udp://tracker.torrent.eu.org:451/announce"],
          ["udp://tracker.moeking.me:6969/announce"],
          ["udp://exodus.desync.com:6969/announce"],
          ["udp://p4p.arenabg.com:1337/announce"],
          ["udp://movies.zsw.ca:6969/announce"],
          ["udp://explodie.org:6969/announce"],
          ["https://tracker.tamersunion.org:443/announce"],
          ["udp://tracker1.myporn.club:9337/announce"],
          ["udp://tracker1.bt.moack.co.kr:80/announce"],
          ["udp://tracker.tiny-vps.com:6969/announce"],
          ["udp://tracker.theoks.net:6969/announce"],
          ["udp://tracker.skyts.net:6969/announce"],
          ["udp://tracker.cubonegro.lol:6969/announce"]
        ];

      return ( 
        <div>
          <GenerateTable tabeName='FILES' entries={magnetList} /> 
          <hr className='dwt-tw-bg-[#3f4147] dwt-tw-h-px dwt-tw-border-0' />
          <GenerateTable tabeName='TRACKER' entries={trackerList} />
        </div>
        );
    }

  };

export default plugin;