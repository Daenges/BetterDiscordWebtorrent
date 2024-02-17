/** @jsx BdApi.React.createElement */

import WebTorrent from './webtorrent/webtorrent.min.js'
import styles from './tailwind/output.css'
import GenerateTable from './table';
import { SettingsTemplate, SettingsTemplateType } from './defaultSettings';


const plugin = class MyPlugin {
    meta: any;
    settings : SettingsTemplateType;
    client: typeof WebTorrent;

    constructor(pluginMetadata: any) {
      this.meta = pluginMetadata;
    }
  
    start() {
      this.settings = Object.assign({}, SettingsTemplate, BdApi.Data.load("DiscordWebTorrent", "settings"));
      BdApi.DOM.addStyle(this.meta.name, styles);
      this.client = new WebTorrent();
    }
  
    stop() {
      BdApi.DOM.removeStyle(this.meta.name);
      BdApi.Data.save("DiscordWebTorrent", "settings", this.settings);
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
          <GenerateTable tabeName='TRACKER' entries={[this.settings.trackerList]} />
        </div>
        );
    }

  };

export default plugin;