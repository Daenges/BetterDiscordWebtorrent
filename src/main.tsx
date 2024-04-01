/** @jsx BdApi.React.createElement */

import WebTorrent from './webtorrent/webtorrent.min.js'
import styles from './tailwind/output.css'
import { GetRandomTrackers } from './trackerlist/randomTrackers';
import GenerateTable from './table';
import { SettingsTemplate, SettingsTemplateType } from './defaultSettings';
import QuickSendButton from './quickSendButton';


const plugin = class MyPlugin {
    meta: any;
    settings : SettingsTemplateType;
    client: typeof WebTorrent;
    quickSendButton: QuickSendButton;


    constructor(pluginMetadata: any) {
      this.meta = pluginMetadata;
    }
  
    start() {
      // Load Settings
      this.settings = Object.assign({}, SettingsTemplate);//, BdApi.Data.load("DiscordWebTorrent", "settings"));

      // Load Tailwind Styles
      BdApi.DOM.addStyle(this.meta.name, styles);

      // Create WebTorrent instance
      this.client = new WebTorrent({
        maxConns: 55,
        tracker: {
          announce: GetRandomTrackers(7),
          rtcConfig: {
            iceServers: [
              {
                urls: ['stun:stun.l.google.com:19305', 'stun:stun1.l.google.com:19305']
              }
            ]
          }
        },
        dht: {},
        lsd: true,
        webSeeds: true,
        utp: true,
        downloadLimit: -1,
        uploadLimit: -1,
        torrentPort: 12345
      });
      this.quickSendButton = new QuickSendButton(this.client, this.settings);

      console.log("WebRTC is " + (WebTorrent.WEBRTC_SUPPORT ? "supported" : "not supported"))
      this.client.on('listening', () => {
        console.log('WebTorrent client is listening on port', this.client.torrentPort);
      });
    }
  
    stop() {
      BdApi.DOM.removeStyle(this.meta.name);
      BdApi.Patcher.unpatchAll("DiscordWebTorrent");
      BdApi.Data.save("DiscordWebTorrent", "settings", this.settings);
      this.client.destroy();
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
          <GenerateTable tabeName='TRACKER' entries={this.settings.trackerList.map(str => [str])} />
        </div>
        );
    }

  };

export default plugin;