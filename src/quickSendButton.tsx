/** @jsx BdApi.React.createElement */

import { DialogOpenResult } from "betterdiscord";
import { AddToEmojiBox } from "./chatBar";
import WebTorrent from './webtorrent/webtorrent.min.js'
import * as fs from 'fs'
import { SettingsTemplateType } from "./defaultSettings";
import { GetRandomTrackers } from "./trackerlist/randomTrackers";

interface FileResult extends DialogOpenResult {
    filePaths: string[],
    canceled: boolean
}

export default class QuickSendButton {
    sendButton: JSX.Element;
    webtorrentInstance: typeof WebTorrent;
    settings: SettingsTemplateType;

    constructor(instance: typeof WebTorrent, settingsObj: SettingsTemplateType) {
        this.sendButton = <button onClick={() => this.CreateNewTorrent()} className="hover:dwt-tw-text-xl dwt-tw-text-lg dwt-tw-duration-100 dwt-tw-bg-transparent">🧲</button>;
        AddToEmojiBox("DiscordWebTorrent", this.sendButton);
        this.webtorrentInstance = instance;
        this.settings = settingsObj;
    }

    CreateNewTorrent() {
        BdApi.UI.openDialog({}).then((result: FileResult) => {
            if(!(result.canceled)) {
                BdApi.UI.showConfirmationModal("Torrent Confirmation", 
                <div className="dwt-tw-text-center dwt-tw-text-white">
                    <div className="dwt-tw-mb-5">Do you really want to share this file?</div>
                    <div className="dwt-tw-bg-neutral-800 dwt-tw-font-bold dwt-tw-p-2 dwt-tw-overflow-x-auto dwt-tw-text-center dwt-tw-rounded-sm dwt-tw-text-rose-500">{result.filePaths[0]}</div>
                </div>, 
                {confirmText: "Share", onConfirm: () => {

                    // Thanks to @yentis for pointing out this implementation. <3
                    // @ts-ignore
                    this.webtorrentInstance.seed(fs.readFileSync(result.filePaths[0], ''), 
                    {
                        name: result.filePaths[0].split('\\').pop().split('/').pop(),
                        private: false,
                        //announceList: [GetRandomTrackers(7)]
                    });
                    console.log(this.webtorrentInstance);
                }});
            }
        });
    }
}