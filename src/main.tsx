/** @jsx BdApi.React.createElement */

import WebTorrent from './webtorrent/webtorrent.min.js'
import styles from './tailwind/output.css'
import GenerateTable from './table';
import { defaultTrackerList } from './trackerlist/trackers'


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

      return ( 
        <div>
          <GenerateTable tabeName='FILES' entries={magnetList} /> 
          <hr className='dwt-tw-bg-[#3f4147] dwt-tw-h-px dwt-tw-border-0' />
          <GenerateTable tabeName='TRACKER' entries={[defaultTrackerList]} />
        </div>
        );
    }

  };

export default plugin;