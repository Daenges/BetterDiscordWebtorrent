/** @jsx BdApi.React.createElement */

import { AddToEmojiBox } from "./chatBar";

export default class QuickSendButton {
    sendButton: JSX.Element;

    constructor() {
        this.sendButton = <button onClick={() => this.CreateNewTorrent()} className="hover:dwt-tw-text-xl dwt-tw-text-lg dwt-tw-duration-100 dwt-tw-bg-transparent">🧲</button>;
        AddToEmojiBox("DiscordWebTorrent", this.sendButton); 
    }

    CreateNewTorrent() {
        BdApi.UI.openDialog({}).then(result => {
            if(!result.cancelled) {
                console.log(result.filePath);
                BdApi.UI.showConfirmationModal("Torrent Confirmation", 
                <div className="dwt-tw-text-center">
                    <span>Do you really want to share this file?</span>
                    <br/>
                    <span className="dwt-tw-bg-neutral-800 dwt-tw-p-2 dwt-tw-rounded-sm dwt-tw-text-rose-500">{result.filePath}</span>
                </div>, 
                {confirmText: "Share", onConfirm: () => {}});
            }
        });
    }
}