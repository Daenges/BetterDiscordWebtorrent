/** @jsx BdApi.React.createElement */

import { DialogOpenResult } from "betterdiscord";
import { AddToEmojiBox } from "./chatBar";
import WebTorrent from './webtorrent/webtorrent.min.js'
import * as fs from 'fs';

interface FileResult extends DialogOpenResult {
    filePaths: string[],
    canceled: boolean
}

export default class QuickSendButton {
    sendButton: JSX.Element;
    webtorrentInstance: typeof WebTorrent;

    constructor(instance: typeof WebTorrent) {
        this.sendButton = <button onClick={() => this.CreateNewTorrent()} className="hover:dwt-tw-text-xl dwt-tw-text-lg dwt-tw-duration-100 dwt-tw-bg-transparent">🧲</button>;
        AddToEmojiBox("DiscordWebTorrent", this.sendButton);
        this.webtorrentInstance = instance;
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
                    this.webtorrentInstance.seed(fs.readFileSync(result.filePaths[0]));
                    console.log(this.webtorrentInstance);
                }});
            }
        });
    }
}