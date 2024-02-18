/** @jsx BdApi.React.createElement */

import { AppendToEmojiBox } from "./chatBar";

export default class QuickSendButton {
    sendButton: JSX.Element;

    constructor() {
        this.sendButton = <div className="dwt-tw-bg-blue-500">HELO</div>;
        AppendToEmojiBox("DiscordWebTorrent", this.sendButton); 
    }

    initialize() {

    }

    unload() {

    }
}